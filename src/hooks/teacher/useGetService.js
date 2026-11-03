import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../config/api";
import { LogoutError } from "../../config/constant";

export default function useGetService({
  tabName,
  params,
  enabled = true,
} = {}) {
  const {
    data: getRequestFiter,
    isPending: isPendingRequestFilter,
    refetch: refetchFilter,
  } = useQuery({
    queryKey: ["teacher/request-filter-options"],
    queryFn: async () => {
      try {
        const response = await api.get(`/api/teacher/request-filter-options`);
        return response?.data;
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch filter options";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

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
    enabled: enabled,
  });

  const {
    data: teacherList,
    isPending: isPendingTeacherList,
    refetch: refetchPending,
  } = useQuery({
    queryKey: ["/api/teacher/request-list", params],
    queryFn: async () => {
      try {
        const response = await api.get(`/api/teacher/request-list`, {
          params: {
            search: params?.search ?? "",
            companyId: params?.companyId ?? "all",
            userId: params?.userId ?? "all",
            serviceId: params?.serviceId ?? "all",
            status: params?.status ?? "pending",
            page: params?.page ?? 1,
            limit: params?.limit ?? 4,
          },
        });
        return response?.data;
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch request list";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

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
    enabled: enabled,
  });

  //

  const {
    data: calendlyStatus,
    isPending: isCalendyStatusPending,
    refetch: refetchCalendy,
  } = useQuery({
    queryKey: ["/api/teacher/calendly/status"],
    queryFn: async () => {
      try {
        const response = await api.get(`/api/teacher/calendly/status`);
        return response?.data;
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch Calendly status";

        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }

        if (error?.response?.status !== 501) {
          toast.error(errorMessage);
        }
        throw new Error(errorMessage);
      }
    },
    staleTime: 0,
    gcTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: enabled,
  });
  //
  return {
    getRequestFiter,
    getRequestFilter: getRequestFiter,
    isPendingRequestFilter,
    refetchFilter,
    teacherList,
    isPendingTeacherList,
    refetchPending,
    refetchRequests: refetchPending,

    calendlyStatus,
    isCalendyStatusPending,
    refetchCalendy,
  };
}
