function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); //Close modal 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event listener
closeBtn.addEventListener("click", closeModal);

// Close modal function
function closeModal() {
  modalbg.style.display = "none";
}


// Validate function

function validate() {
  // Fetch values of first and last name fields
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var email = document.getElementById ("email").value;

  // Check if the first name is at least 2 characters long
  if (firstName.length < 2) {
    alert("Le champ Prénom doit contenir au moins 2 caractères.");
    return false; 
  }

  // Check if the last name is at least 2 characters long
  if (lastName.length < 2) {
    alert("Le champ Nom doit contenir au moins 2 caractères.");
    return false; 
  }

  // Email validation with regex pattern
  var emailAdress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailAdress.test(email)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return false;
  }


  return true;
}



