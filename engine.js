// ======================================
// ENGINE.JS
// WARP DRIVE GAME ENGINE
// ======================================


// =====================
// CANVAS
// =====================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


// =====================
// GAME SETTINGS
// =====================

const Game = {

    running:true,

    fps:60,

    time:0

};


// =====================
// CAMERA
// =====================

const Camera = {

    x:0,

    y:0,

    shake:0

};


// =====================
// KEYBOARD INPUT
// =====================

const Keys = {};


window.addEventListener(
    "keydown",
    function(e){

        Keys[e.key.toLowerCase()] = true;

    }
);


window.addEventListener(
    "keyup",
    function(e){

        Keys[e.key.toLowerCase()] = false;

    }
);


// =====================
// MOUSE
// =====================

const Mouse = {

    x:0,

    y:0

};


canvas.addEventListener(
    "mousemove",
    function(e){

        Mouse.x=e.clientX;
        Mouse.y=e.clientY;

    }
);


// =====================
// DELTA TIME
// =====================

let lastTime = 0;


// =====================
// UPDATE SEMUA SISTEM
// =====================

function update(delta){


    Game.time += delta;



    if(typeof updatePlayer === "function")
        updatePlayer(delta);



    if(typeof updateWarp === "function")
        updateWarp(delta);



    if(typeof updatePlanet === "function")
        updatePlanet(delta);



    if(typeof updateAsteroids === "function")
        updateAsteroids(delta);



    if(typeof updateHUD === "function")
        updateHUD();



    if(typeof updateCamera === "function")
        updateCamera();

   
    if(typeof updateMission==="function")
        updateMission();

    
    if(typeof updateEnemies==="function")
        updateEnemies(delta);


    if(typeof updateWeapon==="function")
        updateWeapon(delta);
    
}


// =====================
// GAMBAR SEMUA SISTEM
// =====================

function draw(){


    // Background

    ctx.fillStyle="black";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // Ruang angkasa

    if(typeof drawGalaxy === "function")
        drawGalaxy();



    if(typeof drawStars === "function")
        drawStars();



    // Warp effect

    if(typeof drawWarpEffect === "function")
        drawWarpEffect();



    // Objek

    if(typeof drawPlanets === "function")
        drawPlanets();



    if(typeof drawAsteroids === "function")
        drawAsteroids();



    if(typeof drawPlayer === "function")
        drawPlayer();



    // HUD

    if(typeof drawHUD === "function")
        drawHUD();

    
    
    // MissionHUD
    
    if(typeof drawMissionHUD==="function")
        drawMissionHUD();

    
    
    if(typeof drawEnemies==="function")
        drawEnemies();



    if(typeof drawWeapon==="function")
        drawWeapon();

}


// =====================
// GAME LOOP
// =====================

function gameLoop(time){


    let delta =
    (time-lastTime)/1000;


    lastTime=time;


    if(delta > 0.1)
        delta=0.1;



    if(Game.running){

        update(delta);

        draw();

    }


    requestAnimationFrame(gameLoop);

}


requestAnimationFrame(gameLoop);
