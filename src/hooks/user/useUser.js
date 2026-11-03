import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

const useUser = () => {
  const {
    mutate: getFaq,
    mutateAsync: getFaqAsync,
    isPending: isgetFaqLoading,
    error: getFaqError,
  } = useMutation({
    mutationFn: async () => {
      try {
        const response = await api.post("/api/student/get-faq");
        return response.data?.data;
      } catch (error) {
        console.log(error);
        // throw error;
      }
    },
  });

return{
    getFaq,
    getFaqAsync,

    getFaqError,
    isgetFaqLoading
}

}

export default useUser;