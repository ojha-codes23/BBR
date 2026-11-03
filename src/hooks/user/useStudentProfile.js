import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../config/api";

const useStudentProfile = () => {

  //get student profile data
  const {
    data: response,
    isPending: isLoadingStudentProfile,
    error: studentProfileError,
    refetch: refetchStudentProfile,
  } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: async () => {
      const response = await api.post(
        "/api/student/get-profile-summary",
        {}
      );

      return response.data;
    },
  });

  //personal profile screeen Edit Api
  const {
    mutateAsync: saveStudentPersonalInfoAsync,
    isPending: isSavingStudentPersonalInfo,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/student/save-personal-info",
        payload
      );
      return response.data;
    },
  });

  // Interested Tags Tab Api =======

  // Get all available tags
  const {
    mutateAsync: getAvailableTagsAsync,
    isPending: isLoadingAvailableTags,
  } = useMutation({
    mutationFn: async () => {
      // CHANGE TO POST HERE
      const response = await api.post(
        "/api/student/get-all-available-tags",
        {}
      );
      return response.data;
    },
  });

  // Search tags
  const {
    mutateAsync: searchStudentTagsAsync,
    isPending: isSearchingTags,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/student/search-tags",
        payload
      );

      return response.data;
    },
  });

  // Save selected interest tags
  const {
    mutateAsync: saveStudentInterestTagsAsync,
    isPending: isSavingStudentInterestTags,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/student/save-interest-tags",
        payload
      );

      return response.data;
    },
  });
  // Interested Tags Tab Api =========

  // Add Qualification API
  const {
    mutateAsync: saveStudentQualificationAsync,
    isPending: isSavingStudentQualification,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/api/student/save-qualifications",
        payload
      );

      return response.data;
    },
  });

    // Delete Qualification API
    const {
      mutateAsync: deleteStudentQualificationAsync,
      isPending: isDeletingStudentQualification,
    } = useMutation({
      mutationFn: async (formData) => {
        const response = await api.post(
          "/api/student/delete-qulaification",
          formData
        );
    
        return response.data;
      },
    });

    // Add and Edit Certificate 
    const {
      mutateAsync: saveStudentCertificationAsync,
      isPending: isSavingStudentCertification,
    } = useMutation({
      mutationFn: async (formData) => {
        const response = await api.post(
          "/api/student/save-certificates",
          formData
        );
        return response.data;
      },
    });

    // delete Certificate 
    const {
      mutateAsync: deleteStudentCertificationAsync,
      isPending: isDeletingStudentCertification,

    } = useMutation({
      mutationFn: async (formData) => {
        const response = await api.post(
          "/api/student/delete-certification",
          formData
        );
        return response.data;
      },
    });

  // security screen change student password
  const {
    mutateAsync: changeStudentPasswordAsync,
    isPending: isChangingStudentPassword,
    error: changeStudentPasswordError,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post("/api/student/change-password", payload);
      return response.data;
    },
  });

  //upload document
  const {
    mutateAsync: saveStudentDocumentAsync,
    isPending: isUploadingStudentDocument,
  } = useMutation({
    mutationFn: async (formData) => {
      const response = await api.post(
        "/api/student/save-documents",
        formData
      );
      return response.data;
    },
  });

  //delete document
  const {
    mutateAsync: deleteStudentDocumentAsync,
    isPending: isDeletingStudentDocument,
  } = useMutation({
    mutationFn: async (formData) => {
      const response = await api.post(
        "/api/student/delete-document",
        formData
      );
      return response.data;
    },
  });

  // Get Deactivate Reasons 
  const {
    mutateAsync: getDeactivateReasonsAsync,
    isPending: isLoadingDeactivateReasons,
  } = useMutation({
    mutationFn: async() => {
      const response = await api.post("/api/student/get-deactivate-reasons", {});
      return response.data;
    },
  });

  //Deactivate Account
  const {
    mutateAsync: deactivateStudentAccountAsync,
    isPending: isDeactivatingStudentAccount,
  } = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post("/api/student/deactivate-account", payload);
      return response.data;
    },
  });

  //upload profile image
  const {
    mutateAsync: updateProfilePictureAsync,
    isPending: isUpdatingProfilePicture,
  } = useMutation({
    mutationFn: async (formData) => {
      const response = await api.post(
        "/api/student/update-profile-picture",
        formData
      );
      return response.data;
    },
  });

  return {
    // Get profile
    studentProfile: response?.data ?? null,
    isLoadingStudentProfile,
    studentProfileError,
    refetchStudentProfile,

    //edit personal info
    saveStudentPersonalInfoAsync,
    isSavingStudentPersonalInfo,

    // Change password
    changeStudentPasswordAsync,
    isChangingStudentPassword,
    changeStudentPasswordError,

    // Interested Tags Tab Api 
    getAvailableTagsAsync,
    isLoadingAvailableTags,
    searchStudentTagsAsync,
    isSearchingTags,
    saveStudentInterestTagsAsync,
    isSavingStudentInterestTags,
    // Interested Tags Tab Api 

    // Add Qualifications
    saveStudentQualificationAsync,
    isSavingStudentQualification,

    //delete Qualification
    deleteStudentQualificationAsync,
    isDeletingStudentQualification,

    //Add and edit certificate
    saveStudentCertificationAsync,
    isSavingStudentCertification,

    // delete certificate 
    deleteStudentCertificationAsync,
    isDeletingStudentCertification,

    //document
    saveStudentDocumentAsync,
    isUploadingStudentDocument,
    deleteStudentDocumentAsync,
    isDeletingStudentDocument,

    //Dectivate
    getDeactivateReasonsAsync,
    isLoadingDeactivateReasons,
    deactivateStudentAccountAsync,
    isDeactivatingStudentAccount,

    //update profile picture
    updateProfilePictureAsync,
    isUpdatingProfilePicture
  };
};

export default useStudentProfile;