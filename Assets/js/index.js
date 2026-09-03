// Track whether the form has been physically submitted by the user
window.submitted = false;

// Replace this with the deployed Google Apps Script web app URL.
const subscriberCountUrl = "https://script.google.com/macros/s/AKfycbxRyDaB9xIDTpr0y-J0BaNTCgm03N-C4QAbd-vS7Iuhh8jIHwdQV4qTNlnFAe4sitfu/exec";

async function updateSubscriberCount() {
    const countElement = document.getElementById("subscriberCount");

    if (!countElement) {
        return;
    }

    try {
        const response = await fetch(subscriberCountUrl, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        countElement.textContent = Number(data.count).toLocaleString();
    } catch (error) {
        console.error("Unable to update subscriber count:", error);
    }
}

updateSubscriberCount();
setInterval(updateSubscriberCount, 5000);

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
