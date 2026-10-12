import React, { useState } from 'react';

import PersonalTab from "./Profile/PersonalTab";
import ProfessionalTab from "./Profile/ProfessionalTab";
import BankDetailsTab from "./Profile/BankDetailsTab";
import ExpertiseTab from "./Profile/ExpertiseTab";
import InterestsTagsTab from "./Profile/InterestsTagsTab";
import DocumentsTab from "./Profile/DocumentsTab";
import AvailabilityTab from "./Profile/AvailabilityTab";

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <main className="content-body">

            {/* Profile Header */}
            <div className="page-header-row">
                <div>
                    <h1 className="page-title">My Profile</h1>
                    <p className="page-subtitle">
                        Manage your professional profile and preferences
                    </p>
                </div>

                <button className="btn-edit-profile">
                    <i className="fa-regular fa-pen-to-square"></i>
                    Edit Profile
                </button>
            </div>

            {/* <!-- Profile Summary Card Section Banner --> */}
            <header className="instructor-header-banner-card">
                <div className="avatar-circle-frame">
                    {/* <!-- Simulated accurate persona image place node --> */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                        alt="Sarah Johnson" />
                </div>
                <div className="instructor-meta-details-box">
                    <div className="name-rating-row">
                        <h2>Sarah Johnson</h2>
                        <div className="rating-metrics-tag">
                            <i className="fa-solid fa-star"></i> 4.8 <span>(156 reviews)</span>
                        </div>
                    </div>
                    <div className="sub-subtitle-code-line">
                        Senior Mathematics Instructor <span>|</span> Stanford University • Mathematics
                        <span>|</span>
                        Company Code- D05 E5E5
                    </div>
                    <div className="skills-badges-wrapper-flex">
                        <span className="skill-node-pill">Calculus</span>
                        <span className="skill-node-pill">Linear Algebra</span>
                        <span className="skill-node-pill">Statistics</span>
                        <span className="skill-node-pill">Python Programming</span>
                    </div>
                </div>
            </header>
            {/* Keep your existing profile banner here */}


            {/* Tabs */}
            <div className="gl-dashboard-tabs-wrapper">

                <ul className="nav nav-pills gl-custom-nav-pills">

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "personal" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("personal")}
                        >
                            Personal
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "professional" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("professional")}
                        >
                            Professional
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "bank" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("bank")}
                        >
                            Bank Details
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "expertise" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("expertise")}
                        >
                            Expertise
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "interests" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("interests")}
                        >
                            Interests & Tags
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "documents" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("documents")}
                        >
                            Documents
                        </button>
                    </li>

                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "availability" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("availability")}
                        >
                            Availability
                        </button>
                    </li>

                </ul>


                {/* Tab Content */}
                <div className="tab-content gl-custom-tab-content-wrapper">

                    {activeTab === "personal" && <PersonalTab />}

                    {activeTab === "professional" && (
                        <ProfessionalTab />
                    )}

                    {activeTab === "bank" && (
                        <BankDetailsTab />
                    )}

                    {activeTab === "expertise" && (
                        <ExpertiseTab />
                    )}

                    {activeTab === "interests" && (
                        <InterestsTagsTab />
                    )}

                    {activeTab === "documents" && (
                        <DocumentsTab />
                    )}

                    {activeTab === "availability" && (
                        <AvailabilityTab />
                    )}

                </div>

            </div>

        </main>
    )
}

export default MyProfile