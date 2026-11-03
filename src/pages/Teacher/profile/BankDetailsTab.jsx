import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

const BankDetailsTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const isEditing =
    parentIsEditing !== undefined ? parentIsEditing : localIsEditing;
  const setIsEditing = parentSetIsEditing || setLocalIsEditing;

  const {
    register,
    handleSubmit,
    watch,
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
      idType: "",
      personalIdentificationNumber: "",
      ssnLast4: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      bankName: "",
      accountHolderName: "",
      bankAccountNumber: "",
      confirmAccountNumber: "",
      routingNumber: "",
      bankProofType: "",
      bankProofDocument: null,
      bankProofDocumentUrl: null,
      frontDocument: null,
      frontDocumentUrl: null,
      backDocument: null,
      backDocumentUrl: null,
    },
    mode: "onBlur",
  });

  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "bank-details",
  });

  const { updateBankDetails, isUpdatingBankDetails } = useProfile();

  const resData = profileData?.data || profileData;
  const rawDetails = resData?.details || resData?.user || resData || {};
  const bankDetails = rawDetails?.bankDetails || rawDetails;
  const proofTypes = Array.isArray(rawDetails?.proofTypes)
    ? rawDetails.proofTypes
    : [
        { label: "Bank Account Statement", value: "bank_statement" },
        { label: "Voided Cheque", value: "void_check" },
        { label: "Passbook Copy", value: "passbook_copy" },
        { label: "Other", value: "other" },
      ];

  const bankProof = watch("bankProofDocument");
  const bankProofUrl = watch("bankProofDocumentUrl");
  const frontDoc = watch("frontDocument");
  const frontDocUrl = watch("frontDocumentUrl");
  const backDoc = watch("backDocument");
  const backDocUrl = watch("backDocumentUrl");

  // Document preview modal state
  const [previewModal, setPreviewModal] = useState({
    show: false,
    title: "",
    url: "",
    isPdf: false,
  });

  const getDocumentName = (file, url, defaultName) => {
    if (file?.name) return file.name;
    if (!url) return defaultName;
    try {
      const urlObj = new URL(url);
      const typeParam = urlObj.searchParams.get("type");
      if (typeParam) {
        return `${typeParam.replace("-", "_")}_document`;
      }
    } catch {
      // fallback
    }
    return defaultName;
  };

  const handlePreview = (file, url, title) => {
    let previewSrc = url;
    let isPdf = false;

    if (file instanceof File) {
      previewSrc = URL.createObjectURL(file);
      isPdf =
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf");
    } else if (typeof url === "string") {
      isPdf =
        url.toLowerCase().includes(".pdf") ||
        url.toLowerCase().includes("pdf") ||
        url.toLowerCase().includes("type=bank-proof");
    }

    if (!previewSrc) {
      toast.error("No document available to preview");
      return;
    }

    setPreviewModal({
      show: true,
      title: title || "Document Preview",
      url: previewSrc,
      isPdf,
    });
  };

  // Hydrate data from GET API
  useEffect(() => {
    if (!profileData) return;
    const rData = profileData?.data || profileData;
    const rDetails = rData?.details || rData?.user || rData || {};
    const bDetails = rDetails?.bankDetails || rDetails;

    reset({
      firstName: bDetails?.firstName || "",
      lastName: bDetails?.lastName || "",
      email: bDetails?.email || "",
      phone: bDetails?.phone || "",
      dateOfBirth: formatDateForInput(bDetails?.dateOfBirth || bDetails?.dob || ""),
      idType: bDetails?.idType || "",
      personalIdentificationNumber:
        bDetails?.personalIdentificationNumber || bDetails?.idNumber || "",
      ssnLast4: bDetails?.ssnLast4 || "",
      address: bDetails?.address || "",
      country: bDetails?.country || "",
      state: bDetails?.state || "",
      city: bDetails?.city || "",
      postalCode: bDetails?.postalCode || bDetails?.zipCode || "",
      bankName: bDetails?.bankName || "",
      accountHolderName: bDetails?.accountHolderName || "",
      bankAccountNumber:
        bDetails?.bankAccountNumber || bDetails?.accountNumber || "",
      confirmAccountNumber:
        bDetails?.confirmAccountNumber ||
        bDetails?.bankAccountNumber ||
        bDetails?.accountNumber ||
        "",
      routingNumber: bDetails?.routingNumber || "",
      bankProofType: bDetails?.bankProofType || "",
      bankProofDocument: null,
      bankProofDocumentUrl:
        bDetails?.bankProofDocumentUrl || bDetails?.bankProofDocument || null,
      frontDocument: null,
      frontDocumentUrl:
        bDetails?.verificationDocuments?.frontDocumentUrl ||
        bDetails?.frontDocumentUrl ||
        bDetails?.frontDocument ||
        null,
      backDocument: null,
      backDocumentUrl:
        bDetails?.verificationDocuments?.backDocumentUrl ||
        bDetails?.backDocumentUrl ||
        bDetails?.backDocument ||
        null,
    });
  }, [profileData, reset]);

  const onSubmit = async (data) => {
    try {
      if (
        data.bankAccountNumber &&
        data.confirmAccountNumber &&
        data.bankAccountNumber !== data.confirmAccountNumber
      ) {
        toast.error("Bank account number and confirm account number do not match");
        return;
      }

      const formData = new FormData();

      // All 19 text fields from the API request specification
      const textFields = [
        "firstName",
        "lastName",
        "accountHolderName",
        "email",
        "phone",
        "dateOfBirth",
        "address",
        "country",
        "state",
        "city",
        "postalCode",
        "bankName",
        "bankAccountNumber",
        "confirmAccountNumber",
        "bankProofType",
        "idType",
        "personalIdentificationNumber",
        "ssnLast4",
        "routingNumber",
      ];

      textFields.forEach((field) => {
        let val = data[field];
        if (field === "confirmAccountNumber" && !val && data.bankAccountNumber) {
          val = data.bankAccountNumber;
        }
        if (val !== undefined && val !== null) {
          formData.append(field, String(val).trim());
        } else {
          formData.append(field, "");
        }
      });

      // 3 file fields: only append if user uploaded a new File object
      if (data.bankProofDocument instanceof File) {
        formData.append("bankProofDocument", data.bankProofDocument);
      }
      if (data.frontDocument instanceof File) {
        formData.append("frontDocument", data.frontDocument);
      }
      if (data.backDocument instanceof File) {
        formData.append("backDocument", data.backDocument);
      }

      await updateBankDetails(formData);
      toast.success("Bank details saved successfully!");
      setIsEditing(false);
      refetchProfile();
    } catch (err) {
      console.error("Bank details update failed:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to update bank details";
      toast.error(msg);
    }
  };

  const isUpdating = isSubmitting || isUpdatingBankDetails;

  return (
    <div className="bank-details-wrapper-container">
      <form id="profile-tab-active-form" onSubmit={handleSubmit(onSubmit)}>

        <main className="bank-details-master-card">
          <div className="bank-card-header-title">
            <i className="fa-solid fa-building-columns"></i> Bank Account Information
          </div>

          <fieldset
            disabled={!isEditing}
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <div className="bank-form-body">
              {/* Row 1: Name Information */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">First Name</label>
                  <input
                    type="text"
                    className={`custom-form-input-node ${
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
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Last Name</label>
                  <input
                    type="text"
                    className={`custom-form-input-node ${
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

              {/* Row 2: Contact Specifications */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Email</label>
                  <input
                    type="email"
                    className={`custom-form-input-node ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="name@example.com"
                    {...register("email", {
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
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Phone</label>
                  <input
                    type="tel"
                    className="custom-form-input-node"
                    placeholder="+1 (555) 123-4567"
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Row 3: DOB & ID Configurations */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Date of Birth</label>
                  <div className="input-relative-glyph-wrapper">
                    <input
                      type="date"
                      className="custom-form-input-node"
                      {...register("dateOfBirth")}
                    />
                    <i className="fa-regular fa-calendar-days"></i>
                  </div>
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">ID Type</label>
                  <div className="select-chevron-relative-wrapper">
                    <select
                      className="custom-form-input-node"
                      {...register("idType")}
                    >
                      <option value="">Select ID Type</option>
                      <option value="passport">Passport</option>
                      <option value="driver_license">Driver's License</option>
                      <option value="national_id">National ID</option>
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>

              {/* Row 4: Personal Identifiers */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">
                    Personal Identification Number
                  </label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Personal ID Number"
                    {...register("personalIdentificationNumber")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">
                    SSN (Last 4 Digits)
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    className="custom-form-input-node"
                    placeholder="4587"
                    {...register("ssnLast4")}
                  />
                </div>
              </div>

              {/* Row 5: Address Core & Country Selection */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Address</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Street address"
                    {...register("address")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Country</label>
                  <div className="select-chevron-relative-wrapper">
                    <select
                      className="custom-form-input-node"
                      {...register("country")}
                    >
                      <option value="">Select Country</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="India">India</option>
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>

              {/* Row 6: State & City Select Grid */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">State</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="State / Province"
                    {...register("state")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">City</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="City"
                    {...register("city")}
                  />
                </div>
              </div>

              {/* Row 7: Postal & Bank Name Inputs */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Postal Code</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Postal Code"
                    {...register("postalCode")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Bank Name</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Bank Name"
                    {...register("bankName")}
                  />
                </div>
              </div>

              {/* Row 8: Account Identity Numbers */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Account Holder Name</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Account Holder Name"
                    {...register("accountHolderName")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Bank Account Number</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder={
                      bankDetails?.maskedBankAccountNumber || "Account Number"
                    }
                    {...register("bankAccountNumber")}
                  />
                </div>
              </div>

              {/* Row 9: Confirmations & Routing Lines */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">
                    Confirm Account Number
                  </label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Confirm Account Number"
                    {...register("confirmAccountNumber")}
                  />
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">Routing Number</label>
                  <input
                    type="text"
                    className="custom-form-input-node"
                    placeholder="Routing Number"
                    {...register("routingNumber")}
                  />
                </div>
              </div>

              {/* Row 10: Proof Type Selection & Media Line Component */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">
                    Select Bank Proof Type
                  </label>
                  <div className="select-chevron-relative-wrapper">
                    <select
                      className="custom-form-input-node"
                      {...register("bankProofType")}
                    >
                      <option value="">Select Bank Proof Type</option>
                      {proofTypes.map((pt) => (
                        <option key={pt.value} value={pt.value}>
                          {pt.label}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
                <div className="col-md-6 custom-form-group">
                  <label className="custom-field-label">
                    Bank Proof Document
                  </label>
                  <div className="bank-proof-integration-flex">
                    <input
                      type="file"
                      id="bankProofInput"
                      style={{ display: "none" }}
                      accept=".pdf,.png,.jpg,.jpeg"
                      disabled={!isEditing}
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setValue("bankProofDocument", e.target.files[0], {
                            shouldDirty: true,
                          });
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="btn-upload-trigger-square"
                      disabled={!isEditing}
                      onClick={() =>
                        document.getElementById("bankProofInput")?.click()
                      }
                      title="Upload Bank Proof"
                    >
                      <i className="fa-solid fa-upload"></i>
                    </button>
                    {(bankProof || bankProofUrl) && (
                      <div className="uploaded-file-row-strip">
                        <div className="file-meta-flex-left">
                          <i className="fa-regular fa-file-lines"></i>
                          <span>
                            {getDocumentName(
                              bankProof,
                              bankProofUrl,
                              "bank_proof_document.pdf"
                            )}
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary py-1 px-2 d-inline-flex align-items-center gap-1"
                            style={{ fontSize: "12px", borderRadius: "6px" }}
                            onClick={() =>
                              handlePreview(
                                bankProof,
                                bankProofUrl,
                                "Bank Proof Document"
                              )
                            }
                            title="Preview Document"
                          >
                            <i className="fa-regular fa-eye"></i> Preview
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Verification Document Drop Area */}
              <div className="row mt-2">
                <div className="col-12 custom-form-group">
                  <label className="custom-field-label">
                    Verification Documents (Front &amp; Back)
                  </label>
                  <input
                    type="file"
                    id="frontDocInput"
                    style={{ display: "none" }}
                    accept=".pdf,.png,.jpg,.jpeg"
                    disabled={!isEditing}
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setValue("frontDocument", e.target.files[0], {
                          shouldDirty: true,
                        });
                      }
                    }}
                  />
                  <input
                    type="file"
                    id="backDocInput"
                    style={{ display: "none" }}
                    accept=".pdf,.png,.jpg,.jpeg"
                    disabled={!isEditing}
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setValue("backDocument", e.target.files[0], {
                          shouldDirty: true,
                        });
                      }
                    }}
                  />
                  <div
                    className="drag-drop-vault-dash-panel"
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                    onClick={() => {
                      if (isEditing) {
                        document.getElementById("frontDocInput")?.click();
                      }
                    }}
                  >
                    <i className="fa-solid fa-upload upload-cloud-icon"></i>
                    <p className="main-prompt-text">
                      Drag and drop files here, or{" "}
                      <span
                        style={{
                          color: "var(--primary-blue)",
                          fontWeight: "600",
                        }}
                      >
                        click to browse
                      </span>
                    </p>
                    <p className="sub-prompt-text">
                      Support for PDF, PNG, JPG (Max 5MB each)
                    </p>
                  </div>
                </div>
              </div>

              {/* Display Uploaded Front & Back Document Rows */}
              <div className="row">
                <div className="col-md-6 custom-form-group">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="custom-field-label mb-0">
                      Front Document
                    </label>
                    {isEditing && (
                      <button
                        type="button"
                        className="btn btn-sm btn-link p-0 text-decoration-none"
                        onClick={() =>
                          document.getElementById("frontDocInput")?.click()
                        }
                      >
                        <i className="fa-solid fa-upload me-1"></i> Choose File
                      </button>
                    )}
                  </div>
                  {frontDoc || frontDocUrl ? (
                    <div className="uploaded-file-row-strip">
                      <div className="file-meta-flex-left">
                        <i className="fa-regular fa-file-lines"></i>
                        <span>
                          {getDocumentName(
                            frontDoc,
                            frontDocUrl,
                            "passport_front.jpg"
                          )}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary py-1 px-2 d-inline-flex align-items-center gap-1"
                          style={{ fontSize: "12px", borderRadius: "6px" }}
                          onClick={() =>
                            handlePreview(
                              frontDoc,
                              frontDocUrl,
                              "Front Verification Document"
                            )
                          }
                          title="Preview Document"
                        >
                          <i className="fa-regular fa-eye"></i> Preview
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-muted small p-2 border rounded text-center">
                      No front document selected
                    </div>
                  )}
                </div>
                <div className="col-md-6 custom-form-group">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="custom-field-label mb-0">
                      Back Document
                    </label>
                    {isEditing && (
                      <button
                        type="button"
                        className="btn btn-sm btn-link p-0 text-decoration-none"
                        onClick={() =>
                          document.getElementById("backDocInput")?.click()
                        }
                      >
                        <i className="fa-solid fa-upload me-1"></i> Choose File
                      </button>
                    )}
                  </div>
                  {backDoc || backDocUrl ? (
                    <div className="uploaded-file-row-strip">
                      <div className="file-meta-flex-left">
                        <i className="fa-regular fa-file-lines"></i>
                        <span>
                          {getDocumentName(
                            backDoc,
                            backDocUrl,
                            "passport_back.jpg"
                          )}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary py-1 px-2 d-inline-flex align-items-center gap-1"
                          style={{ fontSize: "12px", borderRadius: "6px" }}
                          onClick={() =>
                            handlePreview(
                              backDoc,
                              backDocUrl,
                              "Back Verification Document"
                            )
                          }
                          title="Preview Document"
                        >
                          <i className="fa-regular fa-eye"></i> Preview
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-muted small p-2 border rounded text-center">
                      No back document selected
                    </div>
                  )}
                </div>
              </div>
            </div>
          </fieldset>
        </main>
      </form>

      {/* Document Preview Lightbox Modal */}
      {previewModal.show && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() =>
              setPreviewModal({ show: false, title: "", url: "", isPdf: false })
            }
            style={{ zIndex: 1055 }}
          ></div>
          <div
            className="modal fade show"
            style={{ display: "block", zIndex: 1056 }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div
                className="modal-content custom-popup-content p-0 overflow-hidden"
                style={{ borderRadius: "16px" }}
              >
                <div className="modal-header d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
                  <h5
                    className="modal-title fw-semibold text-dark m-0"
                    style={{ fontSize: "16px" }}
                  >
                    <i className="fa-regular fa-file-lines me-2 text-primary"></i>
                    {previewModal.title}
                  </h5>
                  <button
                    type="button"
                    className="modal-external-close-btn position-static"
                    onClick={() =>
                      setPreviewModal({
                        show: false,
                        title: "",
                        url: "",
                        isPdf: false,
                      })
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "18px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div
                  className="modal-body p-4 text-center d-flex justify-content-center align-items-center bg-light"
                  style={{
                    minHeight: "350px",
                    maxHeight: "75vh",
                    overflow: "auto",
                  }}
                >
                  {previewModal.isPdf ? (
                    <iframe
                      src={previewModal.url}
                      title={previewModal.title}
                      style={{
                        width: "100%",
                        height: "500px",
                        border: "none",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <img
                      src={previewModal.url}
                      alt={previewModal.title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "65vh",
                        objectFit: "contain",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        const fallback = document.getElementById(
                          "preview-fallback-iframe"
                        );
                        if (fallback) fallback.style.display = "block";
                      }}
                    />
                  )}
                  <iframe
                    id="preview-fallback-iframe"
                    src={previewModal.url}
                    title={previewModal.title}
                    style={{
                      display: "none",
                      width: "100%",
                      height: "500px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                <div className="modal-footer d-flex justify-content-between px-4 py-3 border-top bg-white">
                  <a
                    href={previewModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Open
                    in New Tab
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() =>
                      setPreviewModal({
                        show: false,
                        title: "",
                        url: "",
                        isPdf: false,
                      })
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BankDetailsTab;
