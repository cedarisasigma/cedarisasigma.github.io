let score = 0;
let clickValue = 1;
let autoFap = 0;
let staminaLevel = 1;
let staminaCount = 0;
let progress = 0;
let progressMax = 13;
let lubeCost = 6;
let lubeClickValue = 2;
let posterCost = 51;
let posterFps = 6;
let privateShowCost = 1050;
let privateShowFps = 75;
let magazineCost = 249;
let magazineFps = 21;
let camToCamCost = 5000;
let camToCamFps = 250;
let isVideoPlaying = false;

function saveGame() {
    const gameState = {
        score: score,
        clickValue: clickValue,
        autoFap: autoFap,
        staminaLevel: staminaLevel,
        staminaCount: staminaCount,
        progress: progress,
        progressMax: progressMax,
        lubeCost: lubeCost,
        lubeClickValue: lubeClickValue,
        posterCost: posterCost,
        posterFps: posterFps,
        privateShowCost: privateShowCost,
        privateShowFps: privateShowFps,
        magazineCost: magazineCost,
        magazineFps: magazineFps,
        camToCamCost: camToCamCost,
        camToCamFps: camToCamFps
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGame() {
    try {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            const gameState = JSON.parse(savedState);
            score = Number(gameState.score) || 0;
            clickValue = Number(gameState.clickValue) || 1;
            autoFap = Number(gameState.autoFap) || 0;
            staminaLevel = Number(gameState.staminaLevel) || 1;
            staminaCount = Number(gameState.staminaCount) || 0;
            progress = Number(gameState.progress) || 0;
            progressMax = Number(gameState.progressMax) || 13;
            lubeCost = Number(gameState.lubeCost) || 6;
            lubeClickValue = Number(gameState.lubeClickValue) || 2;
            posterCost = Number(gameState.posterCost) || 51;
            posterFps = Number(gameState.posterFps) || 6;
            privateShowCost = Number(gameState.privateShowCost) || 1050;
            privateShowFps = Number(gameState.privateShowFps) || 75;
            magazineCost = Number(gameState.magazineCost) || 249;
            magazineFps = Number(gameState.magazineFps) || 21;
            camToCamCost = Number(gameState.camToCamCost) || 5000;
            camToCamFps = Number(gameState.camToCamFps) || 250;

            // Update UI elements after loading
            document.getElementById('lube-click-value').innerText = lubeClickValue;
            document.getElementById('lube-cost').innerText = formatNumber(lubeCost);
            document.getElementById('poster-fps').innerText = posterFps;
            document.getElementById('poster-cost').innerText = formatNumber(posterCost);
            document.getElementById('private-show-fps').innerText = privateShowFps;
            document.getElementById('private-show-cost').innerText = formatNumber(privateShowCost);
            document.getElementById('magazine-fps').innerText = magazineFps;
            document.getElementById('magazine-cost').innerText = formatNumber(magazineCost);
            document.getElementById('cam-to-cam-fps').innerText = camToCamFps;
            document.getElementById('cam-to-cam-cost').innerText = formatNumber(camToCamCost);
            
            updateGame();
        }
    } catch (error) {
        console.error('Error loading game:', error);
    }
}

function formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num;
}

function clickAction() {
    const video = document.getElementById('click-video');
    
    progress += clickValue;
    if (progress >= progressMax) {
        progress -= progressMax;
        staminaCount++;
        score += staminaLevel;
        
        if (staminaCount >= 10) {
            staminaCount = 0;
            staminaLevel++;
            progressMax = calculateProgressMax(staminaLevel);
        }
    }
    
    updateGame();
    
    if (!isVideoPlaying) {
        isVideoPlaying = true;
        video.play();
        video.onended = function() {
            isVideoPlaying = false;
            video.load();
        };
    }
}

function calculateProgressMax(level) {
    if (level === 1) return 13;
    // New formula using exponential growth with a higher base
    return Math.ceil(13 * Math.pow(1.35, level - 1));
}

function buyUpgradeLube() {
    if (score >= lubeCost) {
        score -= lubeCost;
        clickValue += lubeClickValue;
        lubeCost = Math.ceil(lubeCost * 1.25);
        lubeClickValue = Math.ceil(lubeClickValue * 1.1);
        document.getElementById('lube-click-value').innerText = lubeClickValue;
        document.getElementById('lube-cost').innerText = formatNumber(lubeCost);
        updateGame();
    }
}

