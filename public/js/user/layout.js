// Notification
document.addEventListener("DOMContentLoaded", function () {
  const triggerBtn = document.querySelector(".gl-notification-trigger");
  const dropdownBox = document.getElementById("glNotificationDropdown");

  if (triggerBtn && dropdownBox) {
    // Toggle notification status dropdown on click event
    triggerBtn.addEventListener("click", function (event) {
      // Prevent event from bubbling up to document listener
      event.stopPropagation();
      dropdownBox.classList.toggle("gl-nt-show");
    });

    // Ensure internal content clicks do not collapse container unexpectedly
    dropdownBox.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    // Global dismiss action hook if clicked outside of target components
    document.addEventListener("click", function () {
      if (dropdownBox.classList.contains("gl-nt-show")) {
        dropdownBox.classList.remove("gl-nt-show");
      }
    });
  }
});

// Notification

// sidebat-toggle

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".sidebarToggleBtn");
  const layoutWrapper = document.getElementById("dashboardLayout");

  if (toggleButtons.length && layoutWrapper) {
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        layoutWrapper.classList.toggle("mini-sidebar");
      });
    });
  }
});

// sidebat-toggle
