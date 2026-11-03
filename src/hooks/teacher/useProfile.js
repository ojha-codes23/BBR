import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

const useProfile = () => {
  // ==========================================
  // 1. PERSONAL TAB
  // ==========================================
  const {
    mutateAsync: updatePersonalTab,
    isPending: isUpdatingPersonalTab,
    error: updatePersonalTabError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-update-personal",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update personal profile:", error);
        throw error;
      }
    },
  });

  // ==========================================
  // 2. PROFESSIONAL TAB
  // ==========================================

  // 2.1 Update Employment Details
  const {
    mutateAsync: updateProfessionalTab,
    isPending: isUpdatingProfessionalTab,
    error: updateProfessionalTabError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-update-professional",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update professional details:", error);
        throw error;
      }
    },
  });

  // 2.2 Add Qualification
  const {
    mutateAsync: addQualification,
    isPending: isAddingQualification,
    error: addQualificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-qualification-add",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to add qualification:", error);
        throw error;
      }
    },
  });

  // 2.3 Update Qualification
  const {
    mutateAsync: updateQualification,
    isPending: isUpdatingQualification,
    error: updateQualificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-qualification-update",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update qualification:", error);
        throw error;
      }
    },
  });

  // 2.4 Delete Qualification
  const {
    mutateAsync: deleteQualification,
    isPending: isDeletingQualification,
    error: deleteQualificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-qualification-delete",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to delete qualification:", error);
        throw error;
      }
    },
  });

  // 2.5 Add Certification
  const {
    mutateAsync: addCertification,
    isPending: isAddingCertification,
    error: addCertificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-certification-add",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to add certification:", error);
        throw error;
      }
    },
  });

  // 2.6 Update Certification
  const {
    mutateAsync: updateCertification,
    isPending: isUpdatingCertification,
    error: updateCertificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-certification-update",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update certification:", error);
        throw error;
      }
    },
  });

  // 2.7 Delete Certification
  const {
    mutateAsync: deleteCertification,
    isPending: isDeletingCertification,
    error: deleteCertificationError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-certification-delete",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to delete certification:", error);
        throw error;
      }
    },
  });

  // 2.8 Upload Certification Document
  const {
    mutateAsync: uploadCertificationDocument,
    isPending: isUploadingCertificationDocument,
    error: uploadCertificationDocumentError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-certification-document-upload",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to upload certification document:", error);
        throw error;
      }
    },
  });

  // 2.9 Delete Certification Document
  const {
    mutateAsync: deleteCertificationDocument,
    isPending: isDeletingCertificationDocument,
    error: deleteCertificationDocumentError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-certification-document-delete",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to delete certification document:", error);
        throw error;
      }
    },
  });

  // ==========================================
  // 3. BANK DETAILS TAB
  // ==========================================
  const {
    mutateAsync: updateBankDetails,
    isPending: isUpdatingBankDetails,
    error: updateBankDetailsError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/bank-details-update",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update bank details:", error);
        throw error;
      }
    },
  });

  // ==========================================
  // 4. EXPERTISE TAB
  // ==========================================

  // 4.1 Expertise Dropdown Options
  const {
    mutateAsync: getExpertiseDropdownOptions,
    isPending: isLoadingExpertiseDropdownOptions,
    error: expertiseDropdownOptionsError,
  } = useMutation({
    mutationFn: async (data = {}) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-expertise-dropdown-options",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to fetch expertise dropdown options:", error);
        throw error;
      }
    },
  });

  // 4.2 Add Expertise Subject
  const {
    mutateAsync: addExpertiseSubject,
    isPending: isAddingExpertiseSubject,
    error: addExpertiseSubjectError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-subject-add",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to add expertise subject:", error);
        throw error;
      }
    },
  });

  // 4.3 Update Expertise and Preferences
  const {
    mutateAsync: updateExpertiseAndPreferences,
    isPending: isUpdatingExpertisePreferences,
    error: updateExpertisePreferencesError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-expertise-update",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update expertise preferences:", error);
        throw error;
      }
    },
  });

  // 4.4 Remove Expertise Subject
  const {
    mutateAsync: removeExpertiseSubject,
    isPending: isRemovingExpertiseSubject,
    error: removeExpertiseSubjectError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-subject-remove",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to remove expertise subject:", error);
        throw error;
      }
    },
  });

  // when user search the Tag
  const {
    mutateAsync: searchTAGs,
    isPending: isSearchingTags,
    error: isSearchingError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-interest-master-list",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to remove expertise subject:", error);
        throw error;
      }
    },
  });

  //

  const {
    mutateAsync: updateTags,
    isPending: isUpdateTags,
    error: isUpdateTagsError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-update-interests-tags",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to remove expertise subject:", error);
        throw error;
      }
    },
  });

  //document upload

  const {
    mutateAsync: DocumenteUploadTabs,
    isPending: isDocumentUploading,
    error: isUpdatingDocsErr,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-document-upload",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to remove expertise subject:", error);
        throw error;
      }
    },
  });

  //delete docs

  const {
    mutateAsync: DeleteDocs,
    isPending: isDeleteDocs,
    error: idDeleteError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-document-delete",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to remove expertise subject:", error);
        throw error;
      }
    },
  });

  // ==========================================
  // 6. AVAILABILITY TAB
  // ==========================================
  const {
    mutateAsync: updateAvailabilityTab,
    isPending: isUpdatingAvailability,
    error: updateAvailabilityError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-update-availability",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update availability:", error);
        throw error;
      }
    },
  });

  // upload profile

  const {
    mutateAsync: updateProfilePicture,
    isPending: isUpdatingProfilePicture,
    error: isUpdatePicError,
  } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          "/api/teacher/profile-picture-update",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Failed to update profile picture:", error);
        throw error;
      }
    },
  });
  return {
    // 1. Personal Tab
    updatePersonalTab,
    isUpdatingPersonalTab,
    updatePersonalTabError,

    // 2. Professional Tab
    updateProfessionalTab,
    isUpdatingProfessionalTab,
    updateProfessionalTabError,

    addQualification,
    isAddingQualification,
    addQualificationError,

    updateQualification,
    isUpdatingQualification,
    updateQualificationError,

    deleteQualification,
    isDeletingQualification,
    deleteQualificationError,

    addCertification,
    isAddingCertification,
    addCertificationError,

    updateCertification,
    isUpdatingCertification,
    updateCertificationError,

    deleteCertification,
    isDeletingCertification,
    deleteCertificationError,

    uploadCertificationDocument,
    isUploadingCertificationDocument,
    uploadCertificationDocumentError,

    deleteCertificationDocument,
    isDeletingCertificationDocument,
    deleteCertificationDocumentError,

    // 3. Bank Details Tab
    updateBankDetails,
    isUpdatingBankDetails,
    updateBankDetailsError,

    // 4. Expertise Tab
    getExpertiseDropdownOptions,
    isLoadingExpertiseDropdownOptions,
    expertiseDropdownOptionsError,

    addExpertiseSubject,
    isAddingExpertiseSubject,
    addExpertiseSubjectError,

    updateExpertiseAndPreferences,
    isUpdatingExpertisePreferences,
    updateExpertisePreferencesError,

    removeExpertiseSubject,
    isRemovingExpertiseSubject,
    removeExpertiseSubjectError,

    //when user search Tag

    searchTAGs,
    isSearchingTags,
    isSearchingError,

    updateTags,
    isUpdateTags,
    isUpdateTagsError,

    //upload docs tab

    DocumenteUploadTabs,
    isDocumentUploading,
    isUpdatingDocsErr,

    //
    DeleteDocs,
    isDeleteDocs,
    idDeleteError,

    // 6. Availability Tab
    updateAvailabilityTab,
    isUpdatingAvailability,
    updateAvailabilityError,

    //7 . update profile picture
    updateProfilePicture,
    isUpdatingProfilePicture,
    isUpdatePicError,
  };
};

export default useProfile;
