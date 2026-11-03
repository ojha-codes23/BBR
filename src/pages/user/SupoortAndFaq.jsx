
import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/user/useUser'
import toast from 'react-hot-toast'

const SupportAndFaq = () => {
  const { getFaqAsync ,isgetFaqLoading} = useUser()
 const [getFaqData, setFaqData] = useState([]);

const [supportEmail, setSupportEmail] = useState("");
const [supportContact, setSupportContact] = useState("");

useEffect(() => {
  const fetchFaq = async () => {
    try {
      const response = await getFaqAsync();

      console.log("FAQ RESPONSE:", response);

      setFaqData(response?.faqs || []);
      setSupportEmail(response?.support_email || "");
      setSupportContact(response?.support_contact || "");
    } catch (error) {
      toast.error("FAQ data fetch failed");
    }
  };

  fetchFaq();
}, []);

   console.log(getFaqData?.faqs)

  return (
    <>
      <div className='support-wrapper'>

        <header className="page-header">
          <h1>Support & FAQs</h1>
          <p>Find answers to common questions and get help</p>
        </header>

        <div className="content-card-panel">

            {isgetFaqLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="text-muted mt-2 small">Loading your requests...</p>
            </div>):(

          <div className="accordion accordion-custom" id="faqAccordion">

                                    {getFaqData?.length > 0 ? (
                        getFaqData.map((item, index) => {
                            const faqId = `faq${item.id}`;
                            const isFirst = index === 0;

                            return (
                            <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${!isFirst ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${faqId}`}
                                    aria-expanded={isFirst}
                                    aria-controls={faqId}
                                >
                                    <span>{item.question}</span>
                                    <span className="accordion-icon-marker"></span>
                                </button>
                                </h2>

                                <div
                                id={faqId}
                                className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                                data-bs-parent="#faqAccordion"
                                >
                                <div className="accordion-body">
                                    {item.answer}
                                </div>
                                </div>
                            </div>
                            );
                        })
                        ) : (
                        <div className="accordion-body">No FAQs available.</div>
                        )}

          </div>
            )
        }
        </div>

        <div className="content-card-panel">
          <h3 className="need-more-help-title">Need More Help?</h3>
          <p className="need-more-help-desc">
            Can't find what you're looking for? Our support team is here to help.
          </p>

          <div className="row g-3">

            <div className="col-md-6">
              <div className="support-channel-card">
                <div className="channel-icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="channel-info">
                  <h4>Email Support</h4>
                  <p>{supportEmail}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="support-channel-card">
                <div className="channel-icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="channel-info">
                  <h4>Phone Support</h4>
                  <p>{supportContact}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default SupportAndFaq
