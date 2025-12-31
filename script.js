/* ========================================
   NEW YEAR 2026 - ANIMATION CONTROLLER
   ======================================== */

// Configuration
const CONFIG = {
    scene1Duration: 4500,
    scene2Duration: 3500,
    scene3Duration: 4000,
    scene4Duration: 4500,
    scene5Duration: null, // Final scene stays
};

// 2025 Files (memories from the past year)
const FILES_2025 = [
    'memories_2025.dat',
    'achievements_unlocked.log',
    'lessons_learned.txt',
    'goals_completed.exe',
    'friendships.dll',
    'challenges_overcome.sys',
    'growth_data.bin',
    'adventures.zip',
    'milestones.cfg',
    'year_summary.pdf'
];

// 2026 New Files (goals and fresh starts)
const FILES_2026 = [
    'new_beginnings.exe',
    'fresh_opportunities.dll',
    'goals_2026.ini',
    'dreams_unlocked.sys',
    'success_protocol.bin',
    'adventure_mode.cfg',
    'happiness.dat',
    'growth_v2.0.log',
    'unlimited_potential.zip'
];

// Goals/Windows for Scene 4
const GOALS_2026 = [
    { title: 'NEW_GOALS.exe', content: '> Setting ambitious targets...\n> Dream big, achieve bigger' },
    { title: 'FRESH_START.ini', content: '> Clean slate initiated\n> Past errors cleared' },
    { title: 'OPPORTUNITIES.dll', content: '> Scanning for possibilities...\n> Unlimited paths found' },
    { title: 'SUCCESS.sys', content: '> Success protocols loaded\n> Ready to execute' },
    { title: 'ADVENTURE.cfg', content: '> Adventure mode: ENABLED\n> New experiences queued' },
    { title: 'GROWTH.log', content: '> Personal growth: v2.0\n> Evolution in progress' }
];

// State
let currentScene = 1;

// DOM Elements
const scenes = {
    scene1: document.getElementById('scene1'),
    scene2: document.getElementById('scene2'),
    scene3: document.getElementById('scene3'),
    scene4: document.getElementById('scene4'),
    scene5: document.getElementById('scene5')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startSequence();
});

// Main Sequence Controller
async function startSequence() {
    currentScene = 1;
    resetAllScenes();
    
    // Scene 1: Loading 2025 Files
    await runScene1();
    
    // Scene 2: Error - Files Closed
    await runScene2();
    
    // Scene 3: Loading New Files
    await runScene3();
    
    // Scene 4: Files Opening
    await runScene4();
    
    // Scene 5: 2026 Reveal
    await runScene5();
}

// Reset all scenes
function resetAllScenes() {
    Object.values(scenes).forEach(scene => {
        scene.classList.remove('active');
    });
    scenes.scene1.classList.add('active');
    
    // Clear dynamic content
    document.getElementById('files2025').innerHTML = '';
    document.getElementById('files2026').innerHTML = '';
    document.getElementById('fileFragments').innerHTML = '';
    document.getElementById('windowsContainer').innerHTML = '';
    document.getElementById('progressBar1').style.width = '0%';
    document.getElementById('progressBar2').style.width = '0%';
    document.getElementById('openingText').textContent = '';
    document.getElementById('welcomeLine1').textContent = '';
    document.getElementById('welcomeLine2').textContent = '';
    document.getElementById('particles').innerHTML = '';
}

// Switch to a scene
function switchScene(sceneNumber) {
    Object.values(scenes).forEach(scene => scene.classList.remove('active'));
    scenes[`scene${sceneNumber}`].classList.add('active');
    currentScene = sceneNumber;
}

// Helper: Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper: Typewriter effect
async function typeWriter(element, text, speed = 50) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await sleep(speed);
    }
}

