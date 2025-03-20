


//*** Email JS ***/
const btn = document.getElementById('button');
const popup = document.getElementById('popupContainer');
const closePopup = document.getElementById('closePopup');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.textContent = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_8p2lado';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.textContent = 'Submit';
        
        popup.classList.remove('hidden');
        popup.classList.add('opacity-100');

        this.reset();

      }, (err) => {
        btn.textContent = 'Submit';
        alert('Error: ' + JSON.stringify(err));
      });
  });

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});




document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
