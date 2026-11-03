
import { useQuery } from "@tanstack/react-query";
import api from "../../config/api";

const useCourseManagement = (coursePayload = {}) => {

  // Get Course Categories API
  const {
    data: courseCategoriesResponse,
    isPending: isLoadingCourseCategories,
    error: courseCategoriesError,
    refetch: refetchCourseCategories,
  } = useQuery({
    queryKey: ["courseCategories"],
    queryFn: async () => {
      const response = await api.post(
        "/api/student/get-course-categories",
        {}
      );

      return response.data;
    },
  });

  // Get Courses API
  const {
    data: coursesResponse,
    isPending: isLoadingCourses,
    error: coursesError,
    refetch: refetchCourses,
  } = useQuery({
    queryKey: ["courses", coursePayload],
    queryFn: async () => {
      const response = await api.post(
        "/api/student/get-courses",
        coursePayload
      );

      return response.data;
    },
  });

  return {
    // Course Categories
    courseCategories: courseCategoriesResponse?.data ?? [],
    isLoadingCourseCategories,
    courseCategoriesError,
    refetchCourseCategories,

    // Courses
    courses: coursesResponse?.data?.courses ?? [],
    coursePagination: coursesResponse?.data?.pagination ?? {},
    isLoadingCourses,
    coursesError,
    refetchCourses,
  };
};

export default useCourseManagement;
