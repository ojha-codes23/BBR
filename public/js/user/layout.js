// Notification
// document.addEventListener("DOMContentLoaded", function () {
//   const triggerBtn = document.querySelector(".gl-notification-trigger");
//   const dropdownBox = document.getElementById("glNotificationDropdown");

//   if (triggerBtn && dropdownBox) {
//     // Toggle notification status dropdown on click event
//     triggerBtn.addEventListener("click", function (event) {
//       // Prevent event from bubbling up to document listener
//       event.stopPropagation();
//       dropdownBox.classList.toggle("gl-nt-show");
//     });

//     // Ensure internal content clicks do not collapse container unexpectedly
//     dropdownBox.addEventListener("click", function (event) {
//       event.stopPropagation();
//     });

//     // Global dismiss action hook if clicked outside of target components
//     document.addEventListener("click", function () {
//       if (dropdownBox.classList.contains("gl-nt-show")) {
//         dropdownBox.classList.remove("gl-nt-show");
//       }
//     });
//   }
// });




// sign up below sunil comment 

// document.addEventListener("click", function (event) {
//   console.log("DOCUMENT CLICK");

//   const profileTrigger = event.target.closest("#profileTrigger");
//   const profileContainer = document.getElementById("profileContainer");

//   console.log("profileTrigger:", profileTrigger);
//   console.log("profileContainer:", profileContainer);

//   if (!profileContainer) return;

//   if (profileTrigger) {
//     console.log("PROFILE BUTTON CLICKED");

//     event.stopPropagation();
//     profileContainer.classList.toggle("active");
//     return;
//   }

//   if (event.target.closest(".profile-dropdown")) {
//     event.stopPropagation();
//     return;
//   }

//   profileContainer.classList.remove("active");
// });

// Notification

document.addEventListener("click", function (event) {
  const triggerBtn = event.target.closest(".gl-notification-trigger");
  const dropdownBox = document.getElementById("glNotificationDropdown");

  if (!dropdownBox) return;

  // Notification button click
  if (triggerBtn) {
    event.stopPropagation();
    dropdownBox.classList.toggle("gl-nt-show");
    return;
  }

  // Dropdown ke andar click
  if (event.target.closest("#glNotificationDropdown")) {
    event.stopPropagation();
    return;
  }

  // Dropdown ke bahar click
  dropdownBox.classList.remove("gl-nt-show");
});

// Notification

// Notification

// sidebat-toggle

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButtons = document.querySelectorAll(".sidebarToggleBtn");
//   const layoutWrapper = document.getElementById("dashboardLayout");

//   if (toggleButtons.length && layoutWrapper) {
//     toggleButtons.forEach((button) => {
//       button.addEventListener("click", function () {
//         layoutWrapper.classList.toggle("mini-sidebar");
//       });
//     });
//   }
// });

// sidebar-toggle

document.addEventListener("click", function (event) {
  const toggleButton = event.target.closest(".sidebarToggleBtn");
  const layoutWrapper = document.getElementById("dashboardLayout");

  if (toggleButton && layoutWrapper) {
    layoutWrapper.classList.toggle("mini-sidebar");
  }
});

// sidebar-toggle

// sidebat-toggle



