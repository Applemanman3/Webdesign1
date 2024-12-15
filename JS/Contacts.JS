document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const feedback = document.getElementById('feedback');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
  
    if (!name || !email || !date) {
      feedback.textContent = "Please fill in all required fields.";
      feedback.style.color = "red";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = "Please enter a valid email.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Form submitted successfully!";
      feedback.style.color = "green";
      this.reset();
    }
  });

