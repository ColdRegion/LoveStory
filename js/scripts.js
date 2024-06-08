// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.event');
    let currentSection = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentSection = Math.min(sections.length - 1, currentSection + 1);
        } else {
            currentSection = Math.max(0, currentSection - 1);
        }
        scrollToSection(currentSection);
    });
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        easingcss3: 'ease-in-out',
        loopBottom: true
    });
});
