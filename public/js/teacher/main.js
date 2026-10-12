// teacher-Hours-&-Deliverables-page

document.addEventListener("DOMContentLoaded", function () {

  // Custom dates database dictionary 
  const serviceDatesDictionary = {
    "One-on-One Coaching": ["7/27/13", "11/7/16", "5/30/14", "12/25/18", "04/15/20", "08/19/22", "01/10/24"],
    "Group Coaching": ["12/04/24", "01/15/25", "03/22/25", "05/18/25"],
    "Career Guidance": ["08/22/22", "09/11/23", "10/31/24"],
    "Skill Development Events": ["02/10/26"],
    "Project Support": ["04/18/25", "06/30/25"]
  };

  const trigger = document.getElementById("dropdownTrigger");
  const popover = document.getElementById("dropdownPopover");
  const placeholder = document.getElementById("selectedServicePlaceholder");
  const arrow = document.getElementById("dropdownArrowIcon");
  const radioRows = document.querySelectorAll(".dropdown-radio-option-row");
  const dynamicDatesContainer = document.getElementById("dynamicDatesContainer");

  let dynamicActiveService = "One-on-One Coaching";

  function rebuildDynamicDateColumns(serviceKey) {
    dynamicDatesContainer.innerHTML = "";
    const currentDatesArray = serviceDatesDictionary[serviceKey] || [];

    currentDatesArray.forEach(dateStr => {
      const pillElement = document.createElement("span");
      pillElement.className = "date-token-pill";
      pillElement.textContent = dateStr;

      pillElement.addEventListener("click", function (event) {
        event.stopPropagation();
        placeholder.textContent = `${serviceKey} (${dateStr})`;
        placeholder.style.color = "#101828";

        popover.classList.remove("show-menu");
        arrow.style.transform = "rotate(0deg)";
      });

      dynamicDatesContainer.appendChild(pillElement);
    });
  }

  rebuildDynamicDateColumns(dynamicActiveService);

  trigger.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpened = popover.classList.toggle("show-menu");
    arrow.style.transform = isOpened ? "rotate(180deg)" : "rotate(0deg)";
  });

  radioRows.forEach(row => {
    row.addEventListener("click", function (event) {
      event.stopPropagation();

      radioRows.forEach(r => r.classList.remove("selected"));
      this.classList.add("selected");

      const targetServiceValue = this.getAttribute("data-service");
      dynamicActiveService = targetServiceValue;
      placeholder.textContent = targetServiceValue;

      this.after(dynamicDatesContainer);
      rebuildDynamicDateColumns(targetServiceValue);
    });
  });

  document.addEventListener("click", function (event) {
    if (!document.getElementById("serviceTypeDropdownContainer").contains(event.target)) {
      popover.classList.remove("show-menu");
      arrow.style.transform = "rotate(0deg)";
    }
  });
});

// teacher-Hours-&-Deliverables-page

// Courses js
// one
$(function () {
  // Context Menu Setup for handling clicks on specific dots buttons safely
  const contextButtons = document.querySelectorAll(".btn-card-context");
  contextButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentMenu = button.nextElementSibling;
      document.querySelectorAll(".context-menu").forEach((menu) => {
        if (menu !== currentMenu) menu.classList.remove("show");
      });
      currentMenu.classList.toggle("show");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".context-menu").forEach((menu) => {
      menu.classList.remove("show");
    });
  });

  // Initialize DateRangePicker
  $("#courseDateRange").daterangepicker({
    opens: "left",
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
      format: "MM/DD/YYYY",
    },
  });

  $("#courseDateRange").on("apply.daterangepicker", function (ev, picker) {
    console.log(
      "Selected Range: " +
      picker.startDate.format("YYYY-MM-DD") +
      " to " +
      picker.endDate.format("YYYY-MM-DD"),
    );
  });

  $("#courseDateRange").on("cancel.daterangepicker", function (ev, picker) {
    $(this).val("");
  });
});

