import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

const useServices = () => {
  const {
    mutate: getAllServices,
    mutateAsync: serviceAsync,
    isPending: isServiceLoading,
    error: serviceError,
  } = useMutation({
    mutationFn: async () => {
      try {
        const response = await api.post("/api/student/get-all-services");
        return response.data?.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  const {
    mutate: getavailableTags,
    mutateAsync: getavailableTagsAsync,
    isPending: isTagsLoading,
    error: getavailableTagsError,
  } = useMutation({
    mutationFn: async () => {
      try {
        const response = await api.post(
          "/api/student/get-all-available-tags"
        );
        return response.data?.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  const {
    mutate: createreqServices,
    mutateAsync: createReqServiceAsync,
    isPending: isLoading,
    error: createreqServicesError,
  } = useMutation({
    mutationFn: async (payload
    ) => {
      try {
        const response = await api.post(
          "/api/student/create-service-request", payload
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  const {
    mutate: getAllProviders,
    mutateAsync: getAllProvidersAsync,
    isPending: isProviderLoading,
    error: providerError,
  } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/student/get-providers",
          payload || {}
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });


  const {
    mutate: updateService,
    mutateAsync: updateServiceAsync,
    isPending: isUpdating,
    error: updateError,
  } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/student/update-service-request",
          payload
        );

        return response.data;
      } catch (error) {
        console.log("Update service error:", error);
        throw error;
      }
    },
  });


  const {
    mutate: userRequestedServices,
    mutateAsync: userRequestedServicesAsnyc,
    isPending: isRequestedServiceLoading,
    error: RequestedServiceError,
  } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/student/user-requested-service",
          {
            page: 1,
            limit: 10,
            ...(payload || {})
          }
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  const {
    mutate: userServiceList,
    mutateAsync: userServiceListAsync,
    isPending: userServiceLoading,
    error: userServiceError,
  } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/student/user-service-list",
          {
            page: 1,
            limit: 10,
            ...(payload || {})
          }
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });



  return {
    getAllServices,
    serviceAsync,

    updateService,
    updateServiceAsync,

    userRequestedServices,
    userRequestedServicesAsnyc,
    userRequestedServicesAsync: userRequestedServicesAsnyc,


    userServiceListAsync,
    userServiceList,

    getavailableTags,
    getavailableTagsAsync,

    createreqServices,
    createReqServiceAsync,

    getAllProviders,
    getAllProvidersAsync,

    isServiceLoading,
    isTagsLoading,
    isLoading,
    isProviderLoading,
    isUpdating,
    isRequestedServiceLoading,
    userServiceLoading,

    serviceError,
    getavailableTagsError,
    createreqServicesError,
    providerError,
    updateError,
    RequestedServiceError,
    userServiceError
  };
};

export default useServices;