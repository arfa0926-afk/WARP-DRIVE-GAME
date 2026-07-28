// ======================================
// ENGINE.JS
// Mesin Utama Game
// ======================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// =====================
// Game
// =====================

const Game = {

    running:true,
    version:"1.0"

};


// =====================
// Kamera
// =====================

const Camera = {

    x:0,
    y:0

};


// =====================
// Input
// =====================

const Keys={};

window.addEventListener("keydown",(e)=>{

    Keys[e.key.toLowerCase()] = true;

});

window.addEventListener("keyup",(e)=>{

    Keys[e.key.toLowerCase()] = false;

});


// =====================
// Update Semua Sistem
// =====================

function update(delta){


    if(typeof updatePlayer==="function")
        updatePlayer(delta);


    if(typeof updateWarp==="function")
        updateWarp(delta);


    if(typeof updatePlanet==="function")
        updatePlanet(delta);


    if(typeof updateHUD==="function")
        updateHUD();


    if(typeof updateCamera==="function")
        updateCamera();


}


// =====================
// Render Semua Sistem
// =====================

function draw(){


    ctx.fillStyle="black";

    ctx.fillRect(
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


    if(typeof drawAsteroids==="function")
        drawAsteroids();


    if(typeof drawPlayer==="function")
        drawPlayer();


    if(typeof drawHUD==="function")
        drawHUD();


}


// =====================
// Game Loop
// =====================

let lastTime=0;

function gameLoop(time){

    let delta =
    (time-lastTime)/1000;

    lastTime=time;


    if(Game.running){

        update(delta);

        draw();

    }


    requestAnimationFrame(gameLoop);

}


requestAnimationFrame(gameLoop);
