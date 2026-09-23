import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import api from "../../services/axios";
import { setAuth, logout as logoutAction } from "../../redux/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const {
    mutate: login,
    mutateAsync: loginAsync,
    isPending: isLoggingIn,
    error: loginError,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/auth/login", data);

      return response.data;
    },

    onSuccess: (data) => {
      const token = data?.token;
      const user = data?.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(
        setAuth({
          token,
          user,
        })
      );
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logoutAction());
  };

  return {
    login,
    loginAsync,
    logout,
    isLoggingIn,
    loginError,
  };
};

export default useAuth;