// Get the elements
const openLoginBtn = document.getElementById("openLoginPopup");
const loginPopup = document.getElementById("loginPopup");
const closePopupBtn = document.getElementById("closePopup");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

// When the user clicks the "Sign In" button, open the popup
openLoginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

// When the user clicks the close button, close the popup
closePopupBtn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

// When the user clicks outside the popup, close the popup
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulating a login check (In a real-world scenario, you'd check this with a database)
  const storedUser = localStorage.getItem(username);

  if (!storedUser) {
    errorMessage.textContent = "User not found!";
    successMessage.textContent = "";
    return;
  }

  const user = JSON.parse(storedUser);

  if (user.password !== password) {
    errorMessage.textContent = "Incorrect password!";
    successMessage.textContent = "";
    return;
  }

  successMessage.textContent = `Welcome back, ${username}!`;
  errorMessage.textContent = "";
  setTimeout(() => {
    loginPopup.style.display = "none";
  }, 2000); // Close the popup after 2 seconds
});
