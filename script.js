
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    

    emailjs.sendForm(
      "service_vt05x3t",     // Replace with your actual service ID
      "template_uvtm1dn",    // Replace with your actual template ID
      form
    ).then(
      function () {
        alert("Message sent successfully!");
        console.log("Message sent");
        form.reset(); // optional: clear form
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("Error:", error);
      }
    );
  });
});
