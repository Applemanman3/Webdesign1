// Attach an event listener to the 'submit' event of the contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the form from being submitted and reloading the page

  // Get references to the feedback element and form input values
  const feedback = document.getElementById('feedback');
  const name = document.getElementById('name').value.trim(); // Get the trimmed value of the name input
  const email = document.getElementById('email').value.trim(); // Get the trimmed value of the email input
  const date = document.getElementById('date').value; // Get the value of the date input

  // Check if any required fields are missing
  if (!name || !email || !date) {
      feedback.textContent = "Please fill in all required fields."; // Error message for missing fields
      feedback.style.color = "red"; // Red text color for error message
  } 
  // Check if the email address format is valid using a regular expression
  else if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = "Please enter a valid email."; // Error message for invalid email format
      feedback.style.color = "red"; // Red text color for error message
  } 
  // If all validations pass, display a success message and reset the form
  else {
      feedback.textContent = "Form submitted successfully!"; // Success message
      feedback.style.color = "green"; // Green text color for success message
      this.reset(); // Reset the form fields
  }
});