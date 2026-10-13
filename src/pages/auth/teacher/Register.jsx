import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      console.log('Phone number must be exactly 10 digits.');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
      return;
    }

    const registerData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      organizationAccessCode: accessCode,
      password: password,
      confirmPassword: confirmPassword,
      termsAccepted: termsAccepted,

    }

    console.log('Registration Data:', registerData);

    navigate("/teacher")

    


  }

  return (
    <section className="login-page-section">
      <div className="login-page-wrapper">

        <div className="login-left-banner">
          <img className="login-left-banner-img" src="/images/teacher/login/login-left-img.svg" alt="Group Background Image" />

          <div className="login-left-banner-overlay">
            <h1 className="login-overlay-title">Get<br />Everything<br />You Want</h1>
            <p className="login-overlay-desc">You can get everything you want if you work hard, trust the process,
              and stick to the plan.</p>
          </div>
        </div>

        <div className="login-right-content">
          <div className="login-form-container">

            <div className="login-header-logo">
              <img src="/images/teacher/login/logo.svg" alt="GrantLink NC Logo" />
            </div>

            <div className="login-form-card">
              <h3 className="login-form-title">Create Your Account</h3>
              <p className="login-form-subtitle">Enter your email and password to access your account</p>

              <form onSubmit={handleSignUp}>

                <div className="login-form-group">
                  <label className="login-input-label">Full Name</label>
                  <div className="login-input-field-wrapper">
                    <input type="text" className="login-input-control" placeholder="Enter your full name"
                      value={fullName} onChange={(e) => setFullName(e.target.value)}
                      required />
                  </div>
                </div>
                <div className="login-form-group">
                  <label className="login-input-label">Email</label>
                  <div className="login-input-field-wrapper">
                    <input type="email" className="login-input-control" placeholder="Enter your email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      required />
                  </div>
                </div>

                <div className="login-form-group-wrp">
                  <div className="login-form-group">
                    <label className="login-input-label">Phone Number</label>
                    <div className="login-input-field-wrapper">
                      <input type="tel" className="login-input-control"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(
                          e.target.value.replace(/\D/g, '').slice(0, 10)
                        )}
                        inputMode='numeric'
                        maxLength={10}
                        pattern='[0-9]{10}'
                        required />
                    </div>
                  </div>
                  <div className="login-form-group">
                    <label className="login-input-label">Organization Access Code</label>
                    <div className="login-input-field-wrapper">
                      <input type="text" className="login-input-control" placeholder="Enter Access Code"
                        value={accessCode} onChange={(e) => setAccessCode(e.target.value)}
                        required />
                    </div>
                  </div>
                </div>

                <div className="login-form-group">
                  <label className="login-input-label">Create Password</label>
                  <div className="login-input-field-wrapper">
                    <input type={showPassword ? 'text' : 'password'} className="login-input-control"
                      placeholder="Enter your password"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      required />

                    <div className="login-password-eye-icon" onClick={() => setShowPassword(!showPassword)} >
                      <img src={showPassword ? '/images/teacher/login/eye-open.svg' : "/images/teacher/login/eye-close.svg"} alt="Password" />
                    </div>
                  </div>
                </div>

                <div className="login-form-group">
                  <label className="login-input-label">Re-enter Password</label>
                  <div className="login-input-field-wrapper">
                    <input type={showConfirmPassword ? "text" : "password"} className="login-input-control"
                      placeholder="Re-enter Password"
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                      required />

                    <div className="login-password-eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      <img src={showConfirmPassword ? '/images/teacher/login/eye-open.svg' : "/images/teacher/login/eye-close.svg"} alt="Show Password" />
                    </div>
                  </div>
                </div>

                <div className="login-options-row">
                  <label className="login-toggle-wrapper">
                    <input type="checkbox" className="login-toggle-input" name="termsAccepted" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}
                      style={{ display: "block" }} />
                    <span className="login-toggle-text">
                      I agree to the <a href="" target="_blank">Terms & Conditions</a>
                    </span>
                  </label>
                </div>

                <button type='submit' className="login-submit-btn">Sign Up</button>
                <br />
                <p className="text-center">Already have an account?
                  <Link to="/teacher" className="login-signup-link">Login</Link>
                </p>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Register