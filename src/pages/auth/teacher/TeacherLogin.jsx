import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/global/useAuth";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const TeacherLogin = () => {
  const navigate = useNavigate();
  const { loginAsync, isLoggingIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const loginData = {
        email: data.email.trim(),
        password: data.password.trim(),
        role: "teacher",
      };

      const res = await loginAsync(loginData);
      const message = res?.message || "Teacher logged in successfully.";
      toast.success(message);

      navigate("/teacher/organization");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid credentials. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="login-page-section">
      <div className="login-page-wrapper">
        <div className="login-left-banner">
          <img
            className="login-left-banner-img"
            src="/images/teacher/login/login-left-img.svg"
            alt="Group Background Image"
          />

          <div className="login-left-banner-overlay">
            <h1 className="login-overlay-title">
              Get
              <br />
              Everything
              <br />
              You Want
            </h1>
            <p className="login-overlay-desc">
              You can get everything you want if you work hard, trust the
              process, and stick to the plan.
            </p>
          </div>
        </div>

        <div className="login-right-content">
          <div className="login-form-container">
            <div className="login-header-logo">
              <img
                src="/images/teacher/login/logo.svg"
                alt="GrantLink NC Logo"
              />
            </div>

            <div className="login-form-card">
              <h3 className="login-form-title">Welcome Back</h3>
              <p className="login-form-subtitle">
                Enter your email and password to access your account
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="login-form-group">
                  <label className="login-input-label">Email</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type="email"
                      className={`login-input-control ${
                        errors.email ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="Enter your email"
                      disabled={isLoggingIn}
                      {...register("email", {
                        validate: {
                          required: (val) =>
                            (val && val.trim().length > 0) || "Email is empty",
                          validEmail: (val) =>
                            EMAIL_REGEX.test(val.trim()) ||
                            "Email is not valid",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-danger small mt-1 d-block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="login-form-group">
                  <label className="login-input-label">Password</label>
                  <div className="login-input-field-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="District-password"
                      className={`login-input-control ${
                        errors.password ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="Enter your password"
                      disabled={isLoggingIn}
                      {...register("password", {
                        validate: {
                          required: (val) =>
                            (val && val.trim().length > 0) ||
                            "Password is empty",
                          minLength: (val) =>
                            val.trim().length >= 6 ||
                            "Password must be at least 6 characters",
                        },
                      })}
                    />

                    <div
                      className="login-password-eye-icon"
                      id="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={
                          showPassword
                            ? "/images/teacher/login/eye-open.svg"
                            : "/images/teacher/login/eye-close.svg"
                        }
                        alt={showPassword ? "Hide Password" : "Show Password"}
                        id="eye-icon-img"
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <span className="text-danger small mt-1 d-block">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="login-options-row">
                  &nbsp;
                  <Link
                    to="/teacher/forget-password"
                    className="login-forgot-link"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </button>
                <br />
                <p className="text-center">
                  Don’t have an account?
                  <Link to="/teacher/sign-up" className="login-signup-link">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherLogin;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const TeacherLogin = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const loginData = {
//       email: email,
//       password: password,
//     };

//     console.log("Login Data", loginData);

//     navigate("/teacher/organization");
//   };

//   return (
//     <section className="login-page-section">
//       <div className="login-page-wrapper">
//         <div className="login-left-banner">
//           <img
//             className="login-left-banner-img"
//             src="/images/teacher/login/login-left-img.svg"
//             alt="Group Background Image"
//           />

//           <div className="login-left-banner-overlay">
//             <h1 className="login-overlay-title">
//               Get
//               <br />
//               Everything
//               <br />
//               You Want
//             </h1>
//             <p className="login-overlay-desc">
//               You can get everything you want if you work hard, trust the
//               process, and stick to the plan.
//             </p>
//           </div>
//         </div>

//         <div className="login-right-content">
//           <div className="login-form-container">
//             <div className="login-header-logo">
//               <img
//                 src="/images/teacher/login/logo.svg"
//                 alt="GrantLink NC Logo"
//               />
//             </div>

//             <div className="login-form-card">
//               <h3 className="login-form-title">Welcome Back</h3>
//               <p className="login-form-subtitle">
//                 Enter your email and password to access your account
//               </p>

//               <form onSubmit={handleLogin}>
//                 <div className="login-form-group">
//                   <label className="login-input-label">Email</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type="email"
//                       className="login-input-control"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="login-form-group">
//                   <label className="login-input-label">Password</label>
//                   <div className="login-input-field-wrapper">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       id="District-password"
//                       className="login-input-control"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />

//                     <div
//                       className="login-password-eye-icon"
//                       id="password-toggle-btn"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       <img
//                         src={
//                           showPassword
//                             ? "/images/teacher/login/eye-open.svg"
//                             : "/images/teacher/login/eye-close.svg"
//                         }
//                         alt={showPassword ? "Hide Password" : "Show Password"}
//                         id="eye-icon-img"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="login-options-row">
//                   &nbsp;
//                   <Link
//                     to="/teacher/forget-password"
//                     className="login-forgot-link"
//                   >
//                     Forgot Password?
//                   </Link>
//                 </div>

//                 <button type="submit" className="login-submit-btn">
//                   Login
//                 </button>
//                 <br />
//                 <p className="text-center">
//                   Don’t have an account?
//                   <Link to="/teacher/sign-up" className="login-signup-link">
//                     Sign Up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeacherLogin;
