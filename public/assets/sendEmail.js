document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("from_name");
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("submitButton");
  const popupContainer = document.getElementById("popupContainer");
  const closePopup = document.getElementById("closePopup");

  if (!form || !nameInput || !messageInput || !submitButton) return;

  let emailJsInitialized = false;

  try {
    const response = await fetch("/api/env");
    const data = await response.json();
    if (data.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(data.VITE_EMAILJS_PUBLIC_KEY);
      emailJsInitialized = true;
    }
  } catch (error) {}

  function validateInputs() {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name !== "" && message !== "") {
      submitButton.disabled = false;
      submitButton.classList.remove("bg-gray-300", "text-gray-500", "cursor-not-allowed");
      submitButton.classList.add("bg-transparent", "border-gray-400", "hover:bg-gray-200");
    } else {
      submitButton.disabled = true;
      submitButton.classList.add("bg-gray-300", "text-gray-500", "cursor-not-allowed");
      submitButton.classList.remove("bg-transparent", "border-gray-400", "hover:bg-gray-200");
    }
  }

  nameInput.addEventListener("input", validateInputs);
  messageInput.addEventListener("input", validateInputs);

  submitButton.addEventListener("click", function () {
    if (submitButton.disabled) return;

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) return;

    if (emailJsInitialized) {
      sendEmail(name, message);
    }
  });

  function sendEmail(name, message) {
    emailjs.send("service_id", "template_id", { from_name: name, message: message })
      .then(() => {
        if (popupContainer) popupContainer.classList.remove("hidden");
      })
      .catch(() => {});
  }

  if (closePopup) {
    closePopup.addEventListener("click", function () {
      popupContainer.classList.add("hidden");
    });
  }
});
