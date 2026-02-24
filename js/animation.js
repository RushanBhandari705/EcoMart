// animations.js - External JavaScript for Animations and Interactive Features

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Create floating "Back to Top" button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2e7d32;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
    `;
    button.id = 'backToTop';
    button.onclick = scrollToTop;
    document.body.appendChild(button);

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
        }
    });
}

// Parallax effect for featured section
function initParallaxEffect() {
    const featured = document.querySelector('.featured');
    if (!featured) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        if (featured) {
            featured.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Reading progress bar
function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #2e7d32, #4caf50);
        width: 0%;
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    progressBar.id = 'readingProgress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.pageYOffset / documentHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Lazy loading images with fade-in effect
function initLazyLoading() {
    const images = document.querySelectorAll('.blog-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    images.forEach(img => imageObserver.observe(img));
}

// Typing effect for header
function typingEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Card entrance animation on scroll
function initScrollAnimations() {
    const cards = document.querySelectorAll('.blog-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
}

// Mouse trail effect
function createMouseTrail() {
    const trail = [];
    const trailLength = 15;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(46, 125, 50, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.remove();
        }
        
        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
        }, 100);
        
        setTimeout(() => {
            dot.remove();
        }, 400);
    });
}

// Easter egg: Konami code
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Make everything green with animation
    document.body.style.transition = 'all 2s ease';
    document.body.style.background = 'linear-gradient(135deg, #1b5e20, #2e7d32)';
    
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 50);
    }
    
    // Show message
    const message = document.createElement('div');
    message.textContent = '🌱 You found the secret! You\'re a true eco-warrior! 🌱';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 15px;
        font-size: 24px;
        font-weight: bold;
        color: #2e7d32;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        animation: bounce 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transition = 'all 0.5s ease';
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => message.remove(), 500);
        
        document.body.style.background = 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)';
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = ['🌿', '🌱', '♻️', '🌍', '💚'][Math.floor(Math.random() * 5)];
    confetti.style.cssText = `
        position: fixed;
        font-size: 30px;
        left: ${Math.random() * 100}vw;
        top: -50px;
        z-index: 9999;
        pointer-events: none;
        animation: confettiFall ${2 + Math.random() * 3}s linear;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}

// Add keyframe animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
    }
`;
document.head.appendChild(style);

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createBackToTopButton();
    createReadingProgressBar();
    initLazyLoading();
    initScrollAnimations();
    initKonamiCode();
    
    // Optional: Uncomment for mouse trail effect (can be distracting)
    // createMouseTrail();
    
    // Optional: Uncomment for parallax effect
    // initParallaxEffect();
});

// Export functions for use in main HTML
window.scrollAnimations = {
    scrollToTop,
    typingEffect,
    createConfetti
};