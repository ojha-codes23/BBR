import { createSlice } from "@reduxjs/toolkit";
import { KEYS } from "../../config/constant";

// Helper to hydrate initial state on page reload
const getInitialUserSession = () => {
  try {
    const stored =
      localStorage.getItem(KEYS.USER_INFO) ||
      sessionStorage.getItem(KEYS.USER_INFO);

    if (stored) {
      const parsed = JSON.parse(stored);
      const authPayload = parsed?.data || parsed;
      return {
        token: authPayload?.access_token || authPayload?.token || null,
        user: authPayload?.user || null,
      };
    }
  } catch (err) {
    console.error("Error reading stored user in Redux init:", err);
  }
  return { token: null, user: null };
};

const initialSession = getInitialUserSession();

const initialState = {
  // Contains access_token and user info needed by api.js and ProtectedRoutes
  userInfo: initialSession.token ? initialSession : null,
  user: initialSession.user,
  token: initialSession.token,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // Used by useAuth: dispatch(setAuth({ token, user }))
    setAuth: (state, action) => {
      const { token, user } = action.payload || {};
      state.token = token || null;
      state.user = user || null;
      state.userInfo = {
        token: token || null,
        access_token: token || null,
        user: user || null,
      };
    },

    // Used by useAuth: dispatch(logoutAction())
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.userInfo = null;
    },

    // Aliases to avoid breaking legacy imports
    setUser: (state, action) => {
      state.user = action.payload?.user || action.payload;
      state.token =
        action.payload?.token || action.payload?.access_token || state.token;
      state.userInfo = {
        token: state.token,
        access_token: state.token,
        user: state.user,
      };
    },

    clearUser: (state) => {
      state.token = null;
      state.user = null;
      state.userInfo = null;
    },
  },
});

export const { setAuth, logout, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