//   two
$(function () {
  // Safe document dynamic click listener to clear context popups
  $(document).on("click", function () {
    $(".glnc-course-modal-dropdown-menu").removeClass("show");
  });

  $(".glnc-course-modal-select-wrapper").on("click", function (e) {
    e.stopPropagation();
  });

  // Course Category Actions Handler Dropdown Selection System configuration settings
  $("#categoryTrigger").on("click", function () {
    $(".glnc-course-modal-dropdown-menu")
      .not("#categoryDropdown")
      .removeClass("show");
    $("#categoryDropdown").toggleClass("show");
  });

  $("#categoryDropdown").on(
    "click",
    ".glnc-course-modal-option-item",
    function () {
      const selectedVal = $(this).data("value");
      $("#categoryTrigger span")
        .text(selectedVal)
        .parent()
        .addClass("has-value");
      $("#categoryDropdown").removeClass("show");
    },
  );

  // Radio Buttons Active Element Updates Selector Toggle Settings layout context rules
  $('input[name="courseLevel"]').on("change", function () {
    $(".glnc-course-modal-radio-label").removeClass("active");
    if ($(this).is(":checked")) {
      $(this).parent(".glnc-course-modal-radio-label").addClass("active");
    }
  });

  // Organizations Dynamic Searchable Custom Dropdown UI Framework Configuration Logic System
  $("#orgTrigger").on("click", function () {
    $(".glnc-course-modal-dropdown-menu")
      .not("#orgDropdown")
      .removeClass("show");
    $("#orgDropdown").toggleClass("show");
  });

  function updateSelectedOrgsText() {
    let selected = [];
    $(".org-checkbox:checked").each(function () {
      selected.push($(this).val());
    });
    if (selected.length > 0) {
      $("#orgTriggerText").text(selected.join(", "));
      $("#orgTrigger").addClass("has-value");
    } else {
      $("#orgTriggerText").text("Select Organizations");
      $("#orgTrigger").removeClass("has-value");
    }
  }

  $(".org-checkbox").on("change", function () {
    updateSelectedOrgsText();
  });

  $("#orgSearch").on("input", function () {
    let query = $(this).val().toLowerCase();
    $("#orgOptionsList .glnc-course-modal-option-item").each(function () {
      let text = $(this).text().toLowerCase();
      if (text.includes(query)) {
        $(this).removeClass("d-none");
      } else {
        $(this).addClass("d-none");
      }
    });
  });

  // Course Type Selector Setup Dynamic Pricing Box Input Toggle Rules Logic Context
  $("#typeTrigger").on("click", function () {
    $(".glnc-course-modal-dropdown-menu")
      .not("#typeDropdown")
      .removeClass("show");
    $("#typeDropdown").toggleClass("show");
  });

  $(".type-select-item").on("click", function () {
    const selection = $(this).data("value");
    $("#typeTriggerText").text(selection);
    $("#typeDropdown").removeClass("show");

    if (selection === "Paid") {
      $("#priceInputContainer").removeClass("d-none");
    } else {
      $("#priceInputContainer").addClass("d-none");
    }
  });

  // Badge Input Tags Generator Array Logic Pipeline Trigger Framework Execution Context
  $("#tagsInputField").on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let tagVal = $(this).val().trim();
      if (tagVal) {
        let tagHtml = `<div class="glnc-course-modal-tag-pill" data-tag="${tagVal}">${tagVal} <i class="bi bi-x glnc-course-modal-tag-close"></i></div>`;
        $("#modalTagsWrapper").append(tagHtml);
        $(this).val("");
      }
    }
  });

  $(document).on("click", ".glnc-course-modal-tag-close", function () {
    $(this).parent(".glnc-course-modal-tag-pill").remove();
  });
});
// Courses js

