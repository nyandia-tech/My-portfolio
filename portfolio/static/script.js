// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

// Validation rules
const validators = {
    name: {
        validate: (value) => value.trim().length >= 2,
        errorMsg: 'Name must be at least 2 characters'
    },
    email: {
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        errorMsg: 'Please enter a valid email address'
    },
    subject: {
        validate: (value) => value.trim().length >= 3,
        errorMsg: 'Subject must be at least 3 characters'
    },
    message: {
        validate: (value) => value.trim().length >= 10,
        errorMsg: 'Message must be at least 10 characters'
    }
};

// Validate individual field
function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value;
    const validator = validators[fieldName];
    const errorElement = document.getElementById(`${fieldName}Error`);

    if (!validator) return true;

    const isValid = validator.validate(fieldValue);
    
    if (!isValid) {
        errorElement.textContent = validator.errorMsg;
        errorElement.classList.add('show');
        field.style.borderColor = '#f87171';
        return false;
    } else {
        errorElement.classList.remove('show');
        field.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        return true;
    }
}

// Real-time validation
nameInput.addEventListener('blur', () => validateField(nameInput));
emailInput.addEventListener('blur', () => validateField(emailInput));
subjectInput.addEventListener('blur', () => validateField(subjectInput));
messageInput.addEventListener('blur', () => validateField(messageInput));

// Clear error on focus
[nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    field.addEventListener('focus', () => {
        const errorElement = document.getElementById(`${field.name}Error`);
        errorElement.classList.remove('show');
        field.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const fields = [nameInput, emailInput, subjectInput, messageInput];
    const allValid = fields.every(field => validateField(field));

    if (allValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Here you would typically send the form data to your Django backend
            // Example: fetch('/api/contact/', { method: 'POST', body: formData })
            
            formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');

            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('success');
                formMessage.textContent = '';
            }, 5000);
        }, 1500);
    } else {
        formMessage.textContent = 'Please fix the errors above';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add smooth scroll offset for sticky navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PROJECT LINKS HANDLER
// ============================================

// You can enhance this to dynamically load project data
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const rawHref = link.getAttribute('href');
        if (!rawHref || rawHref === '#') {
            e.preventDefault();
            alert('Project link not yet configured. Update the href attribute.');
        }
    });
});

// ============================================
// DYNAMIC CONTENT LOADER
// ============================================

// Function to load portfolio content from JSON or API
async function loadPortfolioContent() {
    try {
        // Example: fetch('/api/portfolio-data/')
        // For now, you can manually update the portfolio content
        // or integrate with your Django backend
        console.log('Portfolio content loaded');
    } catch (error) {
        console.error('Error loading portfolio content:', error);
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioContent();
    updateActiveNavLink();
});

// ============================================
// ENHANCED USER EXPERIENCE
// ============================================

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .project-link, .submit-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Log page interactions for analytics
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent % 25 === 0) {
        // You can log analytics here
        // console.log(`Scrolled: ${Math.round(scrollPercent)}%`);
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const currentSection = window.location.hash.slice(1) || 'home';
        const currentIndex = sections.indexOf(currentSection);

        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            e.preventDefault();
            window.location.hash = sections[currentIndex + 1];
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            window.location.hash = sections[currentIndex - 1];
        }
    }
});

console.log('Portfolio website loaded successfully!');
