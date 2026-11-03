import React, { useRef } from "react";
import toast from "react-hot-toast";
import { baseURL } from "../../../config/constant";
import useStudentProfile from "../../../hooks/user/useStudentProfile";
import { GrDocumentText } from "react-icons/gr";


// ✅ ACCEPT isEditing PROP
const DocumentsTab = ({ documents = [], photos = [], videos = [], isEditing = false }) => {
  const {
    saveStudentDocumentAsync,
    isUploadingStudentDocument,
    deleteStudentDocumentAsync,
    isDeletingStudentDocument,
    refetchStudentProfile,
  } = useStudentProfile();

  const fileInputRef = useRef(null);

  // --- UPLOAD LOGIC ---
  const handleFileUpload = async (file) => {
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    try {
      const response = await saveStudentDocumentAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Failed to upload file.");
        return;
      }

      toast.success(response?.message || "File uploaded successfully.");
      if (fileInputRef.current) fileInputRef.current.value = null;
      await refetchStudentProfile();

    } catch (error) {
      toast.error(
        error?.message || error?.response?.data?.message || "Unable to upload file."
      );
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    handleFileUpload(file);
  };

  // --- DRAG AND DROP LOGIC ---
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    if (isUploadingStudentDocument || !isEditing) return;
    const file = e.dataTransfer.files?.[0];
    handleFileUpload(file);
  };

  // --- DELETE LOGIC ---
  const handleDeleteDocument = async (documentId) => {
    const formData = new FormData();
    formData.append("document_id", documentId);

    try {
      const response = await deleteStudentDocumentAsync(formData);

      if (response?.success === false) {
        toast.error(response.message || "Failed to delete document.");
        return;
      }

      toast.success(response?.message || "Deleted successfully.");
      await refetchStudentProfile();

    } catch (error) {
      toast.error(
        error?.message || error?.response?.data?.message || "Unable to delete document."
      );
    }
  };

  // Common styles for the delete cross icon overlay
  const deleteIconStyle = {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    zIndex: 10,
  };

  return (
    <div className="tab-pane fade show active">
      <div className="pv-section-container">

        {/* ================= DOCUMENT UPLOAD SECTION (Only in Edit Mode) ================= */}
        {isEditing && (
          <div className="mp-document-upload-section">
            <div className="mp-upload-header d-flex align-items-center mb-3">
              <div className="mp-title-icon me-2" style={{ marginRight: "8px", display: "inline-flex" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006699" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="mp-upload-main-title h5 font-weight-bold mb-0 text-dark" style={{ fontSize: "18px" }}>
                Upload New File
              </h3>
            </div>

            <div
              className="mp-upload-dropzone-box"
              onClick={() => !isUploadingStudentDocument && fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={{ cursor: isUploadingStudentDocument ? "not-allowed" : "pointer", opacity: isUploadingStudentDocument ? 0.6 : 1 }}
            >
              <input
                type="file"
                id="mpProfileFileInput"
                ref={fileInputRef}
                className="d-none"
                accept=".pdf, .png, .jpg, .jpeg, .mp4, .mov, .avi, .mkv"
                onChange={handleFileChange}
                disabled={isUploadingStudentDocument}
              />

              <div className="mp-upload-content-wrapper text-center">
                <div className="mp-cloud-upload-icon mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                  </svg>
                </div>

                <p className="mp-upload-click-text mb-1 text-secondary" style={{ fontSize: "14px" }}>
                  {isUploadingStudentDocument ? (
                    <span className="text-primary" style={{ color: "#006699" }}>Uploading...</span>
                  ) : (
                    <>
                      Drag and drop files here, or{" "}
                      <span className="text-primary" style={{ color: "#006699", cursor: "pointer" }}>
                        click to browse
                      </span>
                    </>
                  )}
                </p>
                <p className="mp-upload-supported-formats-label text-muted mb-0" style={{ fontSize: "12px", color: "#a0aec0" }}>
                  Supported: PDF, PNG, JPG, MP4
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= UPLOADED DOCUMENTS LIST ================= */}
        <div className="mt-4 mb-4">
          {/* <h4 className="pv-sub-title">Uploaded Documents</h4> */}
          <div className="pv-section-header">
            {/* <img src="/images/user/super-user-dashboard/photos-videos.svg" alt="" /> */}
            <GrDocumentText style={{color: "#3f94b8"}}/>
            <h3>Uploaded Documents</h3>
          </div>
          {documents.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {documents.map((doc) => (
                <div key={doc.id} className="d-flex align-items-center justify-content-between p-3 border rounded">
                  <div>
                    <p className="pv-sub-title">{doc.original_name}</p>
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={`${baseURL}/${doc.file_path}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </a>
                    {/* ✅ Show delete button only in edit mode */}
                    {isEditing && (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteDocument(doc.id)}
                        disabled={isDeletingStudentDocument}
                      >
                        {isDeletingStudentDocument ? "Deleting..." : "Delete"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="gl-item-extra-muted-info">No documents available.</p>
          )}
        </div>

        {/* ================= PHOTOS & VIDEOS HEADER ================= */}
        <div className="pv-section-header">
          <img src="/images/user/super-user-dashboard/photos-videos.svg" alt="" />
          <h3>Photos & Videos</h3>
        </div>

        {/* ================= PHOTOS BLOCK ================= */}
        <div className="pv-sub-block">
          <h4 className="pv-sub-title">Photos</h4>
          {photos.length > 0 ? (
            <div className="pv-flex-row">
              {photos.map((photo) => (
                <div className="pv-media-item pv-photo-item" key={photo.id} style={{ position: "relative" }}>
                  <img src={`${baseURL}/${photo.file_path}`} alt={photo.original_name || "User photo"} />

                  {/* ✅ Show cross icon overlay only in edit mode */}
                  {isEditing && (
                    <button
                      type="button"
                      style={deleteIconStyle}
                      onClick={() => handleDeleteDocument(photo.id)}
                      disabled={isDeletingStudentDocument}
                      title="Delete Photo"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="gl-item-extra-muted-info">No photos available.</p>
          )}
        </div>

        {/* ================= VIDEOS BLOCK ================= */}
        {/* ================= VIDEOS BLOCK ================= */}
        <div className="pv-sub-block">
          <h4 className="pv-sub-title">Videos</h4>
          {videos.length > 0 ? (
            <div className="pv-flex-row">
              {videos.map((video) => (
                <div
                  className="pv-media-item pv-video-item"
                  key={video.id}
                  style={{
                    position: "relative",
                    backgroundColor: "#e2e8f0", // Clean gray background if video fails to load
                    borderRadius: "8px",
                    overflow: "hidden"
                  }}
                >
                  <a
                    href={`${baseURL}/${video.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "block", width: "100%", height: "100%" }}
                  >
                    {/* ✅ Use HTML5 video tag instead of img tag */}
                    <video
                      src={`${baseURL}/${video.file_path}#t=0.1`}
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        pointerEvents: "none" // Prevents clicking video controls
                      }}
                    />

                    {/* Play Icon Overlay */}
                    <div className="pv-play-overlay">
                      <img src="/images/user/super-user-dashboard/su-play-icon.svg" alt="Play" />
                    </div>
                  </a>

                  {/* Delete Icon (Only in Edit Mode) */}
                  {isEditing && (
                    <button
                      type="button"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "14px",
                        zIndex: 10,
                      }}
                      onClick={() => handleDeleteDocument(video.id)}
                      disabled={isDeletingStudentDocument}
                      title="Delete Video"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="gl-item-extra-muted-info">No videos available.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default DocumentsTab;