// course-management-modules-and-lessons
document.addEventListener("DOMContentLoaded", function () {
  // MASTER SECTION SWITCHER LOGIC (TEXT vs VIDEO TABS)
  const mainTabTriggers = document.querySelectorAll(
    ".glnc-js-main-tab-trigger",
  );
  mainTabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const targetMainId = this.getAttribute("data-main-target");
      const sectionSelectorRow = this.closest(".glnc-section-selector-row");
      const dropdownContent = this.closest(
        ".glnc-lesson-details-dropdown-content",
      );

      // Clear visual blue active states of parent section tabs
      sectionSelectorRow
        .querySelectorAll(".glnc-js-main-tab-trigger")
        .forEach((tab) => {
          tab.classList.remove("active-state");
        });
      this.classList.add("active-state");

      // Hide all major functional wrapper canvases first
      dropdownContent
        .querySelectorAll(".glnc-main-view-tab-block")
        .forEach((block) => {
          block.classList.remove("active-view");
        });

      // Display target canvas block frame layout
      const activeTargetBlock = document.getElementById(targetMainId);
      if (activeTargetBlock) {
        activeTargetBlock.classList.add("active-view");
      }
    });
  });

  // MODULE ACCORDION TOGGLE
  const moduleHeaders = document.querySelectorAll(".glnc-js-module-toggle");
  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const currentWrapper = this.closest(".glnc-accordion-block-wrapper");
      const allModules = document.querySelectorAll(
        ".glnc-accordion-block-wrapper",
      );
      const isCollapsed = currentWrapper.classList.contains("state-collapsed");

      allModules.forEach((mod) => {
        mod.classList.add("state-collapsed");
        const icon = mod.querySelector(".glnc-caret-icon");
        if (icon) icon.classList.remove("rotate-icon-180");
      });

      if (isCollapsed) {
        currentWrapper.classList.remove("state-collapsed");
        const currentIcon = this.querySelector(".glnc-caret-icon");
        if (currentIcon) currentIcon.classList.add("rotate-icon-180");
      }
    });
  });

  // LESSON DROPDOWN TOGGLE
  const lessonHeaders = document.querySelectorAll(".glnc-js-lesson-toggle");
  lessonHeaders.forEach((lessonHeader) => {
    lessonHeader.addEventListener("click", function () {
      const currentLessonWrapper = this.closest(".glnc-lesson-item-wrapper");
      const parentContainer = this.closest(
        ".glnc-accordion-collapsible-canvas-body",
      );
      const siblingLessons = parentContainer.querySelectorAll(
        ".glnc-lesson-item-wrapper",
      );
      const isCollapsed =
        currentLessonWrapper.classList.contains("state-collapsed");

      siblingLessons.forEach((les) => {
        les.classList.remove("state-expanded");
        les.classList.add("state-collapsed");
        const icon = les.querySelector(".glnc-caret-icon");
        if (icon) icon.classList.remove("rotate-icon-180");
      });

      if (isCollapsed) {
        currentLessonWrapper.classList.remove("state-collapsed");
        currentLessonWrapper.classList.add("state-expanded");
        const currentIcon = this.querySelector(".glnc-caret-icon");
        if (currentIcon) currentIcon.classList.add("rotate-icon-180");
      }
    });
  });

  // 5 SUB-INTERACTIONS SUB-TABS MATRIX TOGGLE ENGINE
  const subTriggers = document.querySelectorAll(".glnc-js-sub-trigger");
  subTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const targetSubPaneId = this.getAttribute("data-sub-target");
      const parentGrid = this.closest(".glnc-interaction-type-grid");
      const containerArea = this.closest("#glnc-main-tab-video");

      parentGrid
        .querySelectorAll(".glnc-js-sub-trigger")
        .forEach((btn) => btn.classList.remove("active-state"));
      this.classList.add("active-state");

      containerArea
        .querySelectorAll(".glnc-tab-content-block")
        .forEach((pane) => {
          pane.classList.remove("active-view");
        });

      const targetPane = document.getElementById(targetSubPaneId);
      if (targetPane) {
        targetPane.classList.add("active-view");
      }
    });
  });
});

// course-management-modules-and-lessons

//   request management user profile
document.querySelectorAll(".provider-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".provider-item")
      .forEach((i) => i.classList.remove("selected"));
    this.classList.add("selected");
    const radio = this.querySelector(".project-radio");
    if (radio) radio.checked = true;
  });
});

//   request management user profile

//  resources-&-grants-management

const resourcesTemplateHtml = `
            <div class="glnc-editor-inner-title" style="font-size: 12px; color: #667085; font-weight:500; margin-bottom:10px;">Overview Video</div>
            <div class="glnc-video-frame">
                <video poster="https://peach.blender.org/wp-content/uploads/title_anidb.jpg" controls>
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                </video>
            </div>
            <div class="glnc-editor-inner-title">Details</div>
            <p class="glnc-editor-inner-p">Inspired by John Lewis' call to "get in good trouble," the NGO funds organizations whose work centers community organizing principles.</p>
            <div class="glnc-editor-inner-title" style="font-size: 11px; text-transform:uppercase; color:#98A2B3; letter-spacing:0.5px; margin-bottom:8px;">Attachments</div>
            <div>
                <a href="#" class="glnc-attachment-badge"><i class="bi bi-paperclip"></i> Security_Assessment_Framework.pdf</a>
                <a href="#" class="glnc-attachment-badge"><i class="bi bi-paperclip"></i> Implementation_Checklist.pdf</a>
            </div>
        `;

