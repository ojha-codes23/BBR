import React from 'react'
import { Link } from 'react-router-dom'

const CalendarSyncModal = () => {
  return (
    <> 
      <div className="modal fade custom-target-modal" id="calendarSyncModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "580px" }}>
        <div className="modal-content style-modal-main-card">
            
            <Link to="#" className="close gl-modal-dismiss-anchor" aria-label="Close">
                <span aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </span>
            </Link>

            <div className="modal-body p-0 text-left">
                
                <h2 className="gl-calendar-main-title mb-2">Calendar Sync</h2>
                <p className="gl-calendar-sub-title mb-4">Connect your external calendars to sync your sessions automatically.</p>

                <div className="gl-sync-options-vertical-stack mb-4">
                    
                    <div className="gl-sync-row-item-card">
                        <div className="gl-platform-icon-box bbr-blue-theme-bg">
                           <img src="images/super-user-dashboard/solar_calendar-linear.svg" alt=""/>
                        </div>
                        <span className="gl-platform-label-title">BBR Calendar</span>
                    </div>

                    <div className="gl-sync-row-item-card">
                        <div className="gl-platform-icon-box bg-white">
                          <img src="images/super-user-dashboard/Google calendar.svg" alt=""/>
                        </div>
                        <span className="gl-platform-label-title">Google Calendar</span>
                    </div>

                    <div className="gl-sync-row-item-card">
                        <div className="gl-platform-icon-box outlook-tint-bg">
                         <img src="images/super-user-dashboard/Outlook.svg" alt=""/>
                        </div>
                        <span className="gl-platform-label-title">Microsoft Outlook</span>
                    </div>

                    <div className="gl-sync-row-item-card">
                        <div className="gl-platform-icon-box apple-neutral-grey-bg">
                            <div className="gl-apple-icon-inner-stack">
                                <span className="apple-top-day-text">Sunday</span>
                                <span className="apple-bottom-num-text">12</span>
                            </div>
                        </div>
                        <span className="gl-platform-label-title">Apple Calendar</span>
                    </div>

                </div>

                <div className="gl-calendar-action-footer mt-4">
                    <button type="button" className="btn gl-calendar-submit-pill-btn spec-blue-btn w-100 font-weight-bold py-3">
                        Done
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default CalendarSyncModal
