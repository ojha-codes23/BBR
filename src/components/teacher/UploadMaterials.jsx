import React from 'react'

const UploadMaterials = () => {
  return (
    <div className="modal fade" id="uploadMaterialsModal" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "650px"}}>
        <div className="modal-content"
            style={{border: "none", borderRadius: "24px", boxShadow: "0px 8px 32px rgba(16, 24, 40, 0.08)", position: "relative", background: "#ffffff"}}>

            <button type="button" className="glnc-modal-outside-close" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
            </button>

            <div className="modal-body" style={{padding: "36px"}}>

                <div style={{display: "flex", alignItems: "flex-start", marginBottom: "24px"}}>
                    <div className="glnc-um-icon-box">
                        <svg viewBox="0 0 24 24"
                            style={{width: "22px", height: "22px", fill: "none", stroke: "#ffffff", strokeWidth: "2"}}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                    </div>
                    <div>
                        <h4 style={{margin: "0", fontSize: "20px", fontWeight: "600", color: "#1a1a1a"}}>Upload Materials
                        </h4>
                        <p style={{margin: "4px 0 0 0", fontSize: "15px", color: "#667085"}}>Upload materials for: <strong
                                style={{color: "#1a1a1a", fontWeight: "600"}}>College Application Workshop</strong></p>
                    </div>
                </div>

                <input type="file" id="glnc-file-input" multiple style={{display: "none"}} />

                <div className="glnc-um-drag-drop-zone" id="glnc-drop-zone">
                    <div style={{marginBottom: "12px", display: "inline-block"}}>
                        <svg viewBox="0 0 24 24"
                            style={{width: "32px", height: "32px", stroke: "#999999", strokeWidth: "1.5", fill: "none"}}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                    </div>
                    <p style={{fontSize: "14px", color: "#999999", margin: "0", fontWeight: "500"}}>Drag and drop files
                        here, or click to browse</p>
                </div>

                <h5 style={{fontSize: "14px", fontWeight: "600", color: "#1a1a1a", margin: "0 0 12px 0"}}>Selected Files
                </h5>

                <div id="glnc-files-container"
                    style={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px"}}>
                    <div className="glnc-um-file-item" data-filename="Security_Assessment_Framework.pdf">
                        <div
                            style={{display: "flex", alignItems: "center", fontSize: "14px", color: "#333333", fontWeight: "500"}}>
                            <svg viewBox="0 0 24 24"
                                style={{width: "16px", height: "16px", stroke: "#666666", strokeWidth: "2", fill: "none", marginRight: "12px"}}>
                                <path
                                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>
                            Security_Assessment_Framework.pdf
                        </div>
                        <button className="glnc-um-delete-btn" onclick="removeUMFile(this)">
                            <svg viewBox="0 0 24 24"
                                style={{width: "16px", height: "16px", fill: "none", stroke: "#d9383a", strokeWidth: "2"}}>
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <div className="glnc-um-file-item" data-filename="Implementation_Checklist.pdf">
                        <div
                            style={{display: "flex", alignItems: "center", fontSize: "14px", color: "#333333", fontWeight: "500"}}>
                            <svg viewBox="0 0 24 24"
                                style={{width: "16px", height: "16px", stroke: "#666666", strokeWidth: "2", fill: "none", marginRight: "12px"}}>
                                <path
                                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>
                            Implementation_Checklist.pdf
                        </div>
                        <button className="glnc-um-delete-btn" onclick="removeUMFile(this)">
                            <svg viewBox="0 0 24 24"
                                style={{width: "16px", height: "16px", fill: "none", stroke: "#d9383a", strokeWidth: "2"}}>
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "24px"}}>
                    <button type="button"
                        style={{background: "transparent", border: "none", fontSize: "14px", fontWeight: "600", color: "#4a4a4a"}}
                        data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="glnc-btn-popup-upload" id="glnc-upload-submit-btn">
                        Upload<span id="glnc-file-count">(2)</span>
                        <svg viewBox="0 0 24 24"
                            style={{width: "16px", height: "16px", stroke: "#ffffff", strokeWidth: "2", fill: "none"}}>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default UploadMaterials