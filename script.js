const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    navLinks.style.transform = 'translateY(0)';
});

closeBtn.addEventListener('click', () => {
    navLinks.style.transform = 'translateY(-100%)';
});