function buyUpgradePoster() {
    if (score >= posterCost) {
        score -= posterCost;
        autoFap += posterFps;
        posterCost = Math.ceil(posterCost * 1.25);
        posterFps += Math.floor(posterFps * 0.2) + 1;
        document.getElementById('poster-fps').innerText = posterFps;
        document.getElementById('poster-cost').innerText = formatNumber(posterCost);
        updateGame();
    }
}

function buyUpgradePrivateShow() {
    if (score >= privateShowCost) {
        score -= privateShowCost;
        autoFap += privateShowFps;
        privateShowCost = Math.ceil(privateShowCost * 1.25);
        privateShowFps += Math.floor(privateShowFps * 1.1) + 1;
        document.getElementById('private-show-fps').innerText = privateShowFps;
        document.getElementById('private-show-cost').innerText = formatNumber(privateShowCost);
        updateGame();
    }
}

function buyUpgradeMagazine() {
    if (score >= magazineCost) {
        score -= magazineCost;
        autoFap += magazineFps;
        magazineCost = Math.ceil(magazineCost * 1.25);
        magazineFps += Math.floor(magazineFps * 1.2) + 1;
        document.getElementById('magazine-fps').innerText = magazineFps;
        document.getElementById('magazine-cost').innerText = formatNumber(magazineCost);
        updateGame();
    }
}

function buyUpgradeCamToCam() {
    if (score >= camToCamCost) {
        score -= camToCamCost;
        autoFap += camToCamFps;
        camToCamCost = Math.ceil(camToCamCost * 1.25);
        camToCamFps += Math.floor(camToCamFps * 1.1) + 1;
        document.getElementById('cam-to-cam-fps').innerText = camToCamFps;
        document.getElementById('cam-to-cam-cost').innerText = formatNumber(camToCamCost);
        updateGame();
    }
}

function autoClick() {
    score += autoFap;
    progress += autoFap;
    if (progress >= progressMax) {
        progress -= progressMax;
        staminaCount++;
        score += staminaLevel;
        if (staminaCount >= 10) {
            staminaCount = 0;
            staminaLevel++;
            progressMax = calculateProgressMax(staminaLevel); // Use the calculation here
        }
    }
    updateGame();
}

function updateGame() {
    document.getElementById('score').innerText = formatNumber(score);
    document.getElementById('fps').innerText = formatNumber(autoFap);
    document.getElementById('progress').style.width = Math.min((progress / progressMax) * 100, 100) + '%';
    document.getElementById('progress-count').innerText = Math.min(progress, progressMax);
    document.getElementById('progress-max').innerText = progressMax;
    document.getElementById('stamina-level').innerText = staminaLevel;
    document.getElementById('stamina-count').innerText = staminaCount;
    document.getElementById('total-click-value').innerText = formatNumber(clickValue);
    updateRank();
    saveGame();
}

function updateRank() {
    let rank = "Unranked";
    let rankIcon = "unranked.png";
    if (staminaLevel >= 5) {
        rank = "Bronze Beater";
        rankIcon = "bronze.png";
    }
    if (staminaLevel >= 10) {
        rank = "Silver Stroker";
        rankIcon = "silver.png";
    }
    if (staminaLevel >= 20) {
        rank = "Golden Gooner";
        rankIcon = "golden.png";
    }
    if (staminaLevel >= 35) {
        rank = "Emerald Edger";
        rankIcon = "emerald.png";
    }
    if (staminaLevel >= 50) {
        rank = "Platinum Puller";
        rankIcon = "platinum.png";
    }
    if (staminaLevel >= 75) {
        rank = "Grandmaster Baiter";
        rankIcon = "grandmaster.png";
    }
    document.getElementById('rank').innerText = rank;
    document.getElementById('rank-icon').src = `ranks/${rankIcon}`;
}

function restartGame() {
    localStorage.clear();
    score = 0;
    clickValue = 1;
    autoFap = 0;
    staminaLevel = 1;
    staminaCount = 0;
    progress = 0;
    progressMax = calculateProgressMax(staminaLevel);
    lubeCost = 6;
    lubeClickValue = 2;
    posterCost = 51;
    posterFps = 6;
    privateShowCost = 1050;
    privateShowFps = 75;
    magazineCost = 249;
    magazineFps = 21;
    camToCamCost = 5000;
    camToCamFps = 250;
    updateGame();
}

setInterval(autoClick, 1000);
window.onload = loadGame;
