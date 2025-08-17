// Countdown Timer
function startCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    let hours = 0;
    let minutes = 17;
    let seconds = 56;
    
    function updateCountdown() {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            // Reset countdown when it reaches zero
            hours = 0;
            minutes = 17;
            seconds = 56;
        }
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// Carousel functionality
function initCarousel() {
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function updateCarousel() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % dots.length;
        updateCarousel();
    }
    
    // Auto-advance carousel every 3 seconds
    setInterval(nextSlide, 3000);
    
    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
}

// Smooth scrolling for CTA buttons
function initSmoothScrolling() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Scroll to pricing section or show alert
            const urgencySection = document.querySelector('.urgency');
            if (urgencySection) {
                urgencySection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            
            // Add pulse animation to the button
            button.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                button.style.animation = '';
            }, 600);
        });
    });
}

// Video placeholder click handlers
function initVideoPlaceholders() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            // Simulate video play (in a real implementation, you'd embed actual videos)
            const playButton = placeholder.querySelector('.play-button');
            if (playButton) {
                playButton.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    playButton.style.transform = 'scale(1)';
                }, 150);
            }
            
            // Show alert for demo purposes
            alert('Vídeo seria reproduzido aqui. Esta é uma demonstração do clone.');
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Random number animation for social proof
function initSocialProof() {
    const socialProofElement = document.getElementById('andersonmak_pessoas');
    if (!socialProofElement) return;
    
    let baseNumber = 1247;
    
    function updateSocialProof() {
        const randomIncrease = Math.floor(Math.random() * 24);
        const newNumber = baseNumber + randomIncrease;
        socialProofElement.textContent = newNumber.toLocaleString();
        
        // Schedule next update
        const nextUpdate = Math.floor(Math.random() * 2500) + 1000;
        setTimeout(updateSocialProof, nextUpdate);
    }
    
    // Start the social proof animation
    updateSocialProof();
}

// Form validation (if forms are added)
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                } else {
                    input.style.borderColor = '#D1D5DB';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                alert('Formulário enviado com sucesso! (Esta é uma demonstração)');
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Add hover effects to cards
function initHoverEffects() {
    const cards = document.querySelectorAll('.result-item, .benefit, .feature-card, .bonus-card, .audience-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
}

// Add CSS for pulse animation
function addPulseAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addPulseAnimation();
    startCountdown();
    initCarousel();
    initSmoothScrolling();
    initVideoPlaceholders();
    initScrollAnimations();
    initSocialProof();
    initFormValidation();
    initLazyLoading();
    initHoverEffects();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6B46C1 0%, #9333EA 100%);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(107, 70, 193, 0.3);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(10px)';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'translateY(-3px) scale(1.1)';
        scrollButton.style.boxShadow = '0 8px 25px rgba(107, 70, 193, 0.4)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'translateY(0) scale(1)';
        scrollButton.style.boxShadow = '0 5px 15px rgba(107, 70, 193, 0.3)';
    });
}

// Initialize scroll-to-top after DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Add mobile menu functionality (if needed)
function initMobileMenu() {
    // This would be used if there was a navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

