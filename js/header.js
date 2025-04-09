// Get modal, button, and close elements
const signInModal = document.getElementById("signInModal");
const signInBtn = document.getElementById("signInBtn");
const closeBtn = document.getElementById("closeBtn");

// Open the modal when the "SIGN IN" button is clicked
signInBtn.addEventListener("click", () => {
    signInModal.style.display = "block";
});

// Close the modal when the "X" button is clicked
closeBtn.addEventListener("click", () => {
    signInModal.style.display = "none";
});

// Close the modal if clicked outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = "none";
    }
});

// Handle form submission
const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // You can process the form data here (e.g., send to a server or save locally)
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulate a successful login or registration (for demonstration)
    alert("Successfully Signed In!");

    // Close the modal after submission
    signInModal.style.display = "none";
});
