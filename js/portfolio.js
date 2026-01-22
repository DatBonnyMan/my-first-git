// Portfolio JavaScript - Interactive Features 
 
// Smooth scrolling for navigation links 
document.querySelectorAll('a[href=\"#\"]').forEach(anchor =
    anchor.addEventListener('click', function (e) { 
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
document.querySelectorAll('.project-card').forEach(card =
    card.addEventListener('click', function() { 
        const projectTitle = this.querySelector('h3').textContent; 
        console.log('Project viewed:', projectTitle); 
    }); 
}); 
