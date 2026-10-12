import React from 'react'

const PaymentSetting = () => {
  return (
    <div className="modal fade" id="paymentSettingsModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog custom-popup-dialog">
        <div className="modal-content custom-popup-content">

            {/* <!-- Outside Floating Close Control Trigger --> */}
            <button type="button" className="modal-custom-close-btn" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* <!-- Heading Icon Info Row Block --> */}
            <div className="popup-main-heading-block">
                <div className="popup-title-icon-box">
                    <i className="fa-solid fa-gear"></i>
                </div>
                <h5>Payment Settings</h5>
            </div>

            {/* <!-- Settings Field Segment 1: Payment Method Selection --> */}
            <div className="popup-section-label">Payment Method</div>
            <div className="popup-select-input-wrapper">
                <select className="popup-select-custom-field">
                    <option selected disabled>Bank Transfer</option>
                    <option value="paypal">PayPal Account</option>
                    <option value="stripe">Stripe Gateway</option>
                </select>
            </div>

            {/* <!-- Settings Field Segment 2: Payout Schedule Selection --> */}
            <div className="popup-section-label">Payout Schedule</div>
            <div className="popup-select-input-wrapper">
                <select className="popup-select-custom-field">
                    <option selected disabled>Monthly</option>
                    <option value="weekly">Weekly Cycle</option>
                    <option value="biweekly">Bi-Weekly Cycle</option>
                </select>
            </div>

            {/* <!-- Lower Footer CTA Actions Layout --> */}
            <div className="popup-custom-footer-actions">
                <button type="button" className="btn-popup-action-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn-popup-action-submit">Save Settings</button>
            </div>

        </div>
    </div>
</div>
  )
}

export default PaymentSetting