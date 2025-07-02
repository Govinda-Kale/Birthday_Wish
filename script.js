// Birthday website interactive functionality

// Show surprise message when button is clicked
function showSurprise() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const button = document.querySelector('.wish-button');
    
    surpriseMessage.classList.add('show');
    button.style.display = 'none';
    
    // Trigger confetti
    createConfetti();
    
    // Play birthday music (if available)
    const music = document.getElementById('birthdayMusic');
    if (music) {
        music.play().catch(e => console.log('Audio autoplay prevented'));
    }
}

// Create confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#ffd700', '#ff9ff3', '#54a0ff'];
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.animationDelay = Math.random() * 2 + 's';
            confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            confettiContainer.appendChild(confettiPiece);
            
            // Remove confetti piece after animation
            setTimeout(() => {
                if (confettiPiece.parentNode) {
                    confettiPiece.parentNode.removeChild(confettiPiece);
                }
            }, 5000);
        }, i * 50);
    }
}

// Add sparkle effect on mouse movement
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) { // Only create sparkles occasionally
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '6px';
    sparkle.style.height = '6px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleDisappear 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Add CSS for sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleDisappear {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Animate cake candles - blow out effect
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'translateX(-50%) scale(0)';
        }, index * 200);
    });
    
    // Relight candles after 3 seconds
    setTimeout(() => {
        flames.forEach(flame => {
            flame.style.opacity = '1';
            flame.style.transform = 'translateX(-50%) scale(1)';
        });
    }, 3000);
}

// Add click event to cake for candle blowing
document.querySelector('.cake').addEventListener('click', blowCandles);

// Auto-start some animations when page loads
window.addEventListener('load', function() {
    // Add floating hearts
    setInterval(createFloatingHeart, 3000);
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '24px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.animation = 'floatUp 4s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Add CSS for floating hearts
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Add birthday countdown (just for fun)
function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 6, 2); // July 2nd (month is 0-indexed)
    
    // If birthday has passed this year, set to next year
    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }
    
    const timeLeft = birthday - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    
    if (days > 0) {
        console.log(`Days until next birthday: ${days}`);
    } else {
        console.log("It's Vrushali's birthday today! 🎉");
    }
}

// Run countdown on load
updateCountdown();

// Add some fun keyboard interactions
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case ' ': // Spacebar
            e.preventDefault();
            createConfetti();
            break;
        case 'b': // B key
            blowCandles();
            break;
        case 'h': // H key
            createFloatingHeart();
            break;
    }
});

// Display instructions for keyboard shortcuts
console.log(`
🎉 Birthday Website Keyboard Shortcuts:
- Press SPACEBAR for confetti
- Press 'B' to blow out candles
- Press 'H' for floating hearts
- Click the cake to blow out candles
- Move your mouse around for sparkles!
`);

// Add a special message that appears after some time
setTimeout(() => {
    if (!document.querySelector('.surprise-message').classList.contains('show')) {
        const specialMessage = document.createElement('div');
        specialMessage.style.position = 'fixed';
        specialMessage.style.top = '20px';
        specialMessage.style.right = '20px';
        specialMessage.style.background = 'rgba(255, 215, 0, 0.9)';
        specialMessage.style.color = '#333';
        specialMessage.style.padding = '15px';
        specialMessage.style.borderRadius = '10px';
        specialMessage.style.fontSize = '14px';
        specialMessage.style.fontWeight = '600';
        specialMessage.style.zIndex = '1001';
        specialMessage.style.animation = 'slideIn 0.5s ease-out';
        specialMessage.innerHTML = '💡 Click the surprise button below!';
        
        document.body.appendChild(specialMessage);
        
        setTimeout(() => {
            if (specialMessage.parentNode) {
                specialMessage.style.animation = 'slideOut 0.5s ease-out';
                setTimeout(() => {
                    if (specialMessage.parentNode) {
                        specialMessage.parentNode.removeChild(specialMessage);
                    }
                }, 500);
            }
        }, 4000);
    }
}, 5000);

// Add slide animations for the hint message
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);