// ========================================
// SCENE 1: Loading 2025 Files
// ========================================
async function runScene1() {
    const fileList = document.getElementById('files2025');
    const progressBar = document.getElementById('progressBar1');
    const status = document.getElementById('status1');
    
    await sleep(1000); // Initial delay
    
    // Add files one by one
    for (let i = 0; i < FILES_2025.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = FILES_2025[i];
        fileItem.style.animationDelay = `${i * 0.1}s`;
        fileList.appendChild(fileItem);
        
        // Update progress
        const progress = ((i + 1) / FILES_2025.length) * 100;
        progressBar.style.width = `${progress}%`;
        status.textContent = `LOADING: ${FILES_2025[i]}`;
        
        await sleep(300);
    }
    
    status.textContent = 'PROCESSING COMPLETE...';
    await sleep(500);
    status.textContent = 'ARCHIVING 2025 DATA...';
    await sleep(800);
    
    return sleep(CONFIG.scene1Duration - 2500);
}

// ========================================
// SCENE 2: Error - Files Closed
// ========================================
async function runScene2() {
    switchScene(2);
    
    const fragmentsContainer = document.getElementById('fileFragments');
    
    // Create file fragments
    await sleep(500);
    for (let i = 0; i < 6; i++) {
        const fragment = document.createElement('div');
        fragment.className = 'fragment';
        fragment.textContent = FILES_2025[i];
        fragment.style.animationDelay = `${1 + i * 0.2}s`;
        fragmentsContainer.appendChild(fragment);
    }
    
    return sleep(CONFIG.scene2Duration);
}

// ========================================
// SCENE 3: Loading New Files
// ========================================
async function runScene3() {
    switchScene(3);
    
    const fileList = document.getElementById('files2026');
    const progressBar = document.getElementById('progressBar2');
    
    await sleep(1200); // Wait for boot lines to animate
    
    // Add new files
    for (let i = 0; i < FILES_2026.length; i++) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.textContent = FILES_2026[i];
        fileItem.style.animationDelay = `${i * 0.15}s`;
        fileList.appendChild(fileItem);
        
        // Update progress
        const progress = ((i + 1) / FILES_2026.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        await sleep(350);
    }
    
    return sleep(CONFIG.scene3Duration - 2000);
}

// ========================================
// SCENE 4: Files Opening
// ========================================
async function runScene4() {
    switchScene(4);
    
    const openingText = document.getElementById('openingText');
    const windowsContainer = document.getElementById('windowsContainer');
    
    // Typewriter effect for title
    await typeWriter(openingText, 'OPENING NEW TABS...', 80);
    
    await sleep(500);
    
    // Create window cards
    GOALS_2026.forEach((goal, index) => {
        const windowCard = document.createElement('div');
        windowCard.className = 'window-card';
        windowCard.innerHTML = `
            <div class="window-header">
                <span class="window-dot red"></span>
                <span class="window-dot yellow"></span>
                <span class="window-dot green"></span>
                <span class="window-title">${goal.title}</span>
            </div>
            <div class="window-body">
                <p>${goal.content.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        windowsContainer.appendChild(windowCard);
    });
    
    return sleep(CONFIG.scene4Duration);
}

// ========================================
// SCENE 5: 2026 Reveal
// ========================================
async function runScene5() {
    switchScene(5);
    
    const welcomeLine1 = document.getElementById('welcomeLine1');
    const welcomeLine2 = document.getElementById('welcomeLine2');
    const particles = document.getElementById('particles');
    const replayBtn = document.getElementById('replayBtn');
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${3 + Math.random() * 2}s`;
        
        // Random colors
        const colors = ['#00fff2', '#ff00ff', '#00ff41'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        
        particles.appendChild(particle);
    }
    
    // Type welcome messages
    await sleep(1500);
    await typeWriter(welcomeLine1, 'WELCOME', 100);
    
    await sleep(500);
    await typeWriter(welcomeLine2, 'YOUR FILES ARE READY FOR THE NEW YEAR', 50);
    
    // Setup replay button
    replayBtn.addEventListener('click', () => {
        startSequence();
    });
}

// Add some extra visual effects
document.addEventListener('mousemove', (e) => {
    if (currentScene === 5) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index % 5) + 1;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            particle.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
});
