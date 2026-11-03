import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GOOGLE_KEY } from "../../../config/constant";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";

// Helper to convert date string (e.g., DD-MM-YYYY or ISO) into YYYY-MM-DD required by HTML5 date inputs
const formatDateForInput = (dateStr) => {
  if (!dateStr) return "";
  const str = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const parts = str.split(/[-/]/);
  if (parts.length === 3) {
    if (parts[0].length <= 2 && parts[2].length === 4) {
      // DD-MM-YYYY -> YYYY-MM-DD
      return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
    }
    if (parts[0].length === 4 && parts[2].length <= 2) {
      return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(2, "0")}`;
    }
  }
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }
  return str;
};

const PersonalTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;
  const setIsEditing = parentSetIsEditing || setLocalIsEditing;

  // Independent React Hook Form instance
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      bio: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      personalWebsite: "",
      linkedIn: "",
      twitter: "",
      youtubeChannel: "",
    },
    mode: "onBlur",
  });

  // Independent GET API query using useCommon
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "personal",
  });

  // Independent POST API mutation using useProfile
  const { updatePersonalTab, isUpdating } = useProfile();

  // Populate data when GET API returns
  useEffect(() => {
    if (!profileData) return;

    const resData = profileData?.data || profileData;
    const details = resData?.details || resData?.user || resData;
    const address = details?.address || resData?.address || {};
    const links =
      details?.socialAndPortfolioLinks ||
      resData?.socialAndPortfolioLinks ||
      {};

    const firstName = details?.firstName || details?.first_name || "";
    const lastName = details?.lastName || details?.last_name || "";

    const rawGender = details?.gender || "";
    const formattedGender = rawGender
      ? rawGender.charAt(0).toUpperCase() + rawGender.slice(1).toLowerCase()
      : "";

    reset({
      firstName,
      lastName,
      email: details?.email ?? "",
      phone: details?.phone ?? "",
      dateOfBirth: formatDateForInput(details?.dateOfBirth ?? ""),
      gender: formattedGender,
      bio: details?.bio ?? "",
      streetAddress: address?.streetAddress ?? details?.streetAddress ?? "",
      city: address?.city ?? details?.city ?? "",
      state: address?.state ?? details?.state ?? "",
      country: address?.country ?? details?.country ?? "",
      zipCode: address?.zipCode ?? details?.zipCode ?? "",
      personalWebsite:
        links?.personalWebsite ?? details?.personalWebsite ?? "",
      linkedIn: links?.linkedIn ?? details?.linkedIn ?? "",
      twitter: links?.twitter ?? details?.twitter ?? "",
      youtubeChannel:
        links?.youtubeChannel ?? details?.youtubeChannel ?? "",
    });
  }, [profileData, reset]);

  // Google Places Autocomplete on streetAddress
  const streetInputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (!GOOGLE_KEY) return;

    let isMounted = true;

    const initAutocomplete = () => {
      if (!streetInputRef.current || !window.google?.maps?.places) return;

      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }

      const autocomplete = new window.google.maps.places.Autocomplete(
        streetInputRef.current,
        {
          types: ["geocode", "establishment"],
          fields: [
            "address_components",
            "formatted_address",
            "name",
            "geometry",
          ],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place || !place.address_components) return;

        let streetNumber = "";
        let route = "";
        let city = "";
        let state = "";
        let country = "";
        let zipCode = "";

        for (const component of place.address_components) {
          const types = component.types;
          if (types.includes("street_number")) {
            streetNumber = component.long_name;
          }
          if (types.includes("route")) {
            route = component.long_name;
          }
          if (types.includes("locality")) {
            city = component.long_name;
          } else if (!city && types.includes("sublocality_level_1")) {
            city = component.long_name;
          } else if (!city && types.includes("postal_town")) {
            city = component.long_name;
          }
          if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          }
          if (types.includes("country")) {
            country = component.long_name;
          }
          if (types.includes("postal_code")) {
            zipCode = component.long_name;
          }
        }

        const streetAddress =
          [streetNumber, route].filter(Boolean).join(" ") ||
          place.name ||
          place.formatted_address ||
          streetInputRef.current?.value ||
          "";

        setValue("streetAddress", streetAddress, {
          shouldValidate: true,
          shouldDirty: true,
        });

        if (city) {
          setValue("city", city, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        if (state) {
          setValue("state", state, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        if (country) {
          setValue("country", country, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        if (zipCode) {
          setValue("zipCode", zipCode, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      });

      autocompleteRef.current = autocomplete;
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
    } else {
      const existingScript = document.getElementById(
        "google-maps-places-script"
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-maps-places-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (isMounted) initAutocomplete();
        };
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener("load", () => {
          if (isMounted) initAutocomplete();
        });
      }
    }

    return () => {
      isMounted = false;
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [setValue]);

  const { ref: registerStreetRef, ...restStreetAddress } =
    register("streetAddress");

  // Independent Form Submission (Strictly Text fields, NO Image)
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName ?? "");
      formData.append("lastName", data.lastName ?? "");
      formData.append("email", data.email ?? "");
      formData.append("phone", data.phone ?? "");
      formData.append("dateOfBirth", data.dateOfBirth ?? "");
      formData.append("gender", data.gender ?? "");
      formData.append("bio", data.bio ?? "");
      formData.append("streetAddress", data.streetAddress ?? "");
      formData.append("city", data.city ?? "");
      formData.append("state", data.state ?? "");
      formData.append("country", data.country ?? "");
      formData.append("zipCode", data.zipCode ?? "");
      formData.append("personalWebsite", data.personalWebsite ?? "");
      formData.append("linkedIn", data.linkedIn ?? "");
      formData.append("twitter", data.twitter ?? "");
      formData.append("youtubeChannel", data.youtubeChannel ?? "");

      const response = await updatePersonalTab(formData);
      if (response?.success !== false) {
        toast.success(
          response?.message || "Personal profile updated successfully!"
        );
        setIsEditing(false);
        refetchProfile();
      } else {
        toast.error(response?.message || "Failed to update profile.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update profile. Please try again."
      );
    }
  };

  return (
    <div className="personal-tab-container">
      <style>{`
        .pac-container {
          z-index: 1055 !important;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          font-family: inherit;
        }
      `}</style>

      {/* Independent Form */}
      <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>

        {/* Inputs locked when not in editing mode */}
        <fieldset
          disabled={!isEditing}
          style={{ border: "none", padding: 0, margin: 0 }}
        >
          {/* SECTION 1: Personal Information Block */}
          <section className="profile-section-block-card">
            <div className="section-headline-header">
              <i className="fa-regular fa-user"></i> Personal Information
            </div>

            <div className="section-body">
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-custom">First Name</label>
                  <input
                    type="text"
                    className={`form-control-custom-input ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-danger small">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Last Name</label>
                  <input
                    type="text"
                    className={`form-control-custom-input ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-danger small">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-custom">Email</label>
                  <input
                    type="email"
                    className={`form-control-custom-input ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger small">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Phone</label>
                  <input
                    type="tel"
                    className="form-control-custom-input"
                    placeholder="+1 (555) 123-4567"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-custom">Date of Birth</label>
                  <div className="date-input-icon-wrapper">
                    <input
                      type="date"
                      className="form-control-custom-input"
                      {...register("dateOfBirth")}
                    />
                    <i className="fa-regular fa-calendar"></i>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Gender</label>
                  <div className="select-input-chevron-wrapper">
                    <select
                      className="form-control-custom-input"
                      {...register("gender")}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <label className="form-label-custom">Bio</label>
                  <textarea
                    className="form-control-custom-input textarea-bio-custom"
                    placeholder="Tell us about yourself..."
                    rows={4}
                    {...register("bio")}
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Address Specification Block */}
          <section className="profile-section-block-card">
            <div className="section-headline-header">
              <i className="fa-solid fa-location-dot"></i> Address
            </div>

            <div className="section-body">
              <div className="row mb-4">
                <div className="col-12">
                  <label className="form-label-custom">Street Address</label>
                  <input
                    type="text"
                    className="form-control-custom-input"
                    placeholder="Enter street address"
                    {...restStreetAddress}
                    ref={(el) => {
                      registerStreetRef(el);
                      streetInputRef.current = el;
                    }}
                  />
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-custom">City</label>
                  <input
                    type="text"
                    className="form-control-custom-input"
                    placeholder="City"
                    {...register("city")}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">State/Province</label>
                  <input
                    type="text"
                    className="form-control-custom-input"
                    placeholder="State/Province"
                    {...register("state")}
                  />
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label-custom">Country</label>
                  <input
                    type="text"
                    className="form-control-custom-input"
                    placeholder="Country"
                    {...register("country")}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">ZIP/Postal Code</label>
                  <input
                    type="text"
                    className="form-control-custom-input"
                    placeholder="ZIP/Postal Code"
                    {...register("zipCode")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Social & Portfolio Links Block */}
          <section className="profile-section-block-card">
            <div className="section-headline-header">
              <i className="fa-solid fa-link"></i> Social &amp; Portfolio Links
            </div>

            <div className="section-body">
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label-custom">Personal Website</label>
                  <input
                    type="url"
                    className="form-control-custom-input"
                    placeholder="https://example.com"
                    {...register("personalWebsite")}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">LinkedIn</label>
                  <input
                    type="url"
                    className="form-control-custom-input"
                    placeholder="https://linkedin.com/in/username"
                    {...register("linkedIn")}
                  />
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label-custom">Twitter/X</label>
                  <input
                    type="url"
                    className="form-control-custom-input"
                    placeholder="https://x.com/username"
                    {...register("twitter")}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">YouTube Channel</label>
                  <input
                    type="url"
                    className="form-control-custom-input"
                    placeholder="https://youtube.com/@channel"
                    {...register("youtubeChannel")}
                  />
                </div>
              </div>
            </div>
          </section>
        </fieldset>
      </form>
    </div>
  );
};

export default PersonalTab;
