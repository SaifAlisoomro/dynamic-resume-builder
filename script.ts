const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement | null;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Create the resume HTML content
    const resumeHTML = `
        <div class="resume-section">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>

        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>

        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills.split(",").map(skill => `<span class="skill">${skill.trim()}</span>`).join(", ")}</p>
        </div>
    `;

    // Display the resume in the resume display area
    if (resumeDisplay) {
        resumeDisplay.innerHTML = `<h2>Generated Resume</h2>${resumeHTML}`;
    }
});
