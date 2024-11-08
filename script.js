var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Create the resume HTML content
    var resumeHTML = "\n        <div class=\"resume-section\">\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <p>").concat(skills.split(",").map(function (skill) { return "<span class=\"skill\">".concat(skill.trim(), "</span>"); }).join(", "), "</p>\n        </div>\n    ");
    // Display the resume in the resume display area
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "<h2>Generated Resume</h2>".concat(resumeHTML);
    }
});
