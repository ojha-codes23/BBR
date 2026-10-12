import React from 'react'

const DocumentsTab = () => {
  return (
    <div>

    <div className="doc-verify-card">
        <div className="doc-verify-header">
            <svg className="doc-verify-header-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="doc-verify-title">Documents & Verification</h2>
        </div>

        <div className="doc-verify-upload-zone">
            <input type="file" id="doc-verify-file-input" className="doc-verify-file-input"
                accept=".pdf,.png,.jpg" multiple />
            <label for="doc-verify-file-input" className="doc-verify-upload-label">
                <svg className="doc-verify-upload-icon" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="doc-verify-upload-text">Drag and drop files here, or <span
                    className="doc-verify-browse">click to browse</span></span>
                <span className="doc-verify-supported-formats">Supported: PDF, PNG, JPG</span>
            </label>
        </div>

        <div className="doc-verify-files-list">

            <div className="doc-verify-file-item">
                <div className="doc-verify-file-info-block">
                    <div className="doc-verify-doc-icon-box">
                        <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="doc-verify-icon-label">DOC</span>
                    </div>
                    <div className="doc-verify-file-details">
                        <div className="doc-verify-file-name">License.pdf</div>
                        <div className="doc-verify-file-meta">License • 2.4 MB • Uploaded
                            01-08-2024</div>
                    </div>
                </div>
                <div className="doc-verify-actions">
                    <button type="button" className="doc-verify-btn doc-verify-download"
                        title="Download">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                    <button type="button" className="doc-verify-btn doc-verify-delete"
                        title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="doc-verify-file-item">
                <div className="doc-verify-file-info-block">
                    <div className="doc-verify-doc-icon-box">
                        <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="doc-verify-icon-label">DOC</span>
                    </div>
                    <div className="doc-verify-file-details">
                        <div className="doc-verify-file-name">PhD_Certificate.pdf</div>
                        <div className="doc-verify-file-meta">Certificate • 1.8 MB • Uploaded
                            01-08-2024</div>
                    </div>
                </div>
                <div className="doc-verify-actions">
                    <button type="button" className="doc-verify-btn doc-verify-download"
                        title="Download">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                    <button type="button" className="doc-verify-btn doc-verify-delete"
                        title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="doc-verify-file-item">
                <div className="doc-verify-file-info-block">
                    <div className="doc-verify-doc-icon-box">
                        <svg className="doc-verify-doc-svg" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="doc-verify-icon-label">DOC</span>
                    </div>
                    <div className="doc-verify-file-details">
                        <div className="doc-verify-file-name">Background_Check.pdf</div>
                        <div className="doc-verify-file-meta">Verification • 0.5 MB • Uploaded
                            01-08-2024</div>
                    </div>
                </div>
                <div className="doc-verify-actions">
                    <button type="button" className="doc-verify-btn doc-verify-download"
                        title="Download">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                    <button type="button" className="doc-verify-btn doc-verify-delete"
                        title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default DocumentsTab