const grantsTemplateHtml = `
            <div class="glnc-editor-inner-title">Additional Eligibility Details:</div>
            <p class="glnc-editor-inner-p" style="margin-bottom: 12px;">U.S.-based, constituent-led grassroots nonprofits or fiscally sponsored forprofits with annual budgets under $350,000. Organizations must demonstrate community organizing practices. See website for areas not funded</p>
            <div class="glnc-editor-inner-title" style="display:inline-block; margin:0;">View Opportunity:</div>
            <a href="https://www.funderwebsite.com" target="_blank" style="color: #0076A8; font-size: 12px; font-weight: 500; text-decoration: none; margin-left:4px;">www.funderwebsite.com</a>
        `;

function toggleFormContext(selectedType) {
  const canvas = document.getElementById("editorDynamicCanvas");
  const grantsExtras = document.getElementById("grantsExtraFields");
  const contestWrapper = document.getElementById("contestFieldWrapper");

  const lblMinPrice = document.getElementById("lblMinPrice");
  const lblMaxPrice = document.getElementById("lblMaxPrice");

  const lblRes = document.getElementById("lblResources");
  const lblGra = document.getElementById("lblGrants");

  lblRes.classList.remove("active-selection");
  lblGra.classList.remove("active-selection");

  if (selectedType === "resources") {
    lblRes.classList.add("active-selection");
    canvas.innerHTML = resourcesTemplateHtml;

    grantsExtras.style.display = "none";
    contestWrapper.style.display = "none";

    lblMinPrice.innerText = "Set Minimum Price";
    lblMaxPrice.innerText = "Set Maximum Price";
  } else {
    lblGra.classList.add("active-selection");
    canvas.innerHTML = grantsTemplateHtml;

    grantsExtras.style.display = "block";
    contestWrapper.style.display = "block";

    lblMinPrice.innerText = "Set Minimum Award Price";
    lblMaxPrice.innerText = "Set Maximum Award Price";
  }
}

// Initialize state configuration on application bootup
document.addEventListener("DOMContentLoaded", function () {
  toggleFormContext("resources");
});

// dropdown

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".glnc-menu-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (event) {
      // Prevent immediate bubbling to document click
      event.stopPropagation();

      const currentMenu = this.nextElementSibling;

      // Close all other open dropdowns first
      document.querySelectorAll(".glnc-context-menu").forEach((menu) => {
        if (menu !== currentMenu) {
          menu.classList.remove("show");
        }
      });

      // Toggle only this card's menu
      currentMenu.classList.toggle("show");
    });
  });

  // Close dropdowns automatically when clicking anywhere outside the menus
  document.addEventListener("click", function () {
    document.querySelectorAll(".glnc-context-menu").forEach((menu) => {
      menu.classList.remove("show");
    });
  });
});

// dropdown
// resources-&-grants-management

// system-settings Page

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("brandingFileInput");
  const dropZone = document.getElementById("dropZone");
  const uploadText = document.getElementById("uploadText");

  // Interactive Drag State Events
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
      },
      false,
    );
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
      },
      false,
    );
  });

  // Update Text Node on File Selection
  fileInput.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
      const fileName = this.files[0].name;
      uploadText.innerHTML = `Selected File: <strong style="color: #0076A8;">${fileName}</strong>`;
    }
  });
});

// system-settings page

//  SOW & Contract
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown Menu Toggling Track Logic
  const triggers = document.querySelectorAll(".context-menu-click-trigger");

  triggers.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const currentDropdown = this.nextElementSibling;

      document
        .querySelectorAll(".glnc-context-dropdown")
        .forEach((dropdown) => {
          if (dropdown !== currentDropdown) {
            dropdown.classList.remove("show");
          }
        });

      currentDropdown.classList.toggle("show");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".glnc-context-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  });

  // Bootstrap Native Modal Init and Subheading Content Mapping
  const bsModalElement = document.getElementById("bootstrapVisibilityModal");
  const nativeModalInstance = new bootstrap.Modal(bsModalElement);
  const dynamicSubtitle = document.getElementById("popupDynamicSubtitle");

  const visibilityTriggers = document.querySelectorAll(
    ".visibility-btn-trigger",
  );

  visibilityTriggers.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const templateType = this.getAttribute("data-template-type"); // "SOW" or "Contract"

      // Dynamic Subtitle update engine
      dynamicSubtitle.textContent = `Manage visibility of ${templateType} Template`;

      // Trigger Bootstrap show engine
      nativeModalInstance.show();

      // Hide the active overlay dropdown trigger window panel
      this.parentElement.classList.remove("show");
    });
  });
});

