import React from 'react'

const NotificationQuitHour = () => {
  return (
    <>
      <div className="modal fade gl-custom-popup-wrapper" id="quietHoursModal" tabindex="-1" aria-labelledby="quietHoursModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content gl-popup-main-box">
            
            <div className="gl-popup-header-row">
                <div className="gl-popup-header-left">
                    <div className="gl-popup-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <path d="M18.5 2.5C19.3284 1.67157 20.6716 1.67157 21.5 2.5C22.3284 3.32843 22.3284 4.67157 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="gl-popup-title-block">
                        <h2 className="gl-popup-main-title" id="quietHoursModalLabel">Quiet Hours</h2>
                        <p className="gl-popup-subtitle">Set days & hours when you didn’t want to receive notifications</p>
                    </div>
                </div>
                <button type="button" className="gl-popup-close-trigger" data-bs-dismiss="modal" aria-label="Close">
                 <img src="/images/user/super-user-dashboard/popup-cross-icon.svg" alt=""/>
                </button>
            </div>

            <div className="modal-body gl-popup-core-body">
                
                <div className="gl-popup-presets-bar">
                    <button className="tm-time-widget-btn" type="button">
                    <span className="tm-label">Start & End Time</span>
                    <span className="tm-time-display">
                        <span className="tm-time-val">10:00 AM</span>
                        <span className="tm-divider">-</span>
                        <span className="tm-time-val">10:00 AM</span>
                    </span>
                    </button>
                    <button type="button" className="gl-popup-preset-btn">Apply Mon-Fri</button>
                    
                    <button type="button" className="gl-popup-preset-btn">Apply All Days</button>
                </div>

                <div className="gl-popup-matrix-box">
                    <div className="table-responsive">
                        <table className="table gl-popup-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>Days</th>
                                    <th style={{ width: '30%' }}>Start Time</th>
                                    <th style={{ width: '30%' }}>End Time</th>
                                    <th style={{ width: '15%', textAlign: 'center' }}>Enabled</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Sunday</td>
                                    <td>
                                        <div className="gl-popup-time-wrapper">
                                            <input type="text" className="gl-popup-time-input" value="10:00 AM"/>
                                            <span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="gl-popup-time-wrapper">
                                            <input type="text" className="gl-popup-time-input" value="10:00 PM"/>
                                            <span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <label className="gl-popup-checkbox-container">
                                            <input type="checkbox" checked/>
                                            <span className="gl-popup-checkmark"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Monday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Tuesday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Wednesday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Thursday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Friday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="/images/user/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                                <tr className="gl-popup-row-item">
                                    <td className="gl-popup-day-cell">Saturday</td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="images/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td><div className="gl-popup-time-wrapper"><input type="text" className="gl-popup-time-input" value="00:00"/><span className="gl-popup-time-icon"><img src="images/super-user-dashboard/popup-clock-icon.svg" alt=""/></span></div></td>
                                    <td className="text-center"><label className="gl-popup-checkbox-container"><input type="checkbox"/><span className="gl-popup-checkmark"></span></label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="modal-footer gl-popup-footer-row">
                <button type="button" className="gl-popup-btn-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="gl-popup-btn-save">Save Changes</button>
            </div>

        </div>
    </div>
</div>
    </>
  )
}

export default NotificationQuitHour
