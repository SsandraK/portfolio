document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.querySelector("#projects-grid");
    const projectModal = document.querySelector("#project-modal");
    const projectTitle = document.querySelector("#project-modal-title");
    const projectImage = document.querySelector("#project-modal-image");
    const projectVideo = document.querySelector("#project-modal-video");
    const projectDescription = document.querySelector("#project-modal-description");
    const projectMediaContainer = document.querySelector("#project-media-container");

    if (!projectGrid || !projectModal || !projectTitle || !projectImage || !projectVideo || !projectDescription || !projectMediaContainer) {
        console.error("Error: Project elements not found!");
        return;
    }

    projectGrid.addEventListener("click", (event) => {
        const projectCard = event.target.closest("[data-project-title]");
        if (!projectCard) return;

        const title = projectCard.getAttribute("data-project-title");
        const description = projectCard.getAttribute("data-project-description");
        const image = projectCard.getAttribute("data-project-image");
        const videoUrl = projectCard.getAttribute("data-project-video");

        projectTitle.textContent = title;
        projectDescription.textContent = description;
        projectImage.src = image;
        projectImage.classList.remove("hidden");

        if (videoUrl) {
            projectVideo.src = videoUrl;
            projectVideo.classList.remove("hidden");

            projectMediaContainer.classList.add("lg:grid", "lg:grid-cols-2", "lg:gap-10");
            projectMediaContainer.classList.remove("flex", "flex-col", "items-center");

            // image and video size
            projectImage.classList.add("max-w-[500px]", "sm:max-w-[600px]");
            projectVideo.classList.add("max-w-[500px]", "sm:max-w-[600px]");
        } else {
            projectVideo.classList.add("hidden");

            projectMediaContainer.classList.remove("lg:grid", "lg:grid-cols-2");
            projectMediaContainer.classList.add("flex", "flex-col", "items-center");
            
            projectImage.classList.remove("max-w-[500px]", "sm:max-w-[600px]");
            projectImage.classList.add("max-w-[700px]", "sm:max-w-[900px]");
        }

        projectModal.classList.remove("hidden", "opacity-0");
        projectModal.classList.add("flex", "opacity-100");
    });

   
    projectModal.addEventListener("click", (event) => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

 
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeProjectModal();
        }
    });

    function closeProjectModal() {
        projectModal.classList.remove("opacity-100");
        projectModal.classList.add("opacity-0");
        setTimeout(() => {
            projectModal.classList.add("hidden");
            projectVideo.src = ""; 
        }, 300);
    }
});
