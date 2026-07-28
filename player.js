// ======================================
// PLAYER.JS
// Pesawat & Kontrol
// ======================================

const Player = {

    x: 500,
    y: 500,

    width: 40,
    height: 60,

    speed: 5,

    vx: 0,
    vy: 0,

    angle: 0,

    enginePower: 0,

    shield: 100

};

// ======================
// Update Player
// ======================

function updatePlayer(delta){

    let moveX = 0;
    let moveY = 0;

    if(Keys["w"] || Keys["arrowup"])
        moveY = -1;

    if(Keys["s"] || Keys["arrowdown"])
        moveY = 1;

    if(Keys["a"] || Keys["arrowleft"])
        moveX = -1;

    if(Keys["d"] || Keys["arrowright"])
        moveX = 1;

    Player.vx = moveX * Player.speed;
    Player.vy = moveY * Player.speed;

    Player.x += Player.vx;
    Player.y += Player.vy;

    if(moveX !== 0 || moveY !== 0){

        Player.enginePower += 0.1;

        if(Player.enginePower > 1)
            Player.enginePower = 1;

    }else{

        Player.enginePower -= 0.05;

        if(Player.enginePower < 0)
            Player.enginePower = 0;

    }

}

// ======================
// Kamera
// ======================

function updateCamera(){

    Camera.x =
        Player.x - canvas.width/2;

    Camera.y =
        Player.y - canvas.height/2;

}

// ======================
// Api Mesin
// ======================

function drawEngine(){

    if(Player.enginePower <= 0)
        return;

    ctx.fillStyle = "orange";

    ctx.beginPath();

    ctx.moveTo(
        Player.x - Camera.x - 8,
        Player.y - Camera.y + 28
    );

    ctx.lineTo(
        Player.x - Camera.x,
        Player.y - Camera.y + 55 + Math.random()*20
    );

    ctx.lineTo(
        Player.x - Camera.x + 8,
        Player.y - Camera.y + 28
    );

    ctx.fill();

}

// ======================
// Shield
// ======================

function drawShield(){

    if(Player.shield <= 0)
        return;

    ctx.strokeStyle = "cyan";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.arc(

        Player.x - Camera.x,

        Player.y - Camera.y,

        28,

        0,

        Math.PI*2

    );

    ctx.stroke();

}

// ======================
// Gambar Pesawat
// ======================

function drawPlayer(){

    drawEngine();

    ctx.save();

    ctx.translate(

        Player.x - Camera.x,

        Player.y - Camera.y

    );

    ctx.fillStyle = "#00FFFF";

    ctx.beginPath();

    ctx.moveTo(0,-25);

    ctx.lineTo(-15,20);

    ctx.lineTo(15,20);

    ctx.closePath();

    ctx.fill();

    ctx.fillStyle = "#FFFFFF";

    ctx.beginPath();

    ctx.arc(

        0,

        -5,

        5,

        0,

        Math.PI*2

    );

    ctx.fill();

    ctx.restore();

    drawShield();

}
