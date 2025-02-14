# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### JavaScript Form Validation Notes

**1. Ensuring JavaScript runs after the page loads**

To avoid errors when accessing elements that may not yet exist, I used `DOMContentLoaded`. This ensures that JavaScript is not executed until the entire page has loaded.

```javascript
  document.addEventListener("DOMContentLoaded", function () {
    // Code runs only after the document is ready
  });

```

**2. Selecting elements in the DOM**

To interact with the form elements, I used `document.getElementById("id")` to grab the necessary HTML elements.

```javascript
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

```

**3. Preventing the form from being submitted before validation**

I made sure to use `event.preventDefault()` to make it so that the form doesn't submit straight away until everything's been checked.

```javascript
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stops form from submitting
  });

```

**4. Cleaning Input Values**

I used `.trim()` to get rid of any extra spaces in user input, making sure that spaces at the end or beginning don't affect whether the input is valid or not.

```javascript
  const emailValue = emailInput.value.trim();

```

**5. Implementing Validation Logic**

First, I checked if the email field was empty. This is important because if it was empty, it meant that the user didn't fill out that part of the form. If the field was empty, I showed an error message to ask the user to enter an email address. If the field had some input in it, I then checked that the format of the email address was correct. I used a regular expression (through the `isValidEmail` function) to do this, which checks for common patterns of an email address, like the presence of an "@" symbol and a domain name. If the format didn't match the expected pattern, I showed an error message to tell the user that they need to enter a valid email address.

If both checks passed – meaning the email wasn't empty and followed the correct format – I cleared any previous error messages and showed a confirmation alert to say the form had been successfully submitted.

```javascript
  if (emailValue === "") {
    showError(emailInput, emailError, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, emailError, "Please enter a valid email address");
  } else {
    clearError(emailInput, emailError);
    alert("Form submitted successfully!");
  }

```

**6. Validating Email Format with RegExp**

I used a Regular Expression (RegExp) to check if the email format was correct before allowing form submission.

```javascript
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

```

**Pattern Breakdown:**

-   `^[^\s@]+` → Ensures the email starts with valid characters (no spaces or `@`).
-   `@[^\s@]+` → Requires an `@` symbol followed by valid characters.
-   `\.[^\s@]+$` → Ensures the email ends with a period (`.`) followed by valid characters (like `.com`).

**7. Displaying Error Messages**

To provide users with feedback, I used `textContent` to insert an error message inside a `<span>` element. Additionally, I added a CSS class (`.input--error`) to highlight the problematic field.

```javascript
  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("input--error");
  }

```

**8. Clearing Error Messages**

Once the user provides valid input, I removed the error message and the `.input--error` class to return the input field to its normal state.

```javascript
  function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("input--error");
  }

```

### Continued development



### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
