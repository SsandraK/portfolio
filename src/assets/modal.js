document.addEventListener('DOMContentLoaded', () => {
  
    const aboutMeSection = document.querySelector('[data-aboutme]');
    const aboutMeModal = document.querySelector('[data-aboutme-modal]');
    const aboutStop = document.querySelector('[data-aboutme-stop]');
    const aboutInfo = document.querySelector('#about-info');

    if (!aboutMeSection || !aboutMeModal || !aboutStop || !aboutInfo) {
        console.error("Error: About Me elements not found!");
        return;
    }

    aboutMeSection.addEventListener('click', () => {
        aboutInfo.innerHTML = `
            <p>${aboutMeContent}</p>
            <p>${freeTimeContent}</p>
            <p>${tennisContent}</p>
            <p>${singingContent}</p>
          
        `;
        aboutMeModal.classList.remove('hidden', 'opacity-0');
        aboutMeModal.classList.add('flex', 'opacity-100');
    });
  
    aboutMeModal.addEventListener('click', (event) => {
        if (event.target === aboutMeModal) {
            closeAboutMeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeAboutMeModal();
        }
    });

    function closeAboutMeModal() {
        aboutMeModal.classList.remove('opacity-100');
        aboutMeModal.classList.add('opacity-0');
        setTimeout(() => {
            aboutMeModal.classList.remove('flex');
            aboutMeModal.classList.add('hidden');
        }, 300); 
    }

    aboutMeSection.addEventListener('click', () => {
        aboutInfo.innerHTML = `
        <!-- About Me Section -->
        <div class="flex flex-col md:flex-row items-center gap-6">
            <img src="/images/me.png" alt="Me" class="w-[250px] h-[300px] sm:w-[350px] sm:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[500px] xl:h-[550px] rounded-lg shadow-lg border-4 border-orange-300 transition-transform duration-300 hover:scale-110">
            <p class="text-gray-700 dark:text-white text-lg max-w-lg">${aboutMeContent}</p>
        </div>
        
        <!-- Free Time Section -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-6 mt-6">
            <img src="/images/travel1.png" alt="Books" class="w-[250px] h-[300px] sm:w-[350px] sm:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[500px] xl:h-[550px] rounded-lg shadow-lg border-4 border-orange-300 transition-transform duration-300 hover:scale-110">
            <p class="text-gray-700 dark:text-white text-lg max-w-lg">${freeTimeContent}</p>
        </div>
        
         <!-- Tennis Section -->
        <div class="flex flex-col md:flex-row items-center gap-6 mt-6">
        <img src="/images/group_tennis.jpeg" alt="Tennis" class="w-[400px] sm:w-[450px] lg:w-[500px] xl:w-[550px] rounded-lg shadow-lg border-4 border-orange-300 object-cover transition-transform duration-300 hover:scale-110">
        <p class="text-gray-700 dark:text-white text-lg max-w-lg">${tennisContent}</p>
    </div>
        
       <!-- Singing Section -->
     <div class="flex flex-col md:flex-row-reverse items-center gap-6 mt-6">
        <img src="/images/singing.png" alt="Singing" class="w-[400px] sm:w-[450px] lg:w-[500px] xl:w-[550px] rounded-lg shadow-lg border-4 border-orange-300 object-cover transition-transform duration-300 hover:scale-110">
        <p class="text-gray-700 dark:text-white text-lg max-w-lg">${singingContent}</p>
    </div>
        `;
        
    
        aboutMeModal.classList.remove('hidden', 'opacity-0');
        aboutMeModal.classList.add('flex', 'opacity-100');
    });



    const aboutMeContent = `Hi! 👋 My name is <strong>Sandra</strong>. I started my coding journey in 2022 with JavaScript by taking an online course on Udemy. I was both inspired and a bit confused by coding, which motivated me to dive deeper and study it in school. Fortunately, I discovered <strong>kood/Jõhvi</strong>, a hands-on coding program that allowed me to grow as a developer.
    Thanks to this experience, I realized that I am highly <strong>consistent, motivated, and focused</strong> on completing projects from start to finish.
    In this portfolio page, I have added some projects I have done. Go ahead and have a little scroll! &#128522;`;

    const freeTimeContent = `🌿 In my free time, I love spending time with my family, hiking, gardening, and exploring new places. I have a passion for discovering hidden gems and immersing myself in different cultures. I also enjoy reading travel novels and self-development books, always looking for inspiration and personal growth.`;

    const singingContent = `🎵 Since coding improves my brain and tennis strengthens my body, I wanted something for my soul as well. So last year, I joined the <strong>Põlva Mixed Choir</strong> - Põlva Segakoor.`;

    const tennisContent = `🎾 I have been a proud member of <strong>Põlva Tenniseklubi</strong> since 2022. I practice tennis at least twice a week and have even inspired my family members to start playing it.`;
});
    