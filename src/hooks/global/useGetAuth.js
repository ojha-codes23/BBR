import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api, { guestApi } from "../../config/api";
import { LogoutError } from "../../config/constant";

export default function useGetAuth() {
  const {
    data: getOrgList = [],
    isPending: isPendingOrg,
    isError: isOrgListError,
    error: orgListError,
    refetch: refetchOrgList,
  } = useQuery({
    queryKey: ["/api/organization-selected-list", "teacher"],
    queryFn: async () => {
      try {
        const response = await api.get(
          "/api/teacher/organization-selected-list"
        );
        // Returns the actual array of organizations (data.data)
        return response?.data?.data || [];
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch organization list";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

        toast.error(errorMessage);
        // CRITICAL: Rethrow so TanStack Query knows the request failed
        throw new Error(errorMessage);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes fresh
    gcTime: 1000 * 60 * 10, // TanStack Query v5 replaces cacheTime with gcTime
    refetchOnWindowFocus: false,
    retry: 1, // Only retry once on failure instead of default 3
  });

  return {
    getOrgList,
    isPendingOrg,
    isOrgListError,
    orgListError,
    refetchOrgList,
  };
}
