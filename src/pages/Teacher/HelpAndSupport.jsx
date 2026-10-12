import React, {useState} from 'react';

const HelpAndSupport = () => {
    const [openFaq, setOpenFaq] = useState(1);

    const toggleFaq = (faqNumber) => {
        setOpenFaq((previous) => previous === faqNumber ? null : faqNumber)
    }

  return (
    <div className="faq-dashboard-container">

    {/* <!-- Top Screen Header Row Grid Component --> */}
    <header className="faq-page-header">
        <div>
            <h1>Support & FAQs</h1>
            <p>Find answers to common questions and get help</p>
        </div>

    </header>

    {/* <!-- Main Central FAQ Workspace Content Card --> */}
    <main className="main-faq-panel-card">

        {/* <!-- Bootstrap Accordion Wrapper Structure --> */}
        <div className="accordion border-0" id="faqAccordionCustom">

            {/* <!-- Accordion Item 1 (Initially Expanded) --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do I add a new User to the system?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" onClick={() => toggleFaq(1)}>
                            <i className={`fa-solid ${openFaq === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Navigate to User Management, click 'Create New User', select 'User' as the user
                        type, fill in the required information, and click 'Create User'. The User will
                        receive an email invitation to set up their account.

                        {/* <!-- Media Attachment Row Grid Layout --> */}
                        <div className="media-flex-row">
                            <div className="media-preview-box">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300"
                                    alt="Classroom Preview" />
                            </div>
                            <div className="media-preview-box">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300"
                                    alt="Video Preview" />
                                <div className="video-play-overlay">
                                    <i className="fa-regular fa-circle-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 2 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do I assign a teacher to a User?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" onClick={() => toggleFaq(2)}>
                            <i className={`fa-solid ${openFaq === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Go to the user profile view, look for the 'Assign Teacher' component panel, search
                        for your designated staff member, and hit confirm to map the profiles together.
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 3 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do I create a new course?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" onClick={() => toggleFaq(3)}>
                            <i className={`fa-solid ${openFaq === 3 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Access the Courses segment using the navigation links panel, and select
                        the primary action button to build a detailed configuration.
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 4 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do service requests work?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" onClick={() => toggleFaq(4)}>
                            <i className={`fa-solid ${openFaq === 4 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Service requests follow an approval pipeline, shifting from initialization to
                        administrative validation before assigning resources.
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 5 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do teachers log their hours?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" onClick={() => toggleFaq(5)}>
                            <i className={`fa-solid ${openFaq === 5 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Teachers can process entries directly from the dashboard view under the weekly hours
                        tracking window component grid.
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 6 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do I moderate community spaces?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSix" aria-expanded="false" onClick={() => toggleFaq(6)}>
                            <i className={`fa-solid ${openFaq === 6 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseSix" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Assigned moderators gain system level rights to filter flagged inputs, approve group
                        threads, and handle internal space settings.
                    </div>
                </div>
            </div>

            {/* <!-- Accordion Item 7 --> */}
            <div className="faq-item-card accordion-item border-0">
                <div className="faq-item-header">
                    <h2 className="faq-title-text">How do I send a survey to specific Users?</h2>
                    <div className="faq-action-group">
                        <button className="action-icon-btn toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven" aria-expanded="false" onClick={() => toggleFaq(7)}>
                            <i className={`fa-solid ${openFaq === 7 ? 'fa-minus' : 'fa-plus'}`}></i>
                        </button>
                    </div>
                </div>
                <div id="collapseSeven" className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordionCustom">
                    <div className="faq-item-body">
                        Use the Survey Builder module, apply targeted segment rules via the user filtration
                        panel, and trigger direct system distributions.
                    </div>
                </div>
            </div>

        </div>
        {/* <!-- Accordion End --> */}

    </main>

    {/* <!-- Lower Footer Module: Need More Help Box Frame Component --> */}
    <section className="need-help-card-panel">
        <h3>Need More Help?</h3>
        <p>Can't find what you're looking for? Our support team is here to help.</p>

        <div className="contact-methods-grid">

            {/* <!-- Email Support Contact Container --> */}
            <div className="contact-box-item">
                <div className="contact-box-left">
                    <div className="contact-icon-square">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="contact-details-text">
                        <div className="label-title">Email Support</div>
                        <div className="value-desc">support@academy.edu</div>
                    </div>
                </div>
            </div>

            {/* <!-- Phone Support Contact Container with Embedded Input field --> */}
            <div className="contact-box-item">
                <div className="contact-box-left">
                    <div className="contact-icon-square">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="contact-details-text">
                        <div className="label-title">Phone Support</div>
                        <div className="value-desc">1-800-ACADEMY (Mon-Fri, 9am-5pm)</div>
                       
                    </div>
                </div>
            </div>

        </div>
    </section>

</div>
  )
}

export default HelpAndSupport