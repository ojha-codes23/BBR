import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

const useService = () => {
  // Mutation 1: Request Details
  const { mutateAsync: getRequestDetails, isPending: isPendingRequestDetails } =
    useMutation({
      mutationKey: ["teacher/request-details"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post(
            "/api/teacher/request-details",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Failed to fetch request details:", error);
          throw error;
        }
      },
    });

  // Mutation 2: User Data
  const { mutateAsync: getUserData, isPending: isPendingUserData } =
    useMutation({
      mutationKey: ["/api/teacher/user-profile-complete-details"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post(
            "/api/teacher/user-profile-complete-details",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          throw error;
        }
      },
    });

  // Mutation 3: Request Accept
  const { mutateAsync: acceptRequest, isPending: isPendingAcceptRequest } =
    useMutation({
      mutationKey: ["/api/teacher/request-accept"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post(
            "/api/teacher/request-accept",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Failed to accept request:", error);
          throw error;
        }
      },
    });

  // Mutation 4: Request Decline
  const { mutateAsync: declineRequest, isPending: isPendingDeclineRequest } =
    useMutation({
      mutationKey: ["/api/teacher/request-decline"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post(
            "/api/teacher/request-decline",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Failed to decline request:", error);
          throw error;
        }
      },
    });

  //

  // Mutation 5: connection with calendy (POST /api/teacher/calendly/connect without body)
  const { mutateAsync: connectCalendy, isPending: isConnectionPending } =
    useMutation({
      mutationKey: ["/api/teacher/calendly/connect"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post("/api/teacher/calendly/connect", payload);
          return response.data;
        } catch (error) {
          console.error("Failed to connect Calendly:", error);
          if (error?.response?.data?.message === "Unauthenticated.") {
            LogoutError();
          }
          throw error;
        }
      },
    });

  // Mutation 6: sync the calendy (POST /api/teacher/calendly/sync without body)
  const { mutateAsync: syncCalender, isPending: isSyncCalenderPending } =
    useMutation({
      mutationKey: ["/api/teacher/calendly/sync"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post("/api/teacher/calendly/sync", payload);
          return response.data;
        } catch (error) {
          console.error("Failed to sync Calendly:", error);
          if (error?.response?.data?.message === "Unauthenticated.") {
            LogoutError();
          }
          throw error;
        }
      },
    });

  // Mutation 7: web subscription (POST /api/teacher/calendly/webhook-subscribe)
  const {
    mutateAsync: webhookSubscribe,
    isPending: isPendignWebhookSubscribe,
  } = useMutation({
    mutationKey: ["/api/teacher/calendly/webhook-subscribe"],
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/teacher/calendly/webhook-subscribe", payload
        );
        return response.data;
      } catch (error) {
        console.error("Failed to subscribe Calendly webhook:", error);
        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }
        throw error;
      }
    },
  });

  //


  const { mutateAsync: templatList, isPending: isPendingTempList } =
    useMutation({
      mutationKey: ["/api/teacher/templates-list"],
      mutationFn: async (payload) => {
        try {
          let body = payload;
          if (
            payload &&
            !(payload instanceof FormData) &&
            typeof payload === "object"
          ) {
            const formData = new FormData();
            Object.entries(payload).forEach(([k, v]) => {
              if (v !== undefined && v !== null) {
                formData.append(k, v);
              }
            });
            body = formData;
          }
          const response = await api.post("/api/teacher/templates-list", body);
          return response.data;
        } catch (error) {
          console.error("Failed to fetch templates list:", error);
          if (error?.response?.data?.message === "Unauthenticated.") {
            LogoutError();
          }
          throw error;
        }
      },
    });

  //templatDetails




  const { mutateAsync: templatDetails, isPending: isTempletListPending } =
    useMutation({
      mutationKey: ["/api/teacher/template-details"],
      mutationFn: async (payload) => {
        try {
          let body = payload;
          if (
            payload &&
            !(payload instanceof FormData) &&
            typeof payload === "object"
          ) {
            const formData = new FormData();
            Object.entries(payload).forEach(([k, v]) => {
              if (v !== undefined && v !== null) {
                formData.append(k, v);
              }
            });
            // Ensure templateId is explicitly set
            const tId = payload.templateId || payload.id;
            if (tId !== undefined && tId !== null) {
              formData.set("templateId", tId);
            }
            body = formData;
          } else if (typeof payload === "string" || typeof payload === "number") {
            const formData = new FormData();
            formData.append("templateId", payload);
            formData.append("id", payload);
            body = formData;
          }
          const response = await api.post("/api/teacher/template-details", body);
          return response.data;
        } catch (error) {
          console.error("Failed to fetch template details:", error);
          if (error?.response?.data?.message === "Unauthenticated.") {
            LogoutError();
          }
          throw error;
        }
      },
    });



  const {
    mutateAsync: createTemplate,
    isPending: isCreateTemplatePending,
  } = useMutation({
    mutationKey: ["/api/teacher/template-create"],
    mutationFn: async (payload) => {
      try {
        let body = payload;
        if (
          payload &&
          !(payload instanceof FormData) &&
          typeof payload === "object"
        ) {
          const formData = new FormData();
          Object.entries(payload).forEach(([k, v]) => {
            if (v !== undefined && v !== null) {
              if (
                typeof v === "object" &&
                !(v instanceof File) &&
                !(v instanceof Blob)
              ) {
                formData.append(k, JSON.stringify(v));
              } else {
                formData.append(k, v);
              }
            }
          });
          body = formData;
        }
        const response = await api.post(
          "/api/teacher/template-create",
          body
        );
        return response.data;
      } catch (error) {
        console.error("Failed to create/update template:", error);
        if (error?.response?.data?.message === "Unauthenticated.") {
          LogoutError();
        }
        throw error;
      }
    },
  });

  //


  const { mutateAsync: templateAction, isPending: isPendingTemplateAction } =
    useMutation({
      mutationKey: ["/api/teacher/template-action"],
      mutationFn: async (payload) => {
        try {
          const response = await api.post(
            "/api/teacher/template-action",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Failed to execute template action:", error);
          if (error?.response?.data?.message === "Unauthenticated.") {
            LogoutError();
          }
          throw error;
        }
      },
    });

  return {
    getRequestDetails,
    isPendingRequestDetails,
    getUserData,
    isPendingUserData,
    acceptRequest,
    isPendingAcceptRequest,
    declineRequest,
    isPendingDeclineRequest,
    connectCalendy,
    isConnectionPending,
    syncCalender,
    isSyncCalenderPending,
    webhookSubscribe,
    isPendignWebhookSubscribe,
    isPendingWebhookSubscribe: isPendignWebhookSubscribe,

    templatList,
    isPendingTempList,
    templatDetails,
    isTempletListPending,
    createTemplate,
    isCreateTemplatePending,
    templateAction,
    isPendingTemplateAction,
  };
};

export default useService;
