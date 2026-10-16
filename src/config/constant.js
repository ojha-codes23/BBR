import toast from "react-hot-toast";

export const BaseUrl = "https://bbrlms.tgastaging.com";
// export const BaseUrl = "http://192.168.1.107:8000";
export const baseURL = BaseUrl;

let isLoggingOut = false;

export const KEYS = {
  USER_INFO: "USER_INFO",
  DEVICE_TOKEN: "DEVICE_TOKEN",
  USER_TYPE: "USER_TYPE",
  KEEP_LOGIN: "KEEP_LOGIN",
  ROLE: "ROLE",
};

export const GOOGLE_KEY = "";

export const StripePublicKey = "";

//

export const LogoutError = (errorMessage) => {
  // console.log(errorMessage, "error message123");
  if (isLoggingOut) return;

  isLoggingOut = true;

  toast.error("Session expired. Please login again.");
  // 1. Instantly demote access privileges
  localStorage.setItem("USER_TYPE", "user");

  // 2. Clear out identifying tokens completely immediately
  localStorage.removeItem("USER_INFO");

  // 4. Force state alignment after a micro-timeout
  setTimeout(() => {
    window.location.replace("/"); // Replaces the window history entry to prevent back-button loops
  }, 800);
};
