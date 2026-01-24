console.log('Filter loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up filters');
    
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide cards
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});