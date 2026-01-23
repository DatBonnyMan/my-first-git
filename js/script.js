// Portfolio JavaScript - Complete Working Version
console.log("Portfolio JavaScript loaded");

// ===== DARK/LIGHT MODE TOGGLE =====
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        console.log("Dark mode button not found");
        return;
    }
    
    console.log("Dark mode button found, adding functionality");
    
    // Check for saved theme or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (currentTheme === 'dark' || (!currentTheme && prefersDark.matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }
    
    // Add click event
    themeToggle.addEventListener('click', function() {
        console.log("Theme toggle clicked");
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            this.textContent = '☀️ Light Mode';
            console.log("Switched to dark mode");
        } else {
            localStorage.setItem('theme', 'light');
            this.textContent = '🌙 Dark Mode';
            console.log("Switched to light mode");
        }
    });
    
    // Add dark theme CSS
    const darkThemeStyles = `
        .dark-theme {
            background-color: #0f172a;
            color: #e2e8f0;
        }
        
        .dark-theme .navbar {
            background: #0f172a;
        }
        
        .dark-theme .project-card {
            background: #1e293b;
            border-color: #334155;
            color: #e2e8f0;
        }
        
        .dark-theme .project-card p {
            color: #cbd5e1;
        }
        
        .dark-theme .contact-form input,
        .dark-theme .contact-form textarea {
            background: #1e293b;
            border-color: #475569;
            color: #e2e8f0;
        }
        
        .dark-theme .progress-bar {
            background: #334155;
        }
        
        .dark-theme .tag {
            background: #475569;
        }
        
        .dark-theme .future-skills li {
            border-bottom-color: #334155;
            color: #cbd5e1;
        }
        
        .dark-theme footer {
            background: #0f172a;
            color: #94a3b8;
        }
        
        .dark-theme .section h2 {
            color: #e2e8f0;
        }
        
        .dark-theme .skill-name {
            color: #e2e8f0;
        }
        
        .dark-theme .contact-intro {
            color: #cbd5e1;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = darkThemeStyles;
    document.head.appendChild(styleSheet);
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        // Clear previous errors
        this.querySelectorAll('.error').forEach(error => error.remove());
        
        let isValid = true;
        
        // Name validation
        if (!name.value.trim()) {
            showError(name, 'Please enter your name');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }
        
        // Message validation
        if (!message.value.trim()) {
            showError(message, 'Please enter your message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Show success
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '✓ Message Sent!';
                submitBtn.style.background = '#10b981';
                
                this.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        }
    });
    
    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        error.style.cssText = 'color: #ef4444; font-size: 0.9rem; margin-top: -10px; margin-bottom: 10px;';
        
        input.parentNode.insertBefore(error, input.nextSibling);
        input.style.borderColor = '#ef4444';
        
        input.addEventListener('input', function() {
            error.remove();
            this.style.borderColor = '';
        }, { once: true });
    }
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, initializing features");
    
    initDarkMode();
    initSmoothScroll();
    initFormValidation();
    initAnimations();
    
    console.log("All features initialized successfully");
});