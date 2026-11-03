import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import useProfile from "../../hooks/teacher/useProfile";

const UploadDocumentModal = ({
  show,
  onClose,
  onSuccess,
  onUpload,
  isLoading = false,
  documentTypes = [],
}) => {
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Directly use the document upload mutation from useProfile hook
  const { DocumenteUploadTabs, isDocumentUploading } = useProfile();
  const isSubmitting = isLoading || isDocumentUploading;

  useEffect(() => {
    if (show) {
      setSelectedFile(null);
      if (documentTypes && documentTypes.length > 0) {
        const firstVal =
          typeof documentTypes[0] === "object"
            ? documentTypes[0].value
            : documentTypes[0];
        setDocumentType(firstVal || "");
      } else {
        setDocumentType("");
      }
      setIsDragging(false);
    }
  }, [show, documentTypes]);

  if (!show) {
    return null;
  }

  const handleSelectFile = (file) => {
    if (!file) return;

    const validExtensions = ["pdf", "png", "jpg", "jpeg"];
    const ext = file.name.split(".").pop().toLowerCase();
    if (!validExtensions.includes(ext)) {
      toast.error(`"${file.name}" is not supported. Please select PDF, PNG, or JPG.`);
      return;
    }

    // Max 5MB check as required by API
    if (file.size > 5 * 1024 * 1024) {
      toast.error(`File size exceeds maximum allowed limit (5MB).`);
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleSelectFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!documentType) {
      toast.error("Please select a document type");
      return;
    }

    if (!selectedFile) {
      toast.error("Please select a document file to upload");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("documentType", documentType);
      formData.append("file", selectedFile);

      const res = await DocumenteUploadTabs(formData);
      toast.success("Document uploaded successfully!");

      if (onSuccess) {
        onSuccess(res?.data || res);
      }
      if (onUpload) {
        onUpload(res?.data || res);
      }
      if (onClose) {
        onClose();
      }
    } catch (err) {
      console.error("Document upload failed:", err);
      const errMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to upload document";
      toast.error(errMsg);
    }
  };

  return (
    <div
      className="modal fade show"
      id="uploadDocumentModal"
      tabIndex="-1"
      aria-hidden="true"
      style={{
        display: "block",
        backgroundColor: "rgba(16, 24, 40, 0.6)",
        zIndex: 1055,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting && onClose) {
          onClose();
        }
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div
          className="modal-content popup-modal-container-canvas"
          style={{
            borderRadius: "24px",
            border: "none",
            padding: "36px",
            boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.16)",
            position: "relative",
            backgroundColor: "#ffffff",
          }}
        >
          {/* External Floating Close Button */}
          <button
            type="button"
            className="modal-external-floating-close"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Header */}
          <div
            className="popup-header-row-flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              className="popup-avatar-icon-square"
              style={{
                width: "48px",
                height: "48px",
                background:
                  "linear-gradient(95.74deg, #004c6c -19.77%, #0094d2 119.43%)",
                color: "#ffffff",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <h3
              className="popup-header-title-text"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#101828",
                margin: 0,
              }}
            >
              Upload Document
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Document Type Dropdown */}
            <div className="mb-4">
              <label
                className="preference-field-label"
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#101828",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Document Type
              </label>
              <div
                className="select-chevron-wrapper"
                style={{ position: "relative" }}
              >
                <select
                  className="custom-select-input-node"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  disabled={isLoading || documentTypes.length === 0}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #D0D5DD",
                    backgroundColor: "#ffffff",
                    color: "#101828",
                    fontSize: "14px",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  {documentTypes.length === 0 ? (
                    <option value="" disabled>
                      No document types available
                    </option>
                  ) : (
                    documentTypes.map((type, idx) => {
                      const val = typeof type === "object" ? type.value : type;
                      const label = typeof type === "object" ? type.label : type;
                      return (
                        <option key={val || idx} value={val}>
                          {label}
                        </option>
                      );
                    })
                  )}
                </select>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#0077b6",
                    pointerEvents: "none",
                    fontSize: "14px",
                  }}
                ></i>
              </div>
            </div>

            {/* Drag and Drop Zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: isDragging ? "2px dashed #0284c7" : "1.5px dashed #D0D5DD",
                borderRadius: "16px",
                padding: "36px 20px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragging ? "#f0f9ff" : "#ffffff",
                transition: "all 0.2s ease",
                marginBottom: "24px",
              }}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleSelectFile(e.target.files[0]);
                    e.target.value = "";
                  }
                }}
                accept=".pdf,.png,.jpg,.jpeg"
                style={{ display: "none" }}
              />
              <div style={{ marginBottom: "12px" }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#98A2B3"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#475467",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}
              >
                Drag and drop files here, or click to browse
              </div>
              <div style={{ fontSize: "12px", color: "#98A2B3" }}>
                Supported: PDF, PNG, JPG
              </div>
            </div>

            {/* Selected Files List */}
            {selectedFile && (
              <div className="mb-4">
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#101828",
                    marginBottom: "12px",
                    display: "block",
                  }}
                >
                  Selected Files
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    backgroundColor: "#F9FAFB",
                    borderRadius: "12px",
                    border: "1px solid #EAECF0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="fa-regular fa-file-lines"
                      style={{
                        color: "#0284c7",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    ></i>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#344054",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {selectedFile.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFile(null);
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#FEE4E2",
                      color: "#D92D20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "background-color 0.15s ease",
                    }}
                    title="Remove file"
                  >
                    <i
                      className="fa-regular fa-trash-can"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </button>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                style={{
                  background: "none",
                  border: "none",
                  color: "#344054",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: "8px 16px",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !selectedFile}
                style={{
                  background:
                    "linear-gradient(95.74deg, #004c6c -19.77%, #0094d2 119.43%)",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: "14px",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: !selectedFile || isSubmitting ? "not-allowed" : "pointer",
                  opacity: !selectedFile || isSubmitting ? 0.6 : 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "opacity 0.2s ease",
                }}
              >
                {isSubmitting ? "Uploading..." : `Upload (${selectedFile ? 1 : 0})`}
                {!isSubmitting && (
                  <i className="fa-solid fa-arrow-right"></i>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
