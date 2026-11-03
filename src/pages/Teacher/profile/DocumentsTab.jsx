import React, { useState } from "react";
import toast from "react-hot-toast";
import useCommon from "../../../hooks/teacher/useCommon";
import useProfile from "../../../hooks/teacher/useProfile";
import UploadDocumentModal from "../../../components/teacher/UploadDocumentModal";

const DocumentsTab = ({
  isEditing: parentIsEditing,
  setIsEditing: parentSetIsEditing,
}) => {
  // console.log(parentIsEditing, "parentIsEditingparentIsEditing");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // Query for documents tab data
  const { profileData, isPendingProfile, refetchProfile } = useCommon({
    tabs: "documents",
  });

  // Profile hook actions for delete
  const { DeleteDocs, isDeleteDocs } = useProfile();

  // Extract documents and documentTypes from API
  const resData = profileData?.data || profileData;
  const details = resData?.details || resData?.user || resData || {};
  const documents = Array.isArray(details?.documents) ? details.documents : [];
  const documentTypes = Array.isArray(details?.documentTypes)
    ? details.documentTypes
    : [];

  // Delete Document Handler ({ documentId })
  const handleDeleteDocument = async (documentId) => {
    if (!documentId) return;

    try {
      setDeletingId(documentId);
      await DeleteDocs({ documentId });
      toast.success("Document deleted successfully!");
      refetchProfile();
    } catch (err) {
      console.error("Document delete failed:", err);
      const errMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to delete document";
      toast.error(errMsg);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="documents-tab-wrapper">
      <div
        className="doc-verify-card"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          border: "1px solid #EAECF0",
          padding: "32px",
          boxShadow: "0 1px 3px rgba(16, 24, 40, 0.05)",
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0086C9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#101828",
                  margin: 0,
                }}
              >
                Documents & Verification
              </h2>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#667085",
                margin: "6px 0 0 0",
              }}
            >
              Upload documents like License, certifications, and Background
              check files.
            </p>
          </div>

          {/* Upload Document Trigger Button */}
          <button
            type="button"
            disabled={!parentIsEditing}
            onClick={() => setShowUploadModal(true)}
            style={{
              backgroundColor: "#004C6C",
              backgroundImage:
                "linear-gradient(95.74deg, #004c6c -19.77%, #0094d2 119.43%)",
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "14px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              boxShadow: "0 1px 2px rgba(16, 24, 40, 0.05)",
              transition: "opacity 0.15s ease",
              opacity: !parentIsEditing ? 0.7 : 1,
            }}
          >
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            Upload Document
          </button>
        </div>

        {/* Documents Content */}
        {isPendingProfile ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading documents...</span>
            </div>
          </div>
        ) : documents.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "48px 16px",
              backgroundColor: "#F9FAFB",
              borderRadius: "16px",
              border: "1px dashed #EAECF0",
            }}
          >
            <i
              className="fa-regular fa-file-lines"
              style={{
                fontSize: "36px",
                color: "#98A2B3",
                marginBottom: "12px",
                display: "block",
              }}
            ></i>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#344054",
              }}
            >
              not doucment found
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#667085",
                marginTop: "4px",
              }}
            >
              Click "Upload Document" above to upload your documents.
            </p>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {documents.map((doc, idx) => (
              <div
                key={doc.documentId || idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  backgroundColor: "#F8FAFC",
                  borderRadius: "16px",
                  border: "1px solid #EAECF0",
                  transition: "box-shadow 0.2s ease",
                }}
              >
                {/* Left: Icon Badge & Details */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#006699",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        lineHeight: 1,
                        marginTop: "2px",
                      }}
                    >
                      DOC
                    </span>
                  </div>

                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#101828",
                        marginBottom: "3px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {doc.fileName}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#98A2B3",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {doc.category ? `${doc.category} • ` : ""}
                      {doc.fileSize ? `${doc.fileSize} • ` : ""}
                      Uploaded {doc.uploadedDate || "Recently"}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexShrink: 0,
                  }}
                >
                  {/* Download Action */}
                  <button
                    type="button"
                    title="Download"
                    disabled={!parentIsEditing}
                    onClick={() => {
                      if (doc.fileUrl) {
                        window.open(doc.fileUrl, "_blank");
                      } else {
                        toast.info(
                          "No download link available for this document"
                        );
                      }
                    }}
                    style={{
                      width: "34px",
                      height: "34px",
                      background: "transparent",
                      border: "none",
                      color: "#0284c7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>

                  {/* Delete Cross Action */}
                  {doc.canDelete !== false && (
                    <button
                      type="button"
                      title="Delete"
                      disabled={
                        !parentIsEditing ||
                        (isDeleteDocs && deletingId === doc.documentId)
                      }
                      onClick={() => handleDeleteDocument(doc.documentId)}
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#fee4e2",
                        border: "none",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor:
                          isDeleteDocs && deletingId === doc.documentId
                            ? "not-allowed"
                            : "pointer",
                        opacity:
                          isDeleteDocs && deletingId === doc.documentId
                            ? 0.6
                            : 1,
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      {isDeleteDocs && deletingId === doc.documentId ? (
                        <span
                          className="spinner-border spinner-border-sm text-danger"
                          style={{ width: "13px", height: "13px" }}
                        ></span>
                      ) : (
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#d92d20", fontSize: "14px" }}
                        ></i>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Document Modal */}
      <UploadDocumentModal
        show={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        documentTypes={documentTypes}
        onSuccess={refetchProfile}
      />
    </div>
  );
};

export default DocumentsTab;
