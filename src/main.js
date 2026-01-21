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
// Animazione Hero con GSAP e SplitType
const heroTitle = new SplitType('#hero-title', { types: 'words, chars' });

gsap.from(heroTitle.chars, {
    opacity: 0,
    y: 50,
    rotateX: -90,
    stagger: 0.02,
    duration: 1,
    ease: "back.out(1.7)",
});

gsap.from(".hero__subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.8,
    ease: "power2.out"
});

gsap.from(".hero__actions", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});

gsap.from(".hero__visual", {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    delay: 0.5,
    ease: "expo.out"
});
// Registrazione plugin
gsap.registerPlugin(ScrollTrigger);

// Animazione Sezione About
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

aboutTl.from(".about__content", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".info-card", {
    y: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
}, "-=0.5");
// Animazione Cards Innovazione
gsap.from(".innov-card", {
    scrollTrigger: {
        trigger: ".innovation__grid",
        start: "top 75%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});

// Effetto parallasse leggero sulle card durante lo scroll
document.querySelectorAll('.innov-card').forEach(card => {
    const speed = card.getAttribute('data-speed') || 1;
    
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: (i, target) => -20 * speed,
        ease: "none"
    });
});
// Animazione Sezione Blog
gsap.from(".blog-card", {
    scrollTrigger: {
        trigger: ".blog__grid",
        start: "top 80%",
    },
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -30 : 30), // Alterna entrata da destra e sinistra
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out"
});