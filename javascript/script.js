// boutton d'allerte
const btn = document.getElementById('btn-message');
btn.addEventListener('click', function() {
    alert('Bienvenue sur mon Portfolio !');
});

// menu responsive
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});