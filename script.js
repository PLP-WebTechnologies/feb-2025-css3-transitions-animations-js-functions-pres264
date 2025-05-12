document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. Theme Selection with localStorage
    // ======================
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    // Theme button event listeners
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.id.replace('Theme', '') + '-theme';
            body.className = theme;
            localStorage.setItem('theme', theme);
        });
    });

    // ======================
    // 2. Animation Triggers
    // ======================
    const spinBtn = document.getElementById('spinBtn');
    const spinElement = document.getElementById('spinElement');

    spinBtn.addEventListener('click', function() {
        spinElement.classList.toggle('spin-animation');
        this.textContent = spinElement.classList.contains('spin-animation') 
            ? 'Stop Spinning' 
            : 'Click to Spin';
    });

    // ======================
    // 3. User Data Storage with localStorage
    // ======================
    const userInput = document.getElementById('userInput');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const displayArea = document.getElementById('displayArea');

    // Load saved data if it exists
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        displayArea.textContent = `Saved: ${savedData}`;
        userInput.value = savedData;
    }

    // Save data to localStorage
    saveBtn.addEventListener('click', function() {
        const data = userInput.value.trim();
        if (data) {
            localStorage.setItem('userData', data);
            displayArea.textContent = `Saved: ${data}`;
            
            // Add visual feedback
            displayArea.style.color = 'green';
            setTimeout(() => {
                displayArea.style.color = '';
            }, 1000);
        }
    });

    // Clear data from localStorage
    clearBtn.addEventListener('click', function() {
        localStorage.removeItem('userData');
        userInput.value = '';
        displayArea.textContent = 'Data cleared';
        
        // Add visual feedback
        displayArea.style.color = 'red';
        setTimeout(() => {
            displayArea.style.color = '';
            displayArea.textContent = '';
        }, 1000);
    });

    // ======================
    // Bonus: Animation on Scroll
    // ======================
    const cards = document.querySelectorAll('.card');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial setup for scroll animations
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Run once on load
});
