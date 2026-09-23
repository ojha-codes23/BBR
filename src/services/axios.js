import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Token expired / unauthorized
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        // Login page par redirect
        window.location.href = "/login";
      }

      if (status === 403) {
        console.log("Access denied");
      }

      if (status === 500) {
        console.log("Server error");
      }
    }

    return Promise.reject(error);
  }
);

export default api;