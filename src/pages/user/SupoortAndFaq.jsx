import React from 'react'

const SupportAndFaq = () => {
  return (
   <>
     {/* <main> */}
        <div >

        {/* <!-- Top Headline Header View Component --> */}
        <header className="page-header">
            <h1>Support & FAQs</h1>
            <p>Find answers to common questions and get help</p>
        </header>

        {/* <!-- FAQ Main Outer Border Wrapper Panel --> */}
        <div className="content-card-panel">
            <div className="accordion accordion-custom" id="faqAccordion">

                {/* <!-- FAQ Item 1 (Opened by default as per image) --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">
                            <span>What can I do from the Program Officer dashboard?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            The dashboard allows you to monitor program activity for your assigned school(s). You can
                            view service requests, track User progress, monitor engagement metrics, review provider
                            activity, and analyze program outcomes.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 2 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            <span>What are Service Requests?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Service requests are formal submissions created to request specific academic actions,
                            mentorship supports, or program assets required by the operational framework.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 3 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            <span>Can I approve or deny service requests?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Yes, depending on your assigned roles and specific level of permissions, you can manage,
                            evaluate, approve or deny incoming service requests cleanly.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 4 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            <span>How can I review the details of a service request?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Click on the specific request row inside your dashboard list to view the comprehensive
                            timeline, user information, and status log summaries.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 5 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            <span>What information can I see in the Analytics Dashboard?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            The analytics segment features data visualizations monitoring active student engagement
                            levels, total completed hours, milestone tracks, and provider utility parameters.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 6 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            <span>Can I export program data?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Yes, you can utilize the download options inside advanced analytics or list data grids to
                            export tabular logs directly as standardized spreadsheet files.
                        </div>
                    </div>
                </div>

                {/* <!-- FAQ Item 7 --> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                            <span>Are monitoring activities recorded in the system?</span>
                            <span className="accordion-icon-marker"></span>
                        </button>
                    </h2>
                    <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            All platform tasks, state updates, timeline changes, and operational review workflows are
                            saved securely inside the system logs for audit compliance.
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* <!-- Bottom "Need More Help" Contact Support Section Panel --> */}
        <div className="content-card-panel">
            <h3 className="need-more-help-title">Need More Help?</h3>
            <p className="need-more-help-desc">Can't find what you're looking for? Our support team is here to help.</p>

            <div className="row g-3">
                {/* <!-- Email Option Box Component --> */}
                <div className="col-md-6">
                    <div className="support-channel-card">
                        <div className="channel-icon-box">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="channel-info">
                            <h4>Email Support</h4>
                            <p>support@academy.edu</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Phone Option Box Component --> */}
                <div className="col-md-6">
                    <div className="support-channel-card">
                        <div className="channel-icon-box">
                            <i className="bi bi-telephone"></i>
                        </div>
                        <div className="channel-info">
                            <h4>Phone Support</h4>
                            <p>1-800-ACADEMY (Mon-Fri, 9am-5pm)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    {/* </main> */}
   </>
  )
}

export default SupportAndFaq
