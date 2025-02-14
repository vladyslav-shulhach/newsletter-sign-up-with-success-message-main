document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const emailValue = emailInput.value.trim();
      if (emailValue === "") {
        showError(emailInput, emailError, "Email cannot be empty");
      } else if (!isValidEmail(emailValue)) {
        showError(emailInput, emailError, "Please enter a valid email address");
      } else {
        clearError(emailInput, emailError);
        alert("Form submitted successfully!"); // Replace with your actual action
      }
    });
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function showError(input, errorElement, message) {
      errorElement.textContent = message;
      input.classList.add("input--error");
    }
  
    function clearError(input, errorElement) {
      errorElement.textContent = "";
      input.classList.remove("input--error");
    }
  });
  