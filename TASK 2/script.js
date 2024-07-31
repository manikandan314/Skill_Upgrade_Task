document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    message.textContent = '';
    message.className = '';

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    
    // Validate name
    if (!name) {
      showMessage("Name is required", "error");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      showMessage("Invalid email address", "error");
      return;
    }

    // Success
    showMessage("Form submitted successfully!", "success");
    form.reset(); // Reset form fields
  });

  // Function to show messages
  function showMessage(text, type) {
    message.textContent = text;
    message.id = type;
  }

  // Function to validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
