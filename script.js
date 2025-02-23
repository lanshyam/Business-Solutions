// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "Y6Uq3p0210cTGLK_5",
    });
})();

// Function to send email
function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_h2j7jef", "template_qzix49p", parms)
        .then(function(response) {
            alert("Email has been delivered");
        }, function(error) {
            alert("Failed to send email: " + error.text);
        });
}