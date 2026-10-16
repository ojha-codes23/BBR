import axios from "axios";
import { KEYS, baseURL, LogoutError } from "./constant";
import store from "../store";

// --- 1. TIMEZONE & HEADERS CONFIGURATION ---

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const normalizedTimezone =
  timezone === "Asia/Calcutta" ? "Asia/Kolkata" : timezone;

const defaultHeaders = {
  "Content-Type": "application/json",
  Timezone: normalizedTimezone,
};

// --- 2. AUTH TOKEN RESOLVER ---

/**
 * Retrieves the access token with fallbacks.
 * Checks Redux store first; checks localStorage/sessionStorage next.
 */
const getAuthToken = () => {
  // 1. Check active Redux state
  const reduxToken = store.getState()?.user?.userInfo?.token;
  if (reduxToken) return reduxToken;

  // 2. Check storage
  const storedUserString =
    localStorage.getItem(KEYS.USER_INFO) ||
    sessionStorage.getItem(KEYS.USER_INFO);

  if (storedUserString) {
    try {
      const parsedUser = JSON.parse(storedUserString);
      return parsedUser?.access_token || parsedUser?.token || null;
    } catch (parseError) {
      console.error("Error parsing stored auth info:", parseError);
    }
  }

  return null;
};

// --- 3. AXIOS INSTANCE CREATION ---

/**
 * Authenticated instance.
 * Automatically injects Bearer token and handles JSON and FormData uploads.
 */
export const api = axios.create({
  baseURL,
  headers: defaultHeaders,
});

/**
 * Guest / Public instance.
 * For unauthenticated endpoints (login, register, public lookups).
 */
export const guestApi = axios.create({
  baseURL,
  headers: defaultHeaders,
});

// Alias for backward compatibility if any module imports formDataApi directly
export const formDataApi = api;

// --- 4. REQUEST INTERCEPTORS ---

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // When passing FormData, allow Axios/browser to set the proper boundary
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// --- 5. GLOBAL RESPONSE INTERCEPTORS ---

/**
 * Handles HTTP 2xx responses and catches backend-level auth rejections.
 */
const handleResponseSuccess = (response) => {
  if (!response) {
    return Promise.reject(
      new Error("Server not responding. Please try again.")
    );
  }

  const resData = response.data;

  // Handles 200 OK responses with `{ success: false, message: "Unauthenticated." }`
  if (resData && resData.success === false) {
    if (resData.message === "Unauthenticated.") {
      LogoutError(resData.message);
      return new Promise(() => {}); // Halts the promise chain to silence downstream error toasts
    }
    return Promise.reject(resData);
  }

  return response;
};

/**
 * Handles HTTP 4xx/5xx network and status errors.
 */
const handleResponseError = (err) => {
  const errorResponse = err?.response?.data;
  const statusCode = err?.response?.status;

  // Handles HTTP 401 Unauthorized or explicit unauthenticated error messages
  if (statusCode === 401 || errorResponse?.message === "Unauthenticated.") {
    LogoutError(errorResponse?.message || "Session expired.");
    return new Promise(() => {}); // Halts promise chain
  }

  return Promise.reject(errorResponse || err);
};

// Attach response interceptors to both instances
[api, guestApi].forEach((instance) => {
  instance.interceptors.response.use(
    handleResponseSuccess,
    handleResponseError
  );
});

export default api;
