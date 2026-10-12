import React from 'react'
import UserSidebar from './UserSidebar'
import Dashboard from '../../../pages/user/Dashboard'
import NotificationDropDown from '../../user/NotificationDropDown'
import { Link } from 'react-router-dom'
import LogoutModal from '../../user/LogoutModal'

const UserHeader = () => {
    return (
        <>
         <header className="gl-header">
            <div className="gl-header-left">
              
                <button type="button" className="gl-sidebar-toggle sidebarToggleBtn">
                    <img src="/images/user/layout/super-user/header-toggle.svg" alt="Toggle"/>
                </button>
                <h1 className="gl-header-panel-title">Dashboard</h1>
            </div>

           
            <div className="gl-header-right">
              
                <div className="gl-header-search-box">
                    <img src="/images/user/layout/super-user/search-icon.svg" className="search-icon" alt="Toggle"/>
                    <input type="text" placeholder="Search..."/>
                </div>
                
         
                <button type="button" className="gl-action-item">
                    <img src="/images/user/layout/super-user/header-flag-icon.svg" alt="Language" className="gl-flag-icon"/>
                </button>

                    
                
                    <button type="button" className="gl-action-item gl-notification-trigger" style={{position: "relative"}}>
                        <img src="/images/user/layout/super-user/notification-icon.svg" alt="Notifications" className="gl-header-icon"/>
                    
                           <NotificationDropDown/>
                    </button>

             
                   <div className="profile-container" id="profileContainer">
   
                        <button className="profile-trigger" id="profileTrigger">
                       
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="User Avatar" className="avatar"/>
                            <i className="fa-solid fa-caret-down arrow-icon"></i>
                        </button>

                                    <div className="profile-dropdown">
                                        <Link to="/student/my-profile" className="dropdown-item item-profile">
                                            <i className="fa-regular fa-eye"></i>
                                            <span>User Profile</span>
                                        </Link>
                                        
                                        <div className="divider"></div>
                                        
                                        <a href="#" className="dropdown-item item-logout" data-bs-toggle="modal" data-bs-target="#confirmLogoutModal">
                                            <i className="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </div>
            </div>
         </header>  


        <LogoutModal/>

        </>
    )
}

export default UserHeader
