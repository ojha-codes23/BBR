import React from 'react'

const BankDetailsTab = () => {
  return (
    <div>
    <div className="bank-details-wrapper-container">

        {/* <!-- Main Entry Panel Container Map Verbatim to Bank-Details.png --> */}
        <main className="bank-details-master-card">

            <div className="bank-card-header-title">
                <i className="fa-solid fa-building-columns"></i> Add Bank
            </div>

            <form>
                {/* <!-- Row 1: Name Information --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">First Name</label>
                        <input type="text" className="custom-form-input-node" value="John" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Last Name</label>
                        <input type="text" className="custom-form-input-node" value="Doe" />
                    </div>
                </div>

                {/* <!-- Row 2: Contact Specifications --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Email</label>
                        <input type="email" className="custom-form-input-node"
                            value="john.doe@example.com" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Phone</label>
                        <input type="text" className="custom-form-input-node"
                            value="+1 (555) 123-4567" />
                    </div>
                </div>

                {/* <!-- Row 3: DOB & ID Configurations --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Date of Birth</label>
                        <div className="input-relative-glyph-wrapper">
                            <input type="text" className="custom-form-input-node"
                                value="12-12-2025" />
                            <i className="fa-regular fa-calendar-days"></i>
                        </div>
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">ID Type</label>
                        <div className="select-chevron-relative-wrapper">
                            <select className="custom-form-input-node">
                                <option selected>Passport</option>
                                <option>Driver's License</option>
                                <option>National ID</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 4: Personal Identifiers --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Personal Identification Number</label>
                        <input type="text" className="custom-form-input-node" value="A123456789" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">SSN (Last 4 Number)</label>
                        <input type="text" className="custom-form-input-node" value="4587" />
                    </div>
                </div>

                {/* <!-- Row 5: Address Core & Country Selection --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Address</label>
                        <input type="text" className="custom-form-input-node"
                            value="245 Green Valley Street" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Country</label>
                        <div className="select-chevron-relative-wrapper">
                            <select className="custom-form-input-node">
                                <option selected>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 6: State & City Select Grid --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">State</label>
                        <div className="select-chevron-relative-wrapper">
                            <select className="custom-form-input-node">
                                <option selected>California</option>
                                <option>New York</option>
                                <option>Texas</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">City</label>
                        <div className="select-chevron-relative-wrapper">
                            <select className="custom-form-input-node">
                                <option selected>Los Angeles</option>
                                <option>San Francisco</option>
                                <option>San Diego</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Row 7: Postal & Bank Name Inputs --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Postal Code</label>
                        <input type="text" className="custom-form-input-node" value="90001" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Bank Name</label>
                        <input type="text" className="custom-form-input-node"
                            value="Bank of America" />
                    </div>
                </div>

                {/* <!-- Row 8: Account Identity Numbers --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Account Holder Name</label>
                        <input type="text" className="custom-form-input-node" value="John Doe" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Bank Account Number</label>
                        <input type="text" className="custom-form-input-node" value="123456789012" />
                    </div>
                </div>

                {/* <!-- Row 9: Confirmations & Routing Lines --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Confirm Account Number</label>
                        <input type="text" className="custom-form-input-node" value="123456789012" />
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Routing Number</label>
                        <input type="text" className="custom-form-input-node" value="021000021" />
                    </div>
                </div>

                {/* <!-- Row 10: Proof Type Selection & Media Line Component --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Select Bank Proof Type</label>
                        <div className="select-chevron-relative-wrapper">
                            <select className="custom-form-input-node">
                                <option selected>Bank Statement</option>
                                <option>Void Check</option>
                                <option>Passbook Copy</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Bank Proof</label>
                        <div className="bank-proof-integration-flex">
                            <button type="button" className="btn-upload-trigger-square">
                                <i className="fa-solid fa-upload"></i>
                            </button>
                            <div className="uploaded-file-row-strip">
                                <div className="file-meta-flex-left">
                                    <i className="fa-regular fa-file-lines"></i>
                                    <span>bank_statement_march.pdf</span>
                                </div>
                                <button type="button" className="btn-remove-file-trash">
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Verification Document Master Drop Vault --> */}
                <div className="row mt-2">
                    <div className="col-12 custom-form-group">
                        <label className="custom-field-label">Verification Document</label>
                        <div className="drag-drop-vault-dash-panel">
                            <i className="fa-solid fa-upload upload-cloud-icon"></i>
                            <p className="main-prompt-text">Drag and drop files here, or <span
                                style={{ color: "var(--primary-blue)", fontWeight: "600" }}>click
                                to browse</span></p>
                            <p className="sub-extension-text">Supported: PDF, PNG, JPG</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Twin Document Attachments Grid Row Footer --> */}
                <div className="row">
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Front</label>
                        <div className="uploaded-file-row-strip">
                            <div className="file-meta-flex-left">
                                <i className="fa-regular fa-file-lines"></i>
                                <span>passport_front.jpg</span>
                            </div>
                            <button type="button" className="btn-remove-file-trash">
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 custom-form-group">
                        <label className="custom-field-label">Back</label>
                        <div className="uploaded-file-row-strip">
                            <div className="file-meta-flex-left">
                                <i className="fa-regular fa-file-lines"></i>
                                <span>passport_back.jpg</span>
                            </div>
                            <button type="button" className="btn-remove-file-trash">
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </main>

    </div>
</div>
  )
}

export default BankDetailsTab