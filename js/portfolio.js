// Portfolio Interactive JavaScript 
 
// Smooth scrolling for navigation 
document.querySelectorAll('a[href="#"]').forEach(anchor =
    anchor.addEventListener('click', function(e) { 
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        if(targetId === '#') return; 
        const targetElement = document.querySelector(targetId); 
        if(targetElement) { 
            window.scrollTo({ 
                top: targetElement.offsetTop - 80, 
                behavior: 'smooth' 
            }); 
        } 
    }); 
}); 
 
// Project interaction logging 
console.log('Portfolio JavaScript loaded!'); 
