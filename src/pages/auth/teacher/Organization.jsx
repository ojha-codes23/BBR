import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Organization = () => {

    const [selectedOrg, setSelectedOrg] = useState('El Camino High School');
    const navigate = useNavigate();

    const handleProceed = (e) => {
        e.preventDefault();
    
        console.log('Selected Organization:', selectedOrg);
    
        // Later, continue after the API confirms success.
        navigate('/teacher/dashboard');
    };

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

                        <div className="login-header-wrapper">
                            <Link to="/teacher" className="login-back-arrow-btn" title="Back">
                                <img src="/images/teacher/login/left-arrow.svg" alt="Back" />
                            </Link>

                            <div className="login-header-logo-container">
                                <img src="/images/teacher/login/logo.svg" alt="GrantLink NC Logo"
                                    style={{ maxWidth: "180px", height: "auto", display: "block" }} />
                            </div>
                        </div>

                        <div className="login-form-card">
                            <h3 className="login-form-title">Organizations</h3>
                            <p className="login-form-subtitle">Choose Your Organization to <br />
                                access your account</p>

                            <form onSubmit={handleProceed}>

                                <div className="org-list-card">
                                    <div className="org-scroll-container">

                                        <label className="org-item-row" for="org1">
                                            <p className="org-name-text">El Camino High School</p>
                                            <input className="org-radio-input" type="radio" name="selected_org" id="org1" 
                                                    value="El Camino High School"
                                                    checked={selectedOrg === 'El Camino High School'}
                                                    onChange={(e) => setSelectedOrg(e.target.value)}
                                                 />
                                        </label>

                                        <label className="org-item-row" for="org2">
                                            <p className="org-name-text">Wayne Community College</p>
                                            <input className="org-radio-input" type="radio" name="selected_org" id="org2" 
                                            value="Wayne Community College"
                                            checked={selectedOrg === 'Wayne Community College'}
                                            onChange={(e) => setSelectedOrg(e.target.value)}
                                            />
                                        </label>

                                        <label className="org-item-row" for="org3">
                                            <p className="org-name-text">Tennessee College of Applied Technology</p>
                                            <input className="org-radio-input" type="radio" name="selected_org" id="org3" />
                                        </label>

                                        <label className="org-item-row" for="org4">
                                            <p className="org-name-text">Universal Technical Institute</p>
                                            <input className="org-radio-input" type="radio" name="selected_org" id="org4" />
                                        </label>

                                        <label className="org-item-row" for="org5">
                                            <p className="org-name-text">Gateway Community College</p>
                                            <input className="org-radio-input" type="radio" name="selected_org" id="org5" />
                                        </label>

                                    </div>
                                </div>

                                <button type='submit' to="/teacher/dashboard" className="login-submit-btn">Proceed</button>

                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Organization