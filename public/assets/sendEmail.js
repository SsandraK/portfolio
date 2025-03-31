window.addEventListener("load", () => {
  const submitButton = document.getElementById("submitButton");

  if (!submitButton) return;

  submitButton.addEventListener("click", () => {
    const subject = encodeURIComponent("Message from Portfolio");
    const email = "solovjov.sandra@gmail.com"; 

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});

