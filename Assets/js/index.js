// Track whether the form has been physically submitted by the user
window.submitted = false;

function showRegistrationProgress() {
    window.submitted = true;

    const status = document.getElementById("status");
    status.className = "status is-loading";
    status.textContent = "";
    status.setAttribute("aria-label", "Registering your email");
}

function handleFormSuccess() {
    // Display your custom confirmation message
    const status = document.getElementById("status");
    status.className = "status";
    status.textContent = "SIGNAL RECEIVED — YOU'RE ON THE LIST";
    status.removeAttribute("aria-label");

    // Clear the text input box
    const form = document.getElementById("notifyForm");
    form.reset();

    // Reset the submission flag so they can enter a different email if needed
    window.submitted = false;
}