// Tab Switch Panel Control Architecture
function switchTabPanel(panelId, buttonElement) {
  document
    .querySelectorAll(".glnc-tab-pill")
    .forEach((btn) => btn.classList.remove("active"));
  buttonElement.classList.add("active");

  document.querySelectorAll(".tab-content-panel").forEach((panel) => {
    panel.classList.remove("active-panel");
  });
  document.getElementById(panelId).classList.add("active-panel");
}
//  SOW & Contract

// Advanced Analytics

function toggleCustomDropdownMenu(trigger) {
  const currentWrapper = trigger.parentElement;
  document.querySelectorAll(".gl-dropdown-wrapper").forEach((w) => {
    if (w !== currentWrapper) w.classList.remove("open");
  });
  currentWrapper.classList.toggle("open");
}

function filterDropdownListTrack(input) {
  const keyword = input.value.toLowerCase();
  const rows =
    input.parentElement.parentElement.querySelectorAll(".gl-menu-item-row");
  rows.forEach((r) => {
    const text = r.querySelector(".gl-menu-item-text").innerText.toLowerCase();
    r.style.setProperty(
      "display",
      text.includes(keyword) ? "flex" : "none",
      "important",
    );
  });
}

function handleOptionSelectionClick(row) {
  const checkbox = row.querySelector('input[type="checkbox"]');
  const txt = row.querySelector(".gl-menu-item-text").innerText;
  const lbl = row.parentElement.parentElement.parentElement.querySelector(
    ".trigger-label-render",
  );

  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    row.classList.add("selected");
    lbl.innerText = txt;
  } else {
    row.classList.remove("selected");
  }
  row.parentElement.parentElement.parentElement.classList.remove("open");
}

// INITIALIZE DATERANGEPICKER FUNCTIONAL HOOK
$(function () {
  $("#dashboardDateRangeSelector").daterangepicker(
    {
      opens: "left",
      startDate: moment().subtract(6, "months"),
      endDate: moment(),
      ranges: {
        Today: [moment(), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last 6 Months": [moment().subtract(6, "months"), moment()],
      },
    },
    function (start, end) {
      $("#dashboardDateRangeSelector .date-display-target").text(
        start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"),
      );
    },
  );
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".gl-dropdown-wrapper")) {
    document
      .querySelectorAll(".gl-dropdown-wrapper")
      .forEach((w) => w.classList.remove("open"));
  }
});

// Advanced Analytics Page

// Surveys & Assessments Page

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".btn-options-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const currentDropdown = this.nextElementSibling;

      // Close any other open dropdowns
      document.querySelectorAll(".custom-dropdown-menu").forEach((menu) => {
        if (menu !== currentDropdown) {
          menu.classList.remove("show");
        }
      });

      // Toggle the clicked one
      currentDropdown.classList.toggle("show");
    });
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener("click", function () {
    document.querySelectorAll(".custom-dropdown-menu").forEach((menu) => {
      menu.classList.remove("show");
    });
  });
});

// Agat aapko forms or drawers code me clean state reset maintain rakhna hai jab window render ho
document.addEventListener("DOMContentLoaded", function () {
  // Optional: Agar aap check karna chahein kab close ya open ho raha hai drawer tracking
  const previewDrawerEl = document.getElementById("surveyPreviewDrawer");

  previewDrawerEl.addEventListener("hidden.bs.offcanvas", function () {
    // Drawer close hone par form state clean reset karne ke liye trigger script
    document.getElementById("previewSurveyForm").reset();
  });
});

// Surveys & Assessments Page

// Create Survey page

// Agat aapko forms or drawers code me clean state reset maintain rakhna hai jab window render ho
document.addEventListener("DOMContentLoaded", function () {
  // Optional: Agar aap check karna chahein kab close ya open ho raha hai drawer tracking
  const previewDrawerEl = document.getElementById("surveyPreviewDrawer");

  previewDrawerEl.addEventListener("hidden.bs.offcanvas", function () {
    // Drawer close hone par form state clean reset karne ke liye trigger script
    document.getElementById("previewSurveyForm").reset();
  });
});

// Create Survey page

// Event Page js

const dropZone = document.getElementById("glnc-drop-zone");
const fileInput = document.getElementById("glnc-file-input");
const filesContainer = document.getElementById("glnc-files-container");
const fileCountSpan = document.getElementById("glnc-file-count");

if (dropZone) {
  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    handleUMFiles(e.target.files);
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#0076A8";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "#cccccc";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#cccccc";
    handleUMFiles(e.dataTransfer.files);
  });
}

