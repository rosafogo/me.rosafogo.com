document.addEventListener('DOMContentLoaded', function() {
    const portfolioBtn = document.getElementById('portfolioBtn');
    
    portfolioBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });
    
    portfolioBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    portfolioBtn.addEventListener('click', function(e) {
        console.log('Redirecionando para o GitHub...');
    });
    
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
    
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach((flower, index) => {
        flower.style.animationDelay = `${index * 0.5}s`;
    });
    
    console.log('Site carregado com sucesso! 🌸');
});
