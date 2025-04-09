// script.js

// Get modal and elements
const modal = document.getElementById("loginModal");
const signInBtn = document.getElementById("signInBtn");
const closeBtn = document.getElementById("closeBtn");
const loginForm = document.getElementById("loginForm");

// Check if user is already logged in
if (localStorage.getItem("username")) {
    // If user is logged in, show username instead of Sign In button
    signInBtn.innerHTML = `<a href="#">Hi, ${localStorage.getItem("username")}</a>`;
}

// Open the modal when clicking the "Sign In" button
signInBtn.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();
    modal.style.display = "block";
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if clicked outside of the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save user data to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Change "Sign In" button to "Hi [username]"
    signInBtn.innerHTML = `<a href="#">Hi, ${username}</a>`;

    // Close the modal
    modal.style.display = "none";
});
