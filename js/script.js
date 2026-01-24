// ===== DARK MODE =====
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }
    
    // Toggle on click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            this.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            this.textContent = '🌙 Dark Mode';
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const offset = navbar ? navbar.offsetHeight + 20 : 100;
                
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initializing...');
    initDarkMode();
    initSmoothScroll();
    console.log('Portfolio ready!');
});