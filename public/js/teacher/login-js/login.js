
    // OTP JS
    const inputs = document.querySelectorAll('.otp-input-box');

        inputs.forEach((input, index) => {
            // Jab user number type karega
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                
                // Sirf single digit hi allow karne ke liye
                if (value.length > 1) {
                    e.target.value = value.slice(0, 1);
                }

                // Agar box me text aa gaya hai, toh next box par focus shift karo
                if (e.target.value !== "" && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            // Jab user backspace dabae (Pichle box me jane ke liye)
            input.addEventListener('keydown', (e) => {
                if (e.key === "Backspace") {
                    // Agar current input pehle se khali hai, toh pichle box par jao aur usey khali karo
                    if (e.target.value === "" && index > 0) {
                        inputs[index - 1].focus();
                        inputs[index - 1].value = "";
                    }
                }
            });
        });
// OTP JS


// login password toggle

// document.getElementById('password-toggle-btn').addEventListener('click', function () {
//         const passwordInput = document.getElementById('District-password');
//         const eyeIcon = document.getElementById('eye-icon-img');
        
//         if (passwordInput.type === 'password') {
//             // Password ko show karo
//             passwordInput.type = 'text';
//             // Icon badal ke eye-open kar do
//             eyeIcon.src = 'images/login/eye-open.svg';
//             eyeIcon.alt = 'Hide Password';
//         } else {
//             // Password ko hide karo
//             passwordInput.type = 'password';
//             // Icon badal ke eye-close kar do
//             eyeIcon.src = 'images/login/eye-close.svg';
//             eyeIcon.alt = 'Show Password';
//         }
//     });
    // login password toggle


    /* ==========================================================================
   GRANTLINK AUTH SYSTEM: UNIVERSAL PASSWORD TOGGLE VISIBILITY ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    
    // Sabhi toggle triggers ko select karo classes ke throw
    const toggleButtons = document.querySelectorAll('.login-password-eye-icon');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Is button ke parent element ke andar hi input aur img ko dhoondo
            const fieldWrapper = this.closest('.login-input-field-wrapper');
            const passwordInput = fieldWrapper.querySelector('input');
            const eyeIcon = this.querySelector('img');

            if (passwordInput.type === 'password') {
                // Password show karo
                passwordInput.type = 'text';
                eyeIcon.src = 'images/login/eye-open.svg';
                eyeIcon.alt = 'Hide Password';
            } else {
                // Password hide karo
                passwordInput.type = 'password';
                eyeIcon.src = 'images/login/eye-close.svg';
                eyeIcon.alt = 'Show Password';
            }
        });
    });

});

/* ==========================================================================
   END OF: UNIVERSAL PASSWORD TOGGLE VISIBILITY ENGINE
   ========================================================================== */




