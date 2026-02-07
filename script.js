const menuIcon = document.getElementById('setting-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