function handleUMFiles(files) {
  for (let file of files) {
    const row = document.createElement("div");
    row.className = "glnc-um-file-item";
    row.innerHTML = `
                    <div style="display: flex; align-items: center; font-size: 14px; color: #333333; font-weight: 500;">
                        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; stroke: #666666; stroke-width: 2; fill: none; margin-right: 12px;">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                        </svg>
                        ${file.name}
                    </div>
                    <button class="glnc-um-delete-btn" onclick="removeUMFile(this)">
                        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: none; stroke: #d9383a; stroke-width: 2;">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                `;
    filesContainer.appendChild(row);
  }
  updateUMCount();
}

function removeUMFile(btn) {
  btn.closest(".glnc-um-file-item").remove();
  updateUMCount();
}

function updateUMCount() {
  if (filesContainer) {
    const count = filesContainer.querySelectorAll(".glnc-um-file-item").length;
    fileCountSpan.textContent = count;
  }
}

// Event Page js

// header drop down uaser profile
const profileContainer = document.getElementById("profileContainer");
const profileTrigger = document.getElementById("profileTrigger");

// Click karne par open/close toggle hoga
profileTrigger.addEventListener("click", (e) => {
  profileContainer.classList.toggle("active");
  e.stopPropagation(); // Window click event ko trigger hone se rokne ke liye
});

// Agar dropdown ke bahar kahi bhi click ho, to menu close ho jaye
window.addEventListener("click", () => {
  if (profileContainer.classList.contains("active")) {
    profileContainer.classList.remove("active");
  }
});
// header drop down uaser profile

// user management page js

document.addEventListener("DOMContentLoaded", function () {
  const communityTrigger = document.getElementById("communitySubmenuTrigger");
  const communityMenu = document.getElementById("communitySubmenu");
  const mainDropdownButton = document.getElementById("actionMenuButton");

  // Handle toggle click behavior on Community Item
  communityTrigger.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    communityMenu.classList.toggle("show-submenu");
  });

  // Clear sub-dropdown state when parent closes
  mainDropdownButton.addEventListener("click", function () {
    if (communityMenu.classList.contains("show-submenu")) {
      communityMenu.classList.remove("show-submenu");
    }
  });

  // Clear state if clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nested-submenu-wrapper")) {
      communityMenu.classList.remove("show-submenu");
    }
  });
});

// user management page js

//  District Company Code Managementn pop
document.addEventListener("DOMContentLoaded", function () {
  // 1. Core Native Selects UI Facade Updater Engine
  const syncDropdowns = document.querySelectorAll(".dropdown-sync-trigger");

  syncDropdowns.forEach((selectElement) => {
    selectElement.addEventListener("change", function () {
      const visibleFacade = this.nextElementSibling;
      if (
        visibleFacade &&
        visibleFacade.classList.contains("gl-select-visible-facade")
      ) {
        // Update text view mapping
        visibleFacade.textContent = this.options[this.selectedIndex].text;
        // Strip out grayed placeholder class properties rules
        visibleFacade.classList.remove("text-placeholder-state");
      }
    });
  });

  // 2. Select User Component Toggle Framework logic
  const triggerComponent = document.getElementById(
    "selectUserComponentTrigger",
  );
  const floatingDropdown = document.getElementById("usersListFloatingDropdown");
  const chipsTray = document.getElementById("selectedChipsTray");

  triggerComponent.addEventListener("click", function (e) {
    e.stopPropagation();
    floatingDropdown.classList.toggle("is-active-dropdown");
  });

  floatingDropdown.addEventListener("change", function (e) {
    if (e.target.classList.contains("gl-native-checkbox")) {
      renderChipsFromCheckboxes();
    }
  });

  function renderChipsFromCheckboxes() {
    chipsTray.innerHTML = "";
    const checkedBoxes = floatingDropdown.querySelectorAll(
      ".gl-native-checkbox:checked",
    );

    checkedBoxes.forEach((box) => {
      const userId = box.id;
      const userTextName = box.getAttribute("data-full-name");

      let displayValue = userTextName.split(",")[0];
      if (displayValue.toLowerCase() === "cooper") displayValue = "James Jones";
      if (displayValue.toLowerCase() === "henry") displayValue = "James Hill";

      const chipElement = document.createElement("div");
      chipElement.className = "gl-user-badge-chip";
      chipElement.setAttribute("data-target-id", userId);
      chipElement.innerHTML = `${displayValue} <span class="gl-chip-remove-cross">&times;</span>`;

      chipsTray.appendChild(chipElement);
    });
  }

  chipsTray.addEventListener("click", function (e) {
    if (e.target.classList.contains("gl-chip-remove-cross")) {
      e.stopPropagation();
      const parentChip = e.target.closest(".gl-user-badge-chip");
      const targetCheckboxId = parentChip.getAttribute("data-target-id");

      const targetedBox = document.getElementById(targetCheckboxId);
      if (targetedBox) {
        targetedBox.checked = false;
        renderChipsFromCheckboxes();
      }
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !triggerComponent.contains(e.target) &&
      !floatingDropdown.contains(e.target)
    ) {
      floatingDropdown.classList.remove("is-active-dropdown");
    }
  });
});
//  District Company Code Managementn pop


