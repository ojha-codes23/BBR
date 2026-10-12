import React from 'react'
import AcceptAgreementModal from '../../../components/user/sowmodal/AcceptAgreementModal'
import DeclineAgreementModal from '../../../components/user/sowmodal/declineAgreementModal'

const SOWDetail3 = () => {
  return (
   <>
          <main>
      <div className="gl-sow-page-container">
    
    <div className="gl-sow-header">
        <button type="button" className="gl-back-round-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </button>
        <div className="gl-header-titles-block">
            <h1 className="gl-sow-main-title">SOW Details</h1>
            <p className="gl-sow-subtitle">Career planning and skill development guidance</p>
        </div>
    </div>

    <div className="gl-sow-card-box border-light-grey mb-4">
        <h3 className="gl-box-section-mini-heading text-muted mb-4">Service Tracker</h3>
        <div className="gl-timeline-tracker-flow">
            
            <div className="gl-timeline-node node-step-completed">
                <div className="gl-node-circle-indicator">✓</div>
                <div className="gl-node-headline">Call Discussion</div>
                <div className="gl-node-subtext">Service request submitted for review</div>
                <div className="gl-node-date-stamp">November 20, 2025</div>
            </div>

            <div className="gl-timeline-connector line-completed"></div>

            <div className="gl-timeline-node node-step-completed">
                <div className="gl-node-circle-indicator">✓</div>
                <div className="gl-node-headline">Fill SOW Form</div>
                <div className="gl-node-subtext">SOW Form filled for review</div>
                <div className="gl-node-date-stamp">November 20, 2025</div>
            </div>

            <div className="gl-timeline-connector line-waiting">
                <span className="gl-badge-waiting-tag">Waiting</span>
            </div>

            <div className="gl-timeline-node node-step-active">
                <div className="gl-node-circle-indicator">✓</div>
                <div className="gl-node-headline">Request Submitted</div>
            </div>

            <div className="gl-timeline-connector line-pending"></div>

            <div className="gl-timeline-node node-step-locked">
                <div className="gl-node-circle-indicator">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                </div>
                <div className="gl-node-headline text-muted">Payment</div>
            </div>
        </div>
    </div>

    <div className="gl-sow-intro-block text-left mb-4">
        <div className="sow-heading-wrp">
            <h2 className="gl-intro-main-heading">SOW</h2>
            <div className="lsc-price-summary-row">
    <div className="lsc-price-label-group">
        <span className="lsc-price-main-text">Total Price</span>
        <span className="lsc-price-sub-text">(Including Platform Fee)</span>
    </div>
    <div className="lsc-price-value-badge">
        $ 150
    </div>
</div>
        </div>
        <p className="gl-intro-author-subtext">Sent by Sarah Johnson. Please fill, review, sign and submit to activate your service.</p>
        <p className="gl-intro-body-paragraph">This form helps us understand what kind of support your organization needs through the GrantLink NC program. Please fill out all the sections that apply to you as best as you can. If you'd like to learn more about the services we offer, visit <a href="#" className="gl-custom-anchor-link">https://grantlinknc.com/services/</a>.</p>
        <p className="gl-intro-body-paragraph mt-2">If you have questions about this form, please contact: <strong className="text-dark">team@grantlinknc.com</strong></p>
    </div>

    <div className="gl-sow-card-box text-left mb-4">
        <h2 className="gl-section-block-title mb-4">Organization Information</h2>
        
        <div className="gl-form-row-grid-full mb-3">
            <label className="gl-form-field-label">Organization Name<span className="required-asterisk">*</span></label>
            <input type="text" className="gl-form-text-input-field" placeholder="Please provide the full legal name of your organization."/>
        </div>

        <div className="gl-form-row-grid-full mb-3">
            <label className="gl-form-field-label">Contact Person<span className="required-asterisk">*</span></label>
            <input type="text" className="gl-form-text-input-field" placeholder="Enter the full name of the person on your team that we should reach out to regarding this request."/>
        </div>

        <div className="gl-form-row-grid-two-col">
            <div className="gl-field-col-block">
                <label className="gl-form-field-label">Contact Email Address<span className="required-asterisk">*</span></label>
                <input type="email" className="gl-form-text-input-field" placeholder="Provide the best email address for follow-up communications."/>
            </div>
            <div className="gl-field-col-block">
                <label className="gl-form-field-label">Contact Phone Number (optional)</label>
                <input type="text" className="gl-form-text-input-field" placeholder="Provide the best phone number for follow-up communications."/>
            </div>
        </div>
    </div>

    <div className="gl-sow-card-box text-left mb-4">
        <h2 className="gl-section-block-title mb-2">Service Requests</h2>
        <div className="gl-alert-info-light-box-panel mb-4">
            <p>GrantLink NC has several services available. Please read the description for each service before completing this section. The service descriptions are below:</p>
            <p className="mt-3"><strong>Grant Writing Assistance</strong> – A GrantLink NC service provider writes the grant proposal for your organization.</p>
            <p><strong>Technical Assistance (TA)</strong> – A GrantLink NC service provider helps your team with planning, feedback, and strategy. This can include writing letters of intent (LOIs), reviewing grant proposals and budgets, or other fundraising support that isn't writing a full grant proposal.</p>
            <p><strong>Hire a Grant Writer</strong> – You can apply for funds to hire your own grant writer to help with one or more grant applications.</p>
            <p><strong>(Coming Soon) Scenario Positioning Capacity Building</strong> – This service helps your organization plan ahead and stay ready for change. You'll review your goals, funding, and community needs to create flexible plans that help you adapt when things shift.</p>
            <p><strong>Revenue Diversification Capacity Building</strong> – This service helps your organization find new ways to bring in money. Providers work with you to build a mix of funding sources, like donors and partnerships, so your organization stays strong and less dependent.</p>
            
            <div className="gl-form-field-label mt-4 text-dark font-weight-bold">Disclosure<span className="required-asterisk">*</span></div>
            <p className="text-muted">Please read the following disclosure about GrantLink NC services:</p>
            <p className="font-weight-medium mt-2">Service Availability</p>
            <p className="text-muted">• Service availability may be limited during periods of peak demand.</p>
            <p className="text-muted">• You will be notified if we are not able to accommodate your request.</p>
            
            <p className="font-weight-medium mt-2">Recommendations</p>
            <p className="text-muted">• Submit Grant Writing or Technical Assistance requests well in advance of the grant deadline.</p>
            <p className="text-muted">• Consider using Technical Assistance instead of grant writing support when you need assistance with smaller grants (under $25k) or grants with short or simple applications.</p>
            <p className="text-muted">• Grant Writing Assistance is limited. If you plan to request support for more than two grant applications within a short period of time, consider submitting a request to Hire a Grant Writer instead.</p>
            
            <p className="mt-3">We appreciate your understanding and cooperation! Please check the box below to confirm that you have read and understood this information.</p>
            
            <div className="gl-checkbox-custom-input-wrapper mt-2">
                <input type="checkbox" id="disclosure_check" className="gl-native-checkbox-element"/>
                <span className="gl-facade-checkbox-square-box"></span>
            </div>
        </div>

        <div className="gl-form-row-grid-full">
            <label className="gl-form-field-label">Select the type of support you are requesting. You may choose more than one:<span className="required-asterisk">*</span></label>
            
            <div className="gl-vertical-radio-chips-stack-list">
                <label className="gl-chip-selection-label-item item-skin-orange" for="support_grant">
                    <input type="radio" name="support_type" id="support_grant" checked/>
                    <span className="gl-radio-inner-dot-facade"></span>
                    <span className="gl-chip-inner-text-label">Grant Writing Assistance</span>
                </label>

                <label className="gl-chip-selection-label-item item-skin-green" for="support_ta">
                    <input type="radio" name="support_type" id="support_ta"/>
                    <span className="gl-radio-inner-dot-facade"></span>
                    <span className="gl-chip-inner-text-label">Technical Assistance (TA)</span>
                </label>

                <label className="gl-chip-selection-label-item item-skin-purple" for="support_hire">
                    <input type="radio" name="support_type" id="support_hire"/>
                    <span className="gl-radio-inner-dot-facade"></span>
                    <span className="gl-chip-inner-text-label">Hire a Grant Writer</span>
                </label>

                <label className="gl-chip-selection-label-item item-skin-blue" for="support_revenue">
                    <input type="radio" name="support_type" id="support_revenue"/>
                    <span className="gl-radio-inner-dot-facade"></span>
                    <span className="gl-chip-inner-text-label">Revenue Diversification Capacity Building</span>
                </label>
            </div>
        </div>
    </div>

    <div className="gl-sow-card-box text-left mb-4">
        <h2 className="gl-section-block-title mb-4">Additional Information</h2>
        <div className="gl-form-row-grid-full mb-3">
            <label className="gl-form-field-label">Request Description<span className="required-asterisk">*</span></label>
            <textarea className="gl-form-textarea-field-control" rows="4" placeholder="Please provide a brief description of your request and any additional information that may be relevant to your request for support"></textarea>
        </div>
        <div className="gl-form-row-grid-full">
            <input type="text" className="gl-form-text-input-field" placeholder="Would you like to receive a copy of your submission? If yes, please provide the email address where you would like to receive a copy."/>
        </div>
    </div>

    <div className="gl-sow-card-box text-left mb-4">
        <h2 className="gl-section-block-title mb-2">Acknowledgements</h2>
        <div className="gl-alert-info-light-box-panel">
            <p className="text-dark">By checking the box below, I acknowledge that the information provided in this form is accurate to the best of my knowledge and that I would like to request the services stated above.</p>
            <p className="mt-2 font-weight-medium">I agree.</p>
            <div className="gl-checkbox-custom-input-wrapper mt-2 mb-3">
                <input type="checkbox" id="agree_check" className="gl-native-checkbox-element"/>
                <span className="gl-facade-checkbox-square-box"></span>
            </div>

            <p className="font-weight-medium text-dark mt-3">Test Data<span className="required-asterisk">*</span></p>
            <p className="text-muted">Please check this box to indicate that this is a test and not a real submission.</p>
            <div className="gl-checkbox-custom-input-wrapper mt-2">
                <input type="checkbox" id="test_data_check" className="gl-native-checkbox-element"/>
                <span className="gl-facade-checkbox-square-box"></span>
            </div>
        </div>
    </div>

    <div className="gl-sow-card-box text-left mb-4">
        <h2 className="gl-section-block-title mb-2">User E-Signature</h2>
        <p className="text-muted mb-3">Please confirm full name and signature.</p>
        
        <div className="gl-form-row-grid-full max-width-xs mb-3">
            <input type="text" className="gl-form-text-input-field font-monospace" value="Lorem Ipsum"/>
        </div>
       <div className="lorem-text-box">
         <button type="button" className="gl-change-font-action-btn">Change Font</button>
        <div className="gl-signature-pad-display-canvas-frame">
            
            <div className="gl-signature-rendering-output-box">
                Lorem Ipsum
            </div>
        </div>
       </div>
        <p className="text-muted mt-3 font-size-sm">I agree that I am Lorem Ipsum and I understand this is a legal representation of my signature</p>

        <div className="gl-teacher-signature-status-row mt-4">
            <div className="gl-form-field-label mb-2 text-dark font-weight-bold">Teacher E-Signature</div>
            <div className="gl-signed-success-status-pill">
                <span className="gl-pill-check-icon">✓</span> Signed
            </div>
        </div>
    </div>

    <div className="gl-sow-card-box text-left mb-4 border-dashed-active">
        <div className="gl-flex-align-checkbox-headline mb-3">
            <div className="gl-checkbox-custom-input-wrapper">
                <input type="checkbox" id="revision_trigger" className="gl-native-checkbox-element" checked/>
                <span className="gl-facade-checkbox-square-box"></span>
            </div>
            <label for="revision_trigger" className="gl-revision-checkbox-label-text">Something odd? Request for revision.</label>
        </div>

        <div className="gl-form-row-grid-full">
            <label className="gl-form-field-label">Request Description<span className="required-asterisk">*</span></label>
            <textarea className="gl-form-textarea-field-control" rows="4" placeholder="Please provide a brief description of your request and any additional information that may be relevant to your request for support"></textarea>
        </div>
    </div>

    <div className="gl-sow-form-action-footer-row">
        <button data-bs-toggle="modal" data-bs-target="#declineAgreementModal" type="button" className="gl-btn-footer-outline-danger">✕ Decline</button>
        <button data-bs-toggle="modal" data-bs-target="#acceptAgreementModal" type="button" className="gl-btn-footer-disabled">✓ Adopt & Sign</button>
        <button type="button" className="gl-btn-footer-solid-amber-warning">⚠ Request Revision</button>
    </div>

</div>
    </main>

            <AcceptAgreementModal/>
            <DeclineAgreementModal/>   
   </>
  )
}

export default SOWDetail3
