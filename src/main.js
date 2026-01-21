// Inizializzazione icone Lucide
lucide.createIcons();

// Gestione Scroll Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Mobile Menu Toggle (Basic logic per ora)
const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    // Qui aggiungeremo l'animazione GSAP nel prossimo step per il menu
    console.log('Mobile menu toggled');
});

// Smooth scroll per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});