// help-&-support

document.addEventListener("DOMContentLoaded", function () {
  const accordionContainer = document.getElementById("faqAccordionCustom");

  accordionContainer.addEventListener("show.bs.collapse", function (e) {
    // Find the toggler button relative to the triggered collapse element
    const button = e.target.closest(".faq-item-card").querySelector(".toggle");
    if (button) {
      button.innerHTML = '<i class="fa-solid fa-minus"></i>';
    }
  });

  accordionContainer.addEventListener("hide.bs.collapse", function (e) {
    const button = e.target.closest(".faq-item-card").querySelector(".toggle");
    if (button) {
      button.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
  });
});

// help-&-support


// reviews-rating-page


document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("feedbackSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const closeBtn = document.getElementById("closeSidebarBtn");

  // Sidebar Content Nodes
  const sidebarUserName = document.getElementById("sidebarUserName");
  const sidebarUserAvatar = document.getElementById("sidebarUserAvatar");
  const sidebarMetaSubline = document.getElementById("sidebarMetaSubline");
  const sidebarFeedbackMessage = document.getElementById("sidebarFeedbackMessage");
  const sidebarStarsRow = document.getElementById("sidebarStarsRow");

  // Open Sidebar Dynamic Function
  document.querySelectorAll(".btn-table-action-view-view").forEach(button => {
    button.addEventListener("click", function () {
      const tr = this.closest("tr");

      // Fetch context data attributes from row
      const name = tr.querySelector(".row-name").textContent;
      const img = tr.querySelector("img").getAttribute("src");
      const service = tr.querySelector(".row-service").textContent;
      const rating = parseFloat(tr.querySelector(".rating-stars-badge-zone").getAttribute("data-rating"));
      const date = tr.getAttribute("data-date");
      const msg = tr.getAttribute("data-msg");

      // Inject contents dynamically into sidebar template nodes
      sidebarUserName.textContent = name;
      sidebarUserAvatar.setAttribute("src", img);
      sidebarMetaSubline.textContent = `Submitted on ${date} • ${service}`;
      sidebarFeedbackMessage.textContent = msg;

      // Star rendering engine matrix
      sidebarStarsRow.innerHTML = "";
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement("i");
        if (i <= Math.floor(rating)) {
          star.className = "fa-solid fa-star";
        } else if (i - 0.5 === rating) {
          star.className = "fa-solid fa-star-half-stroke";
        } else {
          star.className = "fa-solid fa-star unfilled";
        }
        sidebarStarsRow.appendChild(star);
      }

      // Smooth Animation Slide Trigger Toggle
      sidebar.classList.add("is-visible");
      overlay.classList.add("is-visible");
    });
  });

  // Close functions
  function closeSidebar() {
    sidebar.classList.remove("is-visible");
    overlay.classList.remove("is-visible");
  }

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

// reviews-rating-page



// ratings-feedback


// Data sets accurately pulled from all 5 states shown inside review-feedback.jpg
const tagsDataMatrix = {
  5: [
    "Highly Responsive", "Well Prepared", "Clear About Needs", "Submitted Materials On Time",
    "Great Communication", "Open to Feedback", "Strong Collaboration", "Proactive", "Easy to Support"
  ],
  4: [
    "Responsive", "Prepared", "Communicated Well", "Mostly On Time",
    "Followed Through", "Open to Feedback", "Collaborative", "Engaged", "Clear Goals"
  ],
  3: [
    "Needed More Preparation", "Needed Clearer Goals", "Communication Could Improve", "Timeline Was Challenging",
    "Follow-Up Was Needed", "Materials Came In Late", "Scope Needed Clarification", "Needed More Responsiveness", "Some Delays"
  ],
  2: [
    "Significant Follow-Up Needed", "Communication Support Needed", "Materials Were Frequently Late", "Goals Were Not Well Defined",
    "Scope Was Difficult To Finalize", "Responsiveness Was Limited", "More Coordination Needed", "Needed More Responsiveness", "Required Repeated Outreach"
  ],
  1: [
    "Service Could Not Progress Smoothly", "Readiness Support Needed", "Additional Intervention Needed", "Reassignment Or Escalation May Be Needed",
    "Major Follow-Up Needed", "Communication Barrier", "Materials Were Not Provided In Time", "Project Timeline Was At Risk", "Could Not Complete As Planned"
  ]
};

// Default 5-star state initial setup values
const defaultNotesMatrix = {
  5: "The grantee was well prepared for each session and came with thoughtful questions. They communicated clearly and responded promptly to messages. Overall, they were engaged and took ownership of their learning. I would be happy to work with them again in the future.",
  4: "", 3: "", 2: "", 1: ""
};

document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.getElementById("ratingStarContainer");
  const tagsContainer = document.getElementById("dynamicTagsContainer");
  const notesArea = document.getElementById("teacherNotesArea");

  let currentSelectedRating = 5;
  let activeSelectedTags = [];

  // Core template rendering controller node
  function renderFeedbackState(ratingValue) {
    tagsContainer.innerHTML = "";
    activeSelectedTags = [];

    // Fetch dynamic text array matching image_aef4e3.png layout states
    const currentTagsList = tagsDataMatrix[ratingValue] || [];
    notesArea.value = defaultNotesMatrix[ratingValue] || "";

    currentTagsList.forEach(tagText => {
      const tagPill = document.createElement("div");
      tagPill.className = "tag-pill-choice";
      tagPill.textContent = tagText;

      // Event trigger listener handling click metrics
      tagPill.addEventListener("click", () => {
        if (tagPill.classList.contains("selected")) {
          // Unselect sequence rules
          tagPill.classList.remove("selected");
          activeSelectedTags = activeSelectedTags.filter(t => t !== tagText);
          evaluateMaxSelectionsGuard();
        } else {
          // Safe insertion sequence ceiling check
          if (activeSelectedTags.length < 3) {
            tagPill.classList.add("selected");
            activeSelectedTags.push(tagText);
            evaluateMaxSelectionsGuard();
          }
        }
      });

      tagsContainer.appendChild(tagPill);
    });
  }

  // Function to handle the 3-tag constraint system
  function evaluateMaxSelectionsGuard() {
    const totalPills = tagsContainer.querySelectorAll(".tag-pill-choice");
    if (activeSelectedTags.length >= 3) {
      totalPills.forEach(pill => {
        if (!pill.classList.contains("selected")) {
          pill.classList.add("disabled-state");
        }
      });
    } else {
      totalPills.forEach(pill => {
        pill.classList.remove("disabled-state");
      });
    }
  }

  // Event handling system for star ratings click mechanics
  starContainer.querySelectorAll("i").forEach(starElement => {
    starElement.addEventListener("click", function () {
      const chosenRating = parseInt(this.getAttribute("data-value"));
      currentSelectedRating = chosenRating;

      // UI Stars updates
      starContainer.querySelectorAll("i").forEach(s => {
        const sVal = parseInt(s.getAttribute("data-value"));
        if (sVal <= chosenRating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });

      // Trigger tag re-generation based on selection index
      renderFeedbackState(chosenRating);
    });
  });

  // Fire engine default init layout setup (5-star execution trigger)
  renderFeedbackState(5);
});

// ratings-feedback



// request-modal

document.addEventListener("DOMContentLoaded", () => {

  // Sequential Interlink Modal Operation execution handling logic
  const executeDeclineChainBtn = document.getElementById('executeDeclineChainBtn');

  // Initializing Bootstrap modal instances safely
  const declineRequestModalEl = document.getElementById('declineRequestModal');
  const serviceDeclinedModalEl = document.getElementById('serviceDeclinedNotificationModal');

  executeDeclineChainBtn.addEventListener('click', () => {
    // Get active instances using Bootstrap static helper
    const modalInstanceDecline = bootstrap.Modal.getInstance(declineRequestModalEl);
    const modalInstanceNotification = new bootstrap.Modal(serviceDeclinedModalEl);

    // Hide the active decline option box form
    modalInstanceDecline.hide();

    // Fire chain load delay to verify native fade execution safety frames
    declineRequestModalEl.addEventListener('hidden.bs.modal', function fireNext() {
      modalInstanceNotification.show();
      // Clear callback references instantly to avoid layout loop triggers
      declineRequestModalEl.removeEventListener('hidden.bs.modal', fireNext);
    });
  });
});

// request-modal