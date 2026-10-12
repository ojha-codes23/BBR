import React from 'react'

const PaymentDetails = () => {
    return (
        <div className="modal fade" id="paymentDetailsModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog custom-popup-dialog">
                <div className="modal-content custom-popup-content">

                    {/* <!-- Outside Floating Close Control Trigger --> */}
                    <button type="button" className="modal-custom-close-btn" data-bs-dismiss="modal" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* <!-- Heading Icon Info Row Block --> */}
                    <div className="popup-main-heading-block">
                        <div className="popup-title-icon-box">
                            <i className="fa-solid fa-credit-card"></i>
                        </div>
                        <h5>Payment Details</h5>
                    </div>

                    {/* <!-- Block Section 1: User Information --> */}
                    <div className="popup-section-label">User Information</div>
                    <div className="popup-info-card-block">
                        <div className="popup-info-row">
                            <span className="field-label">Name</span>
                            <span className="field-value text-dark">James Chen</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">Service</span>
                            <span className="field-value">Career Guidance</span>
                        </div>
                    </div>

                    {/* <!-- Block Section 2: Payment Summary Primary --> */}
                    <div className="popup-section-label">Payment Summary</div>
                    <div className="popup-info-card-block">
                        <div className="popup-info-row">
                            <span className="field-label">Amount</span>
                            <span className="field-value text-dark">$150</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">Date</span>
                            <span className="field-value">10-02-2025</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">Status</span>
                            <span><span className="status-badge-indicator completed px-3 py-0"
                                style={{fontSize: "12px", minWidth: "auto"}}>Completed</span></span>
                        </div>
                    </div>

                    {/* <!-- Block Section 3: Payment Summary Methods --> */}
                    <div className="popup-section-label">Payment Summary</div>
                    <div className="popup-info-card-block">
                        <div className="popup-info-row">
                            <span className="field-label">Payment Method</span>
                            <span className="field-value">Visa **** 9283</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">Transaction ID</span>
                            <span className="field-value">TXN-823927</span>
                        </div>
                    </div>

                    {/* <!-- Block Section 4: Invoice Breakdown --> */}
                    <div className="popup-section-label">Invoice Breakdown</div>
                    <div className="popup-info-card-block">
                        <div className="popup-info-row">
                            <span className="field-label">Platform Fee</span>
                            <span className="field-value">$10</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">Net Earnings</span>
                            <span className="field-value text-dark">$140</span>
                        </div>
                    </div>

                    {/* <!-- Block Section 5: Timeline Activities Tracker --> */}
                    <div className="popup-section-label">Timeline</div>
                    <div className="popup-info-card-block">
                        <div className="popup-info-row">
                            <span className="field-label">1. Payment Initiated</span>
                            <span className="field-value">10-02-2025</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">2. Processing</span>
                            <span className="field-value">Completed</span>
                        </div>
                        <div className="popup-info-row">
                            <span className="field-label">3. Payment Success</span>
                            <span className="field-value">10-02-2025</span>
                        </div>
                    </div>

                    {/* <!-- Lower Footer CTA Actions Layout --> */}
                    <div className="popup-custom-footer-actions">
                        <button type="button" className="btn-popup-action-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn-popup-action-submit">Download Receipt</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentDetails