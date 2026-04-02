// PC Build Animation Steps
const pcSteps = [
    {
        name: "Empty Case",
        description: "Starting with an empty PC case",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <text x="200" y="160" font-size="24" fill="#00a8ff" text-anchor="middle" font-weight="bold">Empty Case</text>
        </svg>`
    },
    {
        name: "Motherboard Installed",
        description: "Installing the motherboard",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">Motherboard Installed</text>
        </svg>`
    },
    {
        name: "CPU Added",
        description: "Installing the processor",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <text x="150" y="135" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">CPU</text>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">CPU Added</text>
        </svg>`
    },
    {
        name: "RAM Installed",
        description: "Installing memory modules",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#4a90e2" x="200" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#4a90e2" x="225" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">RAM Installed</text>
        </svg>`
    },
    {
        name: "SSD Added",
        description: "Installing solid state drive",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#4a90e2" x="200" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#4a90e2" x="225" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#9b59b6" x="260" y="130" width="50" height="30" stroke="#c39bd3" stroke-width="2"/>
            <text x="285" y="148" font-size="10" fill="#fff" text-anchor="middle">SSD</text>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">SSD Added</text>
        </svg>`
    },
    {
        name: "GPU Installed",
        description: "Installing graphics card",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#4a90e2" x="200" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#4a90e2" x="225" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#9b59b6" x="260" y="130" width="50" height="30" stroke="#c39bd3" stroke-width="2"/>
            <rect fill="#e74c3c" x="100" y="180" width="80" height="35" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#333" x="105" y="185" width="70" height="25"/>
            <text x="140" y="202" font-size="10" fill="#fff" text-anchor="middle">GPU</text>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">GPU Installed</text>
        </svg>`
    },
    {
        name: "Power Supply",
        description: "Installing power supply unit",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <rect fill="#1a1a1a" width="400" height="300" stroke="#00a8ff" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#4a90e2" x="200" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#4a90e2" x="225" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#9b59b6" x="260" y="130" width="50" height="30" stroke="#c39bd3" stroke-width="2"/>
            <rect fill="#e74c3c" x="100" y="180" width="80" height="35" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#333" x="320" y="200" width="40" height="50" stroke="#ffaa00" stroke-width="2"/>
            <circle cx="340" cy="215" r="8" fill="#ffaa00"/>
            <text x="200" y="270" font-size="16" fill="#00a8ff" text-anchor="middle">Power Supply Added</text>
        </svg>`
    },
    {
        name: "PC Complete!",
        description: "Fully functional gaming PC ready!",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#00ff00;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#00a8ff;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect fill="#1a1a1a" width="400" height="300" stroke="url(#grad)" stroke-width="3"/>
            <rect fill="#222" x="20" y="30" width="360" height="240" stroke="#444" stroke-width="2"/>
            <rect fill="#2d5a2d" x="50" y="80" width="300" height="150" stroke="#00ff00" stroke-width="2"/>
            <circle cx="70" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="90" cy="100" r="5" fill="#ffaa00"/>
            <circle cx="110" cy="100" r="5" fill="#ffaa00"/>
            <rect fill="#ff6b6b" x="120" y="100" width="60" height="60" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#4a90e2" x="200" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#4a90e2" x="225" y="110" width="15" height="50" stroke="#0066ff" stroke-width="2"/>
            <rect fill="#9b59b6" x="260" y="130" width="50" height="30" stroke="#c39bd3" stroke-width="2"/>
            <rect fill="#e74c3c" x="100" y="180" width="80" height="35" stroke="#ff0000" stroke-width="2"/>
            <rect fill="#333" x="320" y="200" width="40" height="50" stroke="#ffaa00" stroke-width="2"/>
            <circle cx="340" cy="215" r="8" fill="#ffaa00"/>
            <text x="200" y="270" font-size="16" fill="#00ff00" text-anchor="middle" font-weight="bold">✓ PC Complete!</text>
        </svg>`
    }
];

let currentStep = 0;

function updatePCAnimation() {
    const pcImage = document.getElementById('pc-image');
    const stepText = document.getElementById('step-text');
    
    const step = pcSteps[currentStep];
    
    // Update SVG
    pcImage.innerHTML = step.svg;
    pcImage.style.width = '100%';
    pcImage.style.height = 'auto';
    
    // Update text
    stepText.textContent = step.name;
    
    // Move to next step
    currentStep = (currentStep + 1) % pcSteps.length;
}

// Start animation immediately
updatePCAnimation();

// Update every 3 seconds
setInterval(updatePCAnimation, 3000);

// Assistant input functionality
const assistantInput = document.querySelector('.assistant-input');
if (assistantInput) {
    assistantInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            console.log('Message sent:', this.value);
            this.value = '';
        }
    });
}
