const skillsContainer = document.querySelector('.skills-container');

skillsContainer.addEventListener('mouseenter', () => {
    skillsContainer.style.animationPlayState = 'paused';
});

skillsContainer.addEventListener('mouseleave', () => {
    skillsContainer.style.animationPlayState = 'running';
});
