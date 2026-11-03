
import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";


const useSow=()=>{

  const {
    mutate: scheduleShowCall,
    mutateAsync: scheduleShowCallAsync,
    isPending: scheduleShowLoading,
    error: scheduleShowError,
  } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await api.post(
          "/api/student/schedule-sow-call",
          {
           ...payload||{}
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

    scheduleShowCall,
    scheduleShowCallAsync,

    scheduleShowError,
    scheduleShowLoading

}
}

export default useSow

