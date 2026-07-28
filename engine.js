// ======================================
// ENGINE.JS
// Mesin Utama Game
// ======================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Resize Canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// =====================
// Game
// =====================

const Game = {
    version: "1.0",
    running: true,
    fps: 60
};

// =====================
// Kamera
// =====================

const Camera = {
    x: 0,
    y: 0,
    zoom: 1
};

// =====================
// Input Keyboard
// =====================

const Keys = {};

window.addEventListener("keydown", (e) => {
    Keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
    Keys[e.key.toLowerCase()] = false;
});

// =====================
// Mouse
// =====================

const Mouse = {
    x: 0,
    y: 0
};

canvas.addEventListener("mousemove", (e) => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
});

// =====================
// Delta Time
// =====================

let lastTime = 0;

function gameLoop(timestamp){

    const delta = (timestamp - lastTime) / 1000;

    lastTime = timestamp;

    update(delta);

    draw();

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);

// =====================
// Update
// =====================

function update(delta){

    if(typeof updatePlayer==="function")
        updatePlayer(delta);

    if(typeof updateWarp==="function")
        updateWarp(delta);

    if(typeof updateCamera==="function")
        updateCamera(delta);

}

if(typeof updatePlanet==="function")
    updatePlanet();

// =====================
// Draw
// =====================

function draw(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if(typeof drawGalaxy==="function")
        drawGalaxy();

    if(typeof drawStars==="function")
        drawStars();

    if(typeof drawWarpEffect==="function")
        drawWarpEffect();
    

    if(typeof drawPlanets==="function")
        drawPlanets();

    if(typeof drawPlayer==="function")
        drawPlayer();

    if(typeof drawHUD==="function")
        drawHUD();

}
