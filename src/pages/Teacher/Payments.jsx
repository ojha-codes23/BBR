import React from 'react'
import PaymentDetails from '../../components/teacher/PaymentDetails'
import PaymentSetting from '../../components/teacher/PaymentSetting'

const Payments = () => {
    return (
        <>
            <div class="dashboard-container">

                {/* <!-- Top Grid Screen Header Layout Component --> */}
                <header class="dashboard-header">
                    <div class="header-titles">
                        <h1>Payments</h1>
                        <p>Manage your earnings and payment settings</p>
                    </div>
                    <div class="header-actions">
                        <button class="btn-dropdown-filter">This Month <i
                            class="fa-solid fa-caret-down ms-2"></i></button>
                        {/* <!-- TARGET ACCORDING TO REQUIREMENTS: Opens Payment Settings Modal --> */}
                        <button class="btn-payment-settings" data-bs-toggle="modal"
                            data-bs-target="#paymentSettingsModal">
                            <i class="fa-solid fa-gear"></i> Payment Settings
                        </button>
                    </div>
                </header>

                {/* <!-- Metrics Cards Row Overview Segment --> */}
                <section class="stats-grid">
                    {/* <!-- Card 1: Total Earnings --> */}
                    <div class="stat-card">
                        <div class="stat-card-title-row">
                            <div class="stat-icon-wrapper"><i class="fa-solid fa-dollar-sign"></i></div>
                            <span>Total Earnings</span>
                        </div>
                        <div class="stat-number">$2,450</div>
                        <div class="stat-subtext"><span class="percentage">+18%</span> vs last month</div>
                    </div>

                    {/* <!-- Card 2: Pending --> */}
                    <div class="stat-card">
                        <div class="stat-card-title-row">
                            <div class="stat-icon-wrapper"><i class="fa-regular fa-clock"></i></div>
                            <span>Pending</span>
                        </div>
                        <div class="stat-number">$375</div>
                        <div class="stat-subtext">2 transactions</div>
                    </div>

                    {/* <!-- Card 3: Average Rate --> */}
                    <div class="stat-card">
                        <div class="stat-card-title-row">
                            <div class="stat-icon-wrapper"><i class="fa-solid fa-chart-line"></i></div>
                            <span>Average Rate</span>
                        </div>
                        <div class="stat-number">$65/hr</div>
                        <div class="stat-subtext">&nbsp;</div>
                    </div>
                </section>

                {/* <!-- Main Workspace Tabbed Panel Section --> */}
                <main class="main-data-panel">

                    {/* <!-- Tab Triggers Control Navigation Interface Group --> */}
                    <ul class="nav nav-tabs custom-tabs-nav" id="paymentDataTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link m-0 active" id="transactions-tab" data-bs-toggle="tab"
                                data-bs-target="#transactions-pane" type="button" role="tab"
                                aria-controls="transactions-pane" aria-selected="true">
                                <i class="fa-regular fa-clock"></i> Recent Transactions
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link m-0" id="additional-hours-tab" data-bs-toggle="tab"
                                data-bs-target="#additional-hours-pane" type="button" role="tab"
                                aria-controls="additional-hours-pane" aria-selected="false">
                                <i class="fa-regular fa-comment"></i> Additional Hours
                            </button>
                        </li>
                    </ul>

                    {/* <!-- Unified Tab View Windows Content Holder --> */}
                    <div class="tab-content" id="paymentTabsContent">

                        {/* <!-- Window 1 Pane: Recent Transactions Table --> */}
                        <div class="tab-pane fade show active" id="transactions-pane" role="tabpanel"
                            aria-labelledby="transactions-tab" tabindex="0">
                            <div class="table-responsive-custom">
                                <table class="table custom-dashboard-table align-middle">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "60px" }}>#</th>
                                            <th>User Name</th>
                                            <th>Service</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th style={{ width: "120px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                                                        alt="James Chen" />
                                                    <span>James Chen</span>
                                                </div>
                                            </td>
                                            <td>Career Guidance</td>
                                            <td>$150</td>
                                            <td><span class="status-badge-indicator completed">Completed</span></td>
                                            <td>10-02-2025</td>
                                            {/* <!-- TARGET ACCORDING TO REQUIREMENTS: Opens Payment Details Modal --> */}
                                            <td><button class="btn-table-action-view" data-bs-toggle="modal"
                                                data-bs-target="#paymentDetailsModal"><i
                                                    class="fa-regular fa-eye"></i>
                                                View</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                                                        alt="Vincent Cervantes" />
                                                    <span>Vincent Cervantes</span>
                                                </div>
                                            </td>
                                            <td>One-on-One Coaching</td>
                                            <td>$100</td>
                                            <td><span class="status-badge-indicator pending">Pending</span></td>
                                            <td>10-02-2025</td>
                                            <td><button class="btn-table-action-view" data-bs-toggle="modal"
                                                data-bs-target="#paymentDetailsModal"><i
                                                    class="fa-regular fa-eye"></i>
                                                View</button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                                                        alt="Devin Harris" />
                                                    <span>Devin Harris</span>
                                                </div>
                                            </td>
                                            <td>Group Coaching</td>
                                            <td>$250</td>
                                            <td><span class="status-badge-indicator completed">Completed</span></td>
                                            <td>10-02-2025</td>
                                            <td><button class="btn-table-action-view" data-bs-toggle="modal"
                                                data-bs-target="#paymentDetailsModal"><i
                                                    class="fa-regular fa-eye"></i>
                                                View</button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100"
                                                        alt="Elmer Herrera" />
                                                    <span>Elmer Herrera</span>
                                                </div>
                                            </td>
                                            <td>Project Support</td>
                                            <td>$125</td>
                                            <td><span class="status-badge-indicator failed">Failed</span></td>
                                            <td>10-02-2025</td>
                                            <td><button class="btn-table-action-view" data-bs-toggle="modal"
                                                data-bs-target="#paymentDetailsModal"><i
                                                    class="fa-regular fa-eye"></i>
                                                View</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <!-- Window 2 Pane: Additional Hours Table --> */}
                        <div class="tab-pane fade" id="additional-hours-pane" role="tabpanel"
                            aria-labelledby="additional-hours-tab" tabindex="0">
                            <div class="table-responsive-custom">
                                <table class="table custom-dashboard-table align-middle">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "60px" }}>#</th>
                                            <th>Teacher Name</th>
                                            <th>Name</th>
                                            <th>Service</th>
                                            <th>Hours</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th style={{ width: "80px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- Row 1 --> */}
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                                                        alt="Nolan Levin" />
                                                    <span>Nolan Levin</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                                                        alt="Ahmad Kenter" />
                                                    <span>Ahmad Kenter</span>
                                                </div>
                                            </td>
                                            <td>Skill Development Events</td>
                                            <td><strong>4.5h</strong> / 5h</td>
                                            <td>10-02-2025</td>
                                            <td><span class="status-badge-indicator approved">Approved</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn-table-three-dot" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        ⋮
                                                    </button>
                                                    <ul
                                                        class="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                                        <li><a class="dropdown-item" href="#"><i
                                                            class="fa-regular fa-file-lines text-muted"></i>
                                                            Send
                                                            Invoice</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 2 --> */}
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                                                        alt="Ryan Workman" />
                                                    <span>Ryan Workman</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=100"
                                                        alt="Jaylon Schleifer" />
                                                    <span>Jaylon Schleifer</span>
                                                </div>
                                            </td>
                                            <td>One-on-One Coaching</td>
                                            <td><strong>3h</strong> / 3h</td>
                                            <td>10-02-2025</td>
                                            <td><span class="status-badge-indicator pending">Pending</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn-table-three-dot" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        ⋮
                                                    </button>
                                                    <ul
                                                        class="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                                        <li><a class="dropdown-item" href="#"><i
                                                            class="fa-regular fa-file-lines text-muted"></i>
                                                            Send
                                                            Invoice</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 3 --> */}
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100"
                                                        alt="Alfredo Dorwart" />
                                                    <span>Alfredo Dorwart</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=100"
                                                        alt="Alfonso Lipshutz" />
                                                    <span>Alfonso Lipshutz</span>
                                                </div>
                                            </td>
                                            <td>Group Coaching</td>
                                            <td><strong>4h</strong> / 4h</td>
                                            <td>10-02-2025</td>
                                            <td><span class="status-badge-indicator pending">Pending</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn-table-three-dot" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        ⋮
                                                    </button>
                                                    <ul
                                                        class="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                                        <li><a class="dropdown-item" href="#"><i
                                                            class="fa-regular fa-file-lines text-muted"></i>
                                                            Send
                                                            Invoice</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 4 --> */}
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100"
                                                        alt="Miracle Bator" />
                                                    <span>Miracle Bator</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="cell-profile-identity">
                                                    <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=100"
                                                        alt="Emery Mango" />
                                                    <span>Emery Mango</span>
                                                </div>
                                            </td>
                                            <td>Project Support</td>
                                            <td><strong>2h</strong> / 2h</td>
                                            <td>10-02-2025</td>
                                            <td><span class="status-badge-indicator approved">Approved</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn-table-three-dot" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        ⋮
                                                    </button>
                                                    <ul
                                                        class="dropdown-menu dropdown-menu-end custom-action-dropdown-menu">
                                                        <li><a class="dropdown-item" href="#"><i
                                                            class="fa-regular fa-file-lines text-muted"></i>
                                                            Send
                                                            Invoice</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    {/* <!-- End of Tab Content --> */}

                    {/* <!-- Pagination Panel Footer Controls Block --> */}
                    <footer class="table-pagination-panel">
                        <div class="pagination-left-select-block">
                            <span>Show</span>
                            <select class="select-show-entries">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <span>Showing 1-4 from 50 results</span>
                        </div>

                        <ul class="custom-pagination-controls">
                            <li><a href="#" class="pagination-btn-nav disabled">Prev</a></li>
                            <li><a href="#" class="pagination-page-circle active">1</a></li>
                            <li><a href="#" class="pagination-page-circle">2</a></li>
                            <li><a href="#" class="pagination-page-circle">3</a></li>
                            <li><span class="text-muted px-1">...</span></li>
                            <li><a href="#" class="pagination-page-circle">10</a></li>
                            <li><a href="#" class="pagination-btn-nav next-active">Next</a></li>
                        </ul>
                    </footer>

                </main>

            </div>

            <PaymentDetails />
            <PaymentSetting />

        </>
    )
}

export default Payments