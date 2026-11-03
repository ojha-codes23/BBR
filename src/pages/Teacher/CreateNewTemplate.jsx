import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useService from "../../hooks/teacher/useService";

// Supported field / question types definition matching form-builder.js
const QUESTION_TYPES = {
    short: { label: "Short Answer", icon: "bi bi-card-text" },
    long: { label: "Long Answer", icon: "bi bi-textarea-resize" },
    yesno: { label: "Yes/No", icon: "bi bi-toggle-on" },
    multiple_choice: {
        label: "Multiple Choice",
        icon: "bi bi-ui-radios",
        opts: true,
    },
    checkboxes: { label: "Checkboxes", icon: "bi bi-ui-checks", opts: true },
    dropdown: { label: "Dropdown", icon: "bi bi-menu-button-wide", opts: true },
    number: { label: "Number", icon: "bi bi-123" },
    date: { label: "Date", icon: "bi bi-calendar-date" },
    rating: { label: "Rating Scale", icon: "bi bi-star" },
    multi_text: { label: "Add Rows (+)", icon: "bi bi-plus-square" },
    signature: { label: "Signature (Draw)", icon: "bi bi-pen" },
    file: { label: "File Upload", icon: "bi bi-upload" },
};

const CreateNewTemplate = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { templatDetails, createTemplate, isCreateTemplatePending } =
        useService();

    const templateId = searchParams.get("templateId") || searchParams.get("id");
    const typeParam = searchParams.get("type") || "sow";
    const isEditMode = Boolean(templateId);

    // Template Master Fields
    const [templateName, setTemplateName] = useState("");
    const [templateType, setTemplateType] = useState(typeParam);
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [version, setVersion] = useState("");
    const [tags, setTags] = useState([]);

    // Builder Fields / Questions
    const [fields, setFields] = useState([]);
    const [openCardIds, setOpenCardIds] = useState(new Set());
    const [isLoading, setIsLoading] = useState(false);

    // Preview Drawer State
    const [showPreview, setShowPreview] = useState(false);
    const [previewAnswers, setPreviewAnswers] = useState({});

    // Helper to generate unique ID
    const generateUid = () =>
        `field_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Default option generator
    const createOption = (num) => ({
        id: `opt_${Date.now()}_${num}`,
        label: `Option ${num}`,
    });

    // Load Template Details when in Edit Mode
    useEffect(() => {
        if (!templateId) {
            // Default initial field for create mode if empty
            setFields([
                {
                    id: generateUid(),
                    type: "short",
                    text: "",
                    desc: "",
                    required: false,
                    dep: null,
                    options: [],
                    order: 1,
                    _new: true,
                },
            ]);
            return;
        }

        let isMounted = true;
        const fetchDetails = async () => {
            setIsLoading(true);
            try {
                const res = await templatDetails({ templateId });
                if (!isMounted) return;

                if (res?.success || res?.code === 200 || res?.data) {
                    const tData = res.data || res;
                    setTemplateName(tData.templateName || tData.name || "");
                    setTemplateType(tData.type || tData.templateType || typeParam || "sow");
                    setDescription(tData.description || "");
                    setStatus(tData.status || "active");
                    setVersion(tData.version || "");
                    if (Array.isArray(tData.tags)) {
                        setTags(tData.tags);
                    }

                    if (Array.isArray(tData.fields) && tData.fields.length > 0) {
                        const formattedFields = tData.fields.map((f, idx) => ({
                            id: f.id || `f_${idx + 1}`,
                            type: f.type || "short",
                            text: f.text || "",
                            desc: f.desc || "",
                            required: Boolean(f.required),
                            dep: f.dep || null,
                            options: Array.isArray(f.options)
                                ? f.options
                                : QUESTION_TYPES[f.type]?.opts
                                    ? [createOption(1), createOption(2)]
                                    : [],
                            min: f.min ?? (f.type === "rating" ? 1 : undefined),
                            max: f.max ?? (f.type === "rating" ? 5 : f.type === "multi_text" ? 5 : undefined),
                            order: f.order || idx + 1,
                            _new: false,
                        }));
                        setFields(formattedFields);
                    }
                } else {
                    toast.error(res?.message || "Failed to load template details.");
                }
            } catch (err) {
                if (!isMounted) return;
                console.error("Failed to fetch template details:", err);
                toast.error(
                    err?.response?.data?.message || "Failed to load template details."
                );
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchDetails();

        return () => {
            isMounted = false;
        };
    }, [templateId, templatDetails, typeParam]);

    // Card expansion toggle
    const toggleCard = (qId) => {
        setOpenCardIds((prev) => {
            const next = new Set(prev);
            if (next.has(qId)) {
                next.delete(qId);
            } else {
                next.add(qId);
            }
            return next;
        });
    };

    // Add a new question of specified type
    const handleAddQuestion = (type) => {
        const newQ = {
            id: generateUid(),
            type,
            text: "",
            desc: "",
            required: false,
            dep: null,
            options: QUESTION_TYPES[type]?.opts
                ? [createOption(1), createOption(2)]
                : [],
            min: type === "rating" ? 1 : undefined,
            max: type === "rating" ? 5 : type === "multi_text" ? 5 : undefined,
            order: fields.length + 1,
            _new: true,
        };
        setFields((prev) => [...prev, newQ]);
        setOpenCardIds((prev) => new Set([...prev, newQ.id]));
    };

    // Update question attribute
    const handleUpdateQuestion = (qId, fieldKey, val) => {
        setFields((prev) =>
            prev.map((q) => (q.id === qId ? { ...q, [fieldKey]: val } : q))
        );
    };

    // Delete question
    const handleDeleteQuestion = (qId) => {
        setFields((prev) => {
            const filtered = prev.filter((q) => q.id !== qId);
            // Clean up dependencies referencing the deleted question
            return filtered.map((q) =>
                q.dep && q.dep.q === qId ? { ...q, dep: null } : q
            );
        });
        setOpenCardIds((prev) => {
            const next = new Set(prev);
            next.delete(qId);
            return next;
        });
    };

    // Move Question Order (Up / Down)
    const handleMoveQuestion = (index, direction) => {
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= fields.length) return;
        setFields((prev) => {
            const updated = [...prev];
            const temp = updated[index];
            updated[index] = updated[targetIndex];
            updated[targetIndex] = temp;
            return updated.map((item, idx) => ({ ...item, order: idx + 1 }));
        });
    };

    // Add Option to choices
    const handleAddOption = (qId) => {
        setFields((prev) =>
            prev.map((q) => {
                if (q.id !== qId) return q;
                const currentOpts = q.options || [];
                return {
                    ...q,
                    options: [...currentOpts, createOption(currentOpts.length + 1)],
                };
            })
        );
    };

    // Update Option label
    const handleUpdateOption = (qId, optId, newLabel) => {
        setFields((prev) =>
            prev.map((q) => {
                if (q.id !== qId) return q;
                return {
                    ...q,
                    options: (q.options || []).map((o) =>
                        o.id === optId ? { ...o, label: newLabel } : o
                    ),
                };
            })
        );
    };

    // Delete Option
    const handleDeleteOption = (qId, optId) => {
        const targetQ = fields.find((q) => q.id === qId);
        if (targetQ && (targetQ.options || []).length <= 2) {
            toast.error("At least 2 options are required.");
            return;
        }
        setFields((prev) =>
            prev.map((q) => {
                if (q.id !== qId) return q;
                return {
                    ...q,
                    options: (q.options || []).filter((o) => o.id !== optId),
                };
            })
        );
    };

    // Get eligible answers of a question for conditional "Show only if"
    const getOptsOf = (q) => {
        if (!q) return [];
        if (q.type === "yesno") {
            return [
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
            ];
        }
        return q.options || [];
    };

    // Validate and Save Template
    const handleSave = async () => {
        if (!templateName.trim()) {
            toast.error("Template name is required.");
            return;
        }
        if (fields.length === 0) {
            toast.error("Please add at least one question / field.");
            return;
        }

        // Validate fields
        for (let i = 0; i < fields.length; i++) {
            const q = fields[i];
            if (!q.text.trim()) {
                toast.error(`Question ${i + 1}: Question title is required.`);
                setOpenCardIds((prev) => new Set([...prev, q.id]));
                return;
            }
            if (QUESTION_TYPES[q.type]?.opts) {
                if (!q.options || q.options.length === 0) {
                    toast.error(`Question ${i + 1}: Please add options.`);
                    setOpenCardIds((prev) => new Set([...prev, q.id]));
                    return;
                }
                if (q.options.some((o) => !o.label.trim())) {
                    toast.error(`Question ${i + 1}: All options must have text.`);
                    setOpenCardIds((prev) => new Set([...prev, q.id]));
                    return;
                }
            }
            if (q.dep && !q.dep.v) {
                toast.error(
                    `Question ${i + 1}: Select the answer value for conditional display or set to 'Always show'.`
                );
                setOpenCardIds((prev) => new Set([...prev, q.id]));
                return;
            }
        }

        const formattedFields = fields.map((q, idx) => {
            const fieldItem = {
                id: q.id,
                dep: q.dep && q.dep.q && q.dep.v ? { q: q.dep.q, v: q.dep.v } : null,
                desc: q.desc ? q.desc.trim() : null,
                text: q.text ? q.text.trim() : "",
                type: q.type,
                order: idx + 1,
                required: Boolean(q.required),
            };

            if (QUESTION_TYPES[q.type]?.opts && Array.isArray(q.options) && q.options.length > 0) {
                fieldItem.options = q.options.map((opt, oIdx) => ({
                    id: opt.id || `opt_${oIdx + 1}`,
                    label: opt.label || `Option ${oIdx + 1}`,
                }));
            }

            if (q.type === "rating") {
                fieldItem.min = q.min ?? 1;
                fieldItem.max = q.max ?? 5;
            }

            if (q.type === "multi_text") {
                fieldItem.max = q.max ?? 5;
            }

            return fieldItem;
        });

        const formData = new FormData();
        // Only send templateId when updating an existing template; do NOT send while creating a new template
        if (isEditMode && templateId) {
            formData.append("templateId", String(templateId).trim());
        }
        formData.append("templateType", templateType);
        formData.append("status", status);

        formData.append("templateName", templateName.trim());
        formData.append("description", description.trim());
        formData.append("fields", JSON.stringify(formattedFields));
        formData.append("tags", JSON.stringify(tags || []));

        try {
            const res = await createTemplate(formData);
            if (res?.success || res?.code === 200) {
                toast.success(
                    res?.message ||
                    (isEditMode
                        ? "Template updated successfully!"
                        : "Template created successfully!")
                );
                navigate("/teacher/sow-contract");
            } else {
                toast.error(res?.message || "Failed to save template.");
            }
        } catch (err) {
            console.error("Error creating/updating template:", err);
            toast.error(
                err?.response?.data?.message ||
                err?.message ||
                "Failed to save template."
            );
        }
    };

    // Render preview field control
    const renderPreviewInput = (q) => {
        const qName = `prev_${q.id}`;
        const currentValue = previewAnswers[q.id];

        switch (q.type) {
            case "short":
                return (
                    <input
                        type="text"
                        className="form-control preview-input-field"
                        placeholder="Short Answer Text"
                        value={currentValue || ""}
                        onChange={(e) =>
                            setPreviewAnswers((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                            }))
                        }
                    />
                );
            case "long":
                return (
                    <textarea
                        className="form-control preview-input-field"
                        rows="3"
                        placeholder="Long Answer Text"
                        value={currentValue || ""}
                        onChange={(e) =>
                            setPreviewAnswers((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                            }))
                        }
                    ></textarea>
                );
            case "number":
                return (
                    <input
                        type="number"
                        className="form-control preview-input-field"
                        placeholder="Enter Number"
                        value={currentValue || ""}
                        onChange={(e) =>
                            setPreviewAnswers((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                            }))
                        }
                    />
                );
            case "date":
                return (
                    <input
                        type="date"
                        className="form-control preview-input-field"
                        value={currentValue || ""}
                        onChange={(e) =>
                            setPreviewAnswers((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                            }))
                        }
                    />
                );
            case "yesno":
                return (
                    <div className="preview-boolean-row">
                        {["yes", "no"].map((val) => (
                            <React.Fragment key={val}>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name={qName}
                                    id={`${qName}_${val}`}
                                    checked={currentValue === val}
                                    onChange={() =>
                                        setPreviewAnswers((prev) => ({
                                            ...prev,
                                            [q.id]: val,
                                        }))
                                    }
                                />
                                <label
                                    className="btn btn-bool-box"
                                    htmlFor={`${qName}_${val}`}
                                >
                                    {val.charAt(0).toUpperCase() + val.slice(1)}
                                </label>
                            </React.Fragment>
                        ))}
                    </div>
                );
            case "multiple_choice":
                return (
                    <div>
                        {(q.options || []).map((opt) => (
                            <div className="form-check preview-choice-option" key={opt.id}>
                                <input
                                    className="form-check-input custom-radio-preview"
                                    type="radio"
                                    name={qName}
                                    id={`${qName}_${opt.id}`}
                                    checked={currentValue === opt.id}
                                    onChange={() =>
                                        setPreviewAnswers((prev) => ({
                                            ...prev,
                                            [q.id]: opt.id,
                                        }))
                                    }
                                />
                                <label
                                    className="form-check-label preview-label"
                                    htmlFor={`${qName}_${opt.id}`}
                                >
                                    {opt.label}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            case "checkboxes":
                return (
                    <div>
                        {(q.options || []).map((opt) => (
                            <div className="form-check preview-choice-option" key={opt.id}>
                                <input
                                    className="form-check-input custom-check-preview"
                                    type="checkbox"
                                    id={`${qName}_${opt.id}`}
                                />
                                <label
                                    className="form-check-label preview-label"
                                    htmlFor={`${qName}_${opt.id}`}
                                >
                                    {opt.label}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            case "dropdown":
                return (
                    <select
                        className="form-select preview-input-field"
                        value={currentValue || ""}
                        onChange={(e) =>
                            setPreviewAnswers((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                            }))
                        }
                    >
                        <option value="">Select option...</option>
                        {(q.options || []).map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                );
            case "rating": {
                const minVal = q.min || 1;
                const maxVal = q.max || 5;
                const ratingOptions = [];
                for (let i = minVal; i <= maxVal; i++) ratingOptions.push(i);
                return (
                    <div className="preview-rating-row">
                        {ratingOptions.map((v) => (
                            <React.Fragment key={v}>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name={qName}
                                    id={`${qName}_${v}`}
                                    checked={currentValue === v}
                                    onChange={() =>
                                        setPreviewAnswers((prev) => ({
                                            ...prev,
                                            [q.id]: v,
                                        }))
                                    }
                                />
                                <label
                                    className="btn btn-rating-box"
                                    htmlFor={`${qName}_${v}`}
                                >
                                    {v}
                                </label>
                            </React.Fragment>
                        ))}
                    </div>
                );
            }
            case "file":
                return (
                    <input type="file" className="form-control preview-input-field" />
                );
            case "signature":
                return (
                    <div
                        style={{
                            border: "1px dashed #98a2b3",
                            borderRadius: "8px",
                            padding: "20px",
                            textAlign: "center",
                            background: "#fff",
                            color: "#98a2b3",
                            cursor: "pointer",
                        }}
                    >
                        <i className="bi bi-pen me-2"></i> Draw E-Signature Pad
                    </div>
                );
            case "multi_text":
                return (
                    <div>
                        <div className="d-flex gap-2 mb-2">
                            <input
                                type="text"
                                className="form-control preview-input-field"
                                placeholder="Enter value"
                            />
                        </div>
                        <button type="button" className="btn-add-option">
                            <i className="bi bi-plus"></i> Add Row
                        </button>
                    </div>
                );
            default:
                return (
                    <input
                        type="text"
                        className="form-control preview-input-field"
                        placeholder="Answer"
                    />
                );
        }
    };

    return (
        <>
            <main className="gl-content-body">
                <div className="template-master-wrapper">
                    {/* Top Header Navigation */}
                    <header className="template-header-action-row mb-4">
                        <Link
                            to="/teacher/sow-contract"
                            className="btn-circle-back-navigation"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                        <div className="header-title-meta-group">
                            <h1>{isEditMode ? "Edit Template" : "Create New Template"}</h1>
                            <p>
                                {isEditMode
                                    ? "Update and manage statement of work and contract templates"
                                    : "Career planning and skill development guidance"}
                            </p>
                        </div>
                    </header>

                    {/* Form Builder Main 2-Column Grid */}
                    <div className="main-layout">
                        {/* Left Column: Form Setup & Questions */}
                        <div className="builder-left-col">
                            {/* Template Metadata Card */}
                            <div className="survey-meta-card">
                                <div className="mb-3">
                                    <label className="form-label-custom">Template Name</label>
                                    <input
                                        type="text"
                                        id="surveyTitle"
                                        className="form-control-custom"
                                        placeholder="e.g. STEM Workshop Standard SOW"
                                        value={templateName}
                                        onChange={(e) => setTemplateName(e.target.value)}
                                    />
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Template Type</label>
                                        <select
                                            id="builderType"
                                            className="form-select form-control-custom"
                                            value={templateType}
                                            onChange={(e) => setTemplateType(e.target.value)}
                                        >
                                            <option value="sow">SOW Template</option>
                                            <option value="contract">Contract Template</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label-custom">Status</label>
                                        <select
                                            className="form-select form-control-custom"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="active">Active</option>
                                            <option value="draft">Draft</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-0">
                                    <label className="form-label-custom">Description</label>
                                    <textarea
                                        id="surveyDesc"
                                        className="form-control-custom"
                                        rows="3"
                                        placeholder="Add clear scope overview and instructions"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Questions Container */}
                            <div id="questionList">
                                {isLoading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="mt-2 text-muted small">
                                            Loading template details...
                                        </p>
                                    </div>
                                ) : fields.length === 0 ? (
                                    <div className="text-muted text-center py-5 bg-white border rounded p-4">
                                        <i
                                            className="bi bi-ui-checks text-muted d-block mb-2"
                                            style={{ fontSize: "2.5rem" }}
                                        ></i>
                                        <h5>No Fields Added Yet</h5>
                                        <p className="small text-secondary mb-0">
                                            Pick a question type from the right panel to get started.
                                        </p>
                                    </div>
                                ) : (
                                    fields.map((q, idx) => {
                                        const qTypeInfo =
                                            QUESTION_TYPES[q.type] || QUESTION_TYPES.short;
                                        const isOpen = openCardIds.has(q.id);
                                        const parents = fields.filter(
                                            (p) =>
                                                p.id !== q.id &&
                                                (p.type === "multiple_choice" ||
                                                    p.type === "dropdown" ||
                                                    p.type === "yesno")
                                        );
                                        const parentQ =
                                            q.dep?.q && fields.find((p) => p.id === q.dep.q);

                                        return (
                                            <div
                                                className="question-builder-card"
                                                key={q.id}
                                                data-id={q.id}
                                            >
                                                {/* Question Card Header */}
                                                <div className="q-header-row">
                                                    <div className="q-title-left">
                                                        <div className="d-flex flex-column align-items-center me-1">
                                                            <i
                                                                className={`bi bi-chevron-up text-muted ${idx === 0 ? "opacity-25" : ""
                                                                    }`}
                                                                role="button"
                                                                title="Move Up"
                                                                onClick={() => handleMoveQuestion(idx, -1)}
                                                            ></i>
                                                            <i
                                                                className={`bi bi-chevron-down text-muted ${idx === fields.length - 1 ? "opacity-25" : ""
                                                                    }`}
                                                                role="button"
                                                                title="Move Down"
                                                                onClick={() => handleMoveQuestion(idx, 1)}
                                                            ></i>
                                                        </div>
                                                        <div className="q-icon-box">
                                                            <i className={qTypeInfo.icon}></i>
                                                        </div>
                                                        <div className="q-meta-info">
                                                            <h3>
                                                                {idx + 1}. {q.text || "Untitled question"}
                                                            </h3>
                                                            <span>
                                                                {qTypeInfo.label}
                                                                {q.required ? " • Required" : ""}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="q-actions-right">
                                                        <i
                                                            className="fa-regular fa-pen-to-square"
                                                            role="button"
                                                            title="Edit Field"
                                                            onClick={() => toggleCard(q.id)}
                                                        ></i>
                                                        <i
                                                            className="bi bi-trash text-danger"
                                                            role="button"
                                                            title="Delete Field"
                                                            onClick={() => handleDeleteQuestion(q.id)}
                                                        ></i>
                                                        <button
                                                            className={`arrow-toggle-btn ${isOpen ? "" : "collapsed"
                                                                }`}
                                                            type="button"
                                                            onClick={() => toggleCard(q.id)}
                                                        >
                                                            <i className="bi"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Collapsible Card Body */}
                                                {isOpen && (
                                                    <div className="card-expanded-body pt-2">
                                                        <div className="mb-3">
                                                            <label className="form-label-custom">
                                                                Question
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control-custom"
                                                                placeholder="Enter question title"
                                                                value={q.text}
                                                                onChange={(e) =>
                                                                    handleUpdateQuestion(
                                                                        q.id,
                                                                        "text",
                                                                        e.target.value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label-custom">
                                                                Description (Optional)
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control-custom"
                                                                placeholder="Add clear instructions or subtitle"
                                                                value={q.desc}
                                                                onChange={(e) =>
                                                                    handleUpdateQuestion(
                                                                        q.id,
                                                                        "desc",
                                                                        e.target.value
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        {/* Option Input List (for Choice / Checkbox / Dropdown) */}
                                                        {qTypeInfo.opts && (
                                                            <div className="mb-3">
                                                                <label className="form-label-custom">
                                                                    Options
                                                                </label>
                                                                {(q.options || []).map((opt) => (
                                                                    <div
                                                                        className="option-input-wrapper"
                                                                        key={opt.id}
                                                                    >
                                                                        <div
                                                                            className={
                                                                                q.type === "checkboxes"
                                                                                    ? "option-checkbox-mock"
                                                                                    : "option-radio-mock"
                                                                            }
                                                                        ></div>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control-custom"
                                                                            value={opt.label}
                                                                            onChange={(e) =>
                                                                                handleUpdateOption(
                                                                                    q.id,
                                                                                    opt.id,
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                        <i
                                                                            className="bi bi-trash text-danger"
                                                                            role="button"
                                                                            title="Delete option"
                                                                            onClick={() =>
                                                                                handleDeleteOption(q.id, opt.id)
                                                                            }
                                                                        ></i>
                                                                    </div>
                                                                ))}
                                                                <button
                                                                    type="button"
                                                                    className="btn-add-option"
                                                                    onClick={() => handleAddOption(q.id)}
                                                                >
                                                                    <i className="bi bi-plus"></i> Add Option
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* Rating configuration */}
                                                        {q.type === "rating" && (
                                                            <div className="rating-row-flex mb-3">
                                                                <div>
                                                                    <label className="form-label-custom">
                                                                        Min Rating
                                                                    </label>
                                                                    <select
                                                                        className="form-select form-control-custom"
                                                                        value={q.min ?? 1}
                                                                        onChange={(e) =>
                                                                            handleUpdateQuestion(
                                                                                q.id,
                                                                                "min",
                                                                                +e.target.value
                                                                            )
                                                                        }
                                                                    >
                                                                        <option value={0}>0</option>
                                                                        <option value={1}>1</option>
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label className="form-label-custom">
                                                                        Max Rating
                                                                    </label>
                                                                    <select
                                                                        className="form-select form-control-custom"
                                                                        value={q.max ?? 5}
                                                                        onChange={(e) =>
                                                                            handleUpdateQuestion(
                                                                                q.id,
                                                                                "max",
                                                                                +e.target.value
                                                                            )
                                                                        }
                                                                    >
                                                                        <option value={3}>3</option>
                                                                        <option value={5}>5</option>
                                                                        <option value={7}>7</option>
                                                                        <option value={10}>10</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Multi text rows configuration */}
                                                        {q.type === "multi_text" && (
                                                            <div className="mb-3">
                                                                <label className="form-label-custom">
                                                                    Max Rows
                                                                </label>
                                                                <select
                                                                    className="form-select form-control-custom"
                                                                    value={q.max ?? 5}
                                                                    onChange={(e) =>
                                                                        handleUpdateQuestion(
                                                                            q.id,
                                                                            "max",
                                                                            +e.target.value
                                                                        )
                                                                    }
                                                                >
                                                                    <option value={3}>3</option>
                                                                    <option value={5}>5</option>
                                                                    <option value={10}>10</option>
                                                                    <option value={20}>20</option>
                                                                </select>
                                                            </div>
                                                        )}

                                                        {/* Conditional Display: "Show only if" */}
                                                        {parents.length > 0 && (
                                                            <div className="mb-3">
                                                                <label className="form-label-custom">
                                                                    Show only if (Optional)
                                                                </label>
                                                                <div className="rating-row-flex">
                                                                    <select
                                                                        className="form-select form-control-custom"
                                                                        value={q.dep?.q || ""}
                                                                        onChange={(e) => {
                                                                            const pId = e.target.value;
                                                                            handleUpdateQuestion(
                                                                                q.id,
                                                                                "dep",
                                                                                pId ? { q: pId, v: "" } : null
                                                                            );
                                                                        }}
                                                                    >
                                                                        <option value="">Always show</option>
                                                                        {parents.map((p) => (
                                                                            <option key={p.id} value={p.id}>
                                                                                {p.text || "Untitled question"}
                                                                            </option>
                                                                        ))}
                                                                    </select>

                                                                    {q.dep?.q && (
                                                                        <select
                                                                            className="form-select form-control-custom"
                                                                            value={q.dep?.v || ""}
                                                                            onChange={(e) => {
                                                                                handleUpdateQuestion(q.id, "dep", {
                                                                                    ...q.dep,
                                                                                    v: e.target.value,
                                                                                });
                                                                            }}
                                                                        >
                                                                            <option value="">Select answer</option>
                                                                            {getOptsOf(parentQ).map((opt) => (
                                                                                <option key={opt.id} value={opt.id}>
                                                                                    {opt.label}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Card Footer Controls */}
                                                        <div className="q-footer-controls">
                                                            <div className="switch-wrapper form-check form-switch">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id={`req_${q.id}`}
                                                                    checked={Boolean(q.required)}
                                                                    onChange={(e) =>
                                                                        handleUpdateQuestion(
                                                                            q.id,
                                                                            "required",
                                                                            e.target.checked
                                                                        )
                                                                    }
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor={`req_${q.id}`}
                                                                >
                                                                    Required
                                                                </label>
                                                            </div>

                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="btn-cancel-q"
                                                                    onClick={() => toggleCard(q.id)}
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn-blue-primary"
                                                                    onClick={() => {
                                                                        if (!q.text.trim()) {
                                                                            toast.error(
                                                                                "Please enter the question text."
                                                                            );
                                                                            return;
                                                                        }
                                                                        toggleCard(q.id);
                                                                    }}
                                                                >
                                                                    Done
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>

                        {/* Right Column: Question Types & Actions Panel */}
                        <div className="builder-right-col">
                            {/* Question Types Palette */}
                            <div className="sidebar-panel-box">
                                <h2>Question Types</h2>
                                <div className="d-flex flex-column">
                                    {Object.entries(QUESTION_TYPES).map(([typeKey, info]) => (
                                        <button
                                            key={typeKey}
                                            type="button"
                                            className="q-type-btn"
                                            onClick={() => handleAddQuestion(typeKey)}
                                        >
                                            <i className={info.icon}></i>
                                            <span>{info.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Master Actions */}
                            <div className="sidebar-panel-box">
                                <h2>Actions</h2>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                                    onClick={() => setShowPreview(true)}
                                >
                                    <i className="bi bi-eye"></i> Preview Template
                                </button>
                                <button
                                    type="button"
                                    id="saveBtn"
                                    disabled={isCreateTemplatePending}
                                    className="btn btn-blue-primary w-100 py-2 fw-semibold"
                                    onClick={handleSave}
                                >
                                    {isCreateTemplatePending ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            {isEditMode ? "Updating..." : "Saving..."}
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-regular fa-paper-plane me-1"></i>{" "}
                                            {isEditMode ? "Update Template" : "Save Template"}
                                        </>
                                    )}
                                </button>
                                <Link
                                    to="/teacher/sow-contract"
                                    className="btn btn-light border w-100 mt-2 py-2 text-muted fw-semibold"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Live Interactive Preview Drawer (Offcanvas) */}
            {showPreview && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={() => setShowPreview(false)}
                ></div>
            )}
            <div
                className={`offcanvas offcanvas-end survey-preview-drawer ${showPreview ? "show" : ""
                    }`}
                id="surveyPreviewDrawer"
                tabIndex="-1"
                style={{
                    visibility: showPreview ? "visible" : "hidden",
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                <div className="offcanvas-header preview-drawer-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                        <div className="preview-icon-box">
                            <i className="bi bi-eye"></i>
                        </div>
                        <div>
                            <h5 className="offcanvas-title fw-bold mb-0">Preview</h5>
                            <span className="text-muted small">Live template test</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowPreview(false)}
                    ></button>
                </div>

                <div className="offcanvas-body preview-drawer-body">
                    {templateName && <h5 className="fw-bold mb-1">{templateName}</h5>}
                    {description && <p className="text-muted mb-4">{description}</p>}

                    {fields.length === 0 ? (
                        <p className="text-muted">No questions configured yet.</p>
                    ) : (
                        fields.map((q, idx) => {
                            // Conditional Logic Visibility Check
                            if (q.dep && q.dep.q && q.dep.v) {
                                const parentAnswer = previewAnswers[q.dep.q];
                                if (parentAnswer !== q.dep.v) {
                                    return null;
                                }
                            }

                            return (
                                <div className="preview-q-block" key={q.id}>
                                    <p className="preview-question-text">
                                        {idx + 1}. {q.text || "Untitled question"}
                                        {q.required && <span className="text-danger ms-1">*</span>}
                                    </p>
                                    {q.desc && (
                                        <small className="text-muted d-block mb-2">{q.desc}</small>
                                    )}
                                    {renderPreviewInput(q)}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
};

export default CreateNewTemplate;
