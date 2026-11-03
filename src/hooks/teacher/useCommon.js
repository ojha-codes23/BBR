import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../config/api";
import { LogoutError } from "../../config/constant";

// Map UI tab keys to exact API query tab keys if needed
const normalizeTab = (tab) => {
  if (!tab) return "";
  if (tab === "bank") return "bank-details";
  if (tab === "interests") return "interests-tags";
  return tab;
};

export default function useCommon(params = "") {
  const rawTab =
    typeof params === "string" ? params : params?.tabs || params?.tab || "";
  const tabName = normalizeTab(rawTab);

  const {
    data: profileData,
    isPending: isPendingProfile,
    isError: isProfileError,
    error: profileError,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: ["/api/teacher/profile-details", tabName],
    queryFn: async () => {
      try {
        const response = await api.get(
          `/api/teacher/profile-details?tab=${tabName}`
        );
        return response?.data;
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch profile details";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

        // Avoid showing toast for tabs returning 501 (not implemented yet on backend)
        if (error?.response?.status !== 501) {
          toast.error(errorMessage);
        }
        throw new Error(errorMessage);
      }
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: Boolean(tabName),
  });



  //

  const {
    data: getProfileDetails,
    isPending: isPendingProfileDetails,
    isError: isProfileErrorDetails,
    error: profileErrorDetails,
    refetch: refetchProfileDetails,
  } = useQuery({
    queryKey: ["/api/teacher/me"],
    queryFn: async () => {
      try {
        const response = await api.get(`/api/teacher/me`);
        return response?.data;
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch profile details";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

        // Avoid showing toast for tabs returning 501 (not implemented yet on backend)
        if (error?.response?.status !== 501) {
          toast.error(errorMessage);
        }
        throw new Error(errorMessage);
      }
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: Boolean(tabName),
  });

  const details =
    profileData?.data?.details ||
    profileData?.details ||
    profileData?.data ||
    null;

  return {
    profileData,
    details,
    isPendingProfile,
    isProfileError,
    profileError,
    refetchProfile,


    ///

    getProfileDetails,
    isPendingProfileDetails,
    isProfileErrorDetails,
    profileErrorDetails,
    refetchProfileDetails,

    //
  };
}
