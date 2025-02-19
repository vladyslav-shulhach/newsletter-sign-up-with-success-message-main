document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  const subscriptionSection = document.querySelector(".content");
  const successMessage = document.querySelector(".success-message");
  const dismissButton = document.querySelector(".success-message__button");

  // Hide the success message initially
  successMessage.style.display = "none";

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, emailError, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, emailError, "Please enter a valid email address");
    } else {
      clearError(emailInput, emailError);
      showSuccessMessage();
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("signup-form__input--error");
  }

  function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("signup-form__input--error");
  }

  function showSuccessMessage() {
    subscriptionSection.style.display = "none"; // Hide subscription section
    successMessage.style.display = "grid"; // Show success message
  }

  dismissButton.addEventListener("click", function () {
    successMessage.style.display = "none"; // Hide success message
    subscriptionSection.style.display = "block"; // Show subscription form again
  });
});
