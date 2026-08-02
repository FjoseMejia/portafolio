document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll('section[id]');

    const navLinks = document.querySelectorAll('.navbar-menu a');

    function highlightNavLink() {
        let currentSectionId = 'inicio';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    window.addEventListener('load', highlightNavLink);
});
