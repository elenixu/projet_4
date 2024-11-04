// Function to toggle the navigation menu
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Event listener for the main navigation
let mainNavbar = document.querySelector(".main-navbar");
mainNavbar.addEventListener("click", editNav);


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close"); // Close modal

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event listener
closeBtn.addEventListener("click", closeModal);

// Close modal function
function closeModal() {
  modalbg.style.display = "none";
}



// Validate function to display in-form error messages
function validate() {
  let isValid = true; // Flag to check if the form is valid

  // Helper function to show error message below an input
  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const formData = input.closest(".formData");
    formData.setAttribute("data-error", message);
    formData.setAttribute("data-error-visible", "true");
    isValid = false; // Set form as invalid
  }

  // Helper function to clear the error message
  function clearError(inputId) {
    const input = document.getElementById(inputId);
    const formData = input.closest(".formData");
    formData.removeAttribute("data-error");
    formData.setAttribute("data-error-visible", "false");
  }

  // Fetch values of first and last name fields
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let quantity = document.getElementById("quantity").value;
  let birthdate = document.getElementById("birthdate").value;

  // First Name Validation
  if (firstName.length < 2) {
    showError("first", "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
  } else {
    clearError("first");
  }

  // Last Name Validation
  if (lastName.length < 2) {
    showError("last", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    clearError("last");
  }

  // Email Validation with regex pattern
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    showError("email", "Veuillez saisir une adresse e-mail valide.");
  } else {
    clearError("email");
  }

  // Birthdate Validation
  if (!birthdate) {
    showError("birthdate", "Vous devez entrer votre date de naissance.");
  } else {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    if (birthDateObj > today) {
      showError("birthdate", "La date de naissance ne peut pas être dans le futur.");
    } else {
      clearError("birthdate");
    }
  }

  // Quantity Validation
  if (quantity === "" || isNaN(quantity) || quantity < 0 || quantity > 99) {
    showError("quantity", "Veuillez entrer un nombre entre 0 et 99 pour le nombre de concours.");
  } else {
    clearError("quantity");
  }

  // Location Validation
  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    showError("location1", "Vous devez choisir une option.");
  } else {
    clearError("location1");
  }

  // Terms and Conditions Validation
  const termsAccepted = document.getElementById("checkbox1").checked;
  if (!termsAccepted) {
    showError("checkbox1", "Vous devez vérifier que vous acceptez les termes et conditions.");
  } else {
    clearError("checkbox1");
  }

  return isValid; // Returns true if form is valid, false otherwise
}

// Add submit event listener to form
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent form submission if validation fails
  if (!validate()) {
    event.preventDefault(); // Prevents form from submitting
  }
});
