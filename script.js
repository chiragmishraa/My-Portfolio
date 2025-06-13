document.addEventListener('DOMContentLoaded', function() {
    // Animate terminal text
    const terminalText = document.querySelector('.terminal-body');
    if (terminalText) {
        setTimeout(() => {
            terminalText.innerHTML += '<p>> System ready.</p>';
        }, 2000);
        setTimeout(() => {
            terminalText.innerHTML += '<p>> Initialisation successful.</p>';
        }, 4000);
        setTimeout(() => {
            terminalText.innerHTML += '<p>> Found a message by Host.</p>';
        }, 6000);
    }

    // Add cursor effect to terminal
    const terminal = document.querySelector('.terminal-body');
    if (terminal) {
        setTimeout(() => {
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            cursor.textContent = 'HELLO THERE !';
            terminal.appendChild(cursor);
            
            setInterval(() => {
                cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
            }, 500);
        }, 7000);
    }

    // Add particle effect to background
    createParticles();
});

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 50;
    const colors = ['var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-green)'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;
        
        particlesContainer.appendChild(particle);
    }
}
