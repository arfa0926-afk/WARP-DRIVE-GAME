// ======================================
// PLAYER.JS
// Pesawat Warp Drive
// ======================================


// =====================
// DATA PESAWAT
// =====================

const Player = {

    x:500,
    y:500,

    speed:6,

    width:45,

    height:70,

    shield:100,

    rotation:0,

    enginePower:0

};


// =====================
// UPDATE PESAWAT
// =====================

function updatePlayer(delta){


    let moveX=0;
    let moveY=0;



    if(Keys["w"] || Keys["arrowup"])
        moveY=-1;


    if(Keys["s"] || Keys["arrowdown"])
        moveY=1;


    if(Keys["a"] || Keys["arrowleft"])
        moveX=-1;


    if(Keys["d"] || Keys["arrowright"])
        moveX=1;



    // Gerakan

    Player.x += moveX * Player.speed;

    Player.y += moveY * Player.speed;



    // Efek mesin

    if(moveX!==0 || moveY!==0){

        Player.enginePower += delta*5;

    }else{

        Player.enginePower -= delta*5;

    }


    if(Player.enginePower>1)
        Player.enginePower=1;


    if(Player.enginePower<0)
        Player.enginePower=0;



    // Arah pesawat

    if(moveX!==0 || moveY!==0){

        Player.rotation =
        Math.atan2(moveY,moveX);

    }

}


// =====================
// UPDATE KAMERA
// =====================

function updateCamera(){

    Camera.x =
    Player.x - canvas.width/2;


    Camera.y =
    Player.y - canvas.height/2;

}


// =====================
// GAMBAR API MESIN
// =====================

function drawEngine(){


    if(Player.enginePower<=0)
        return;


    let x =
    Player.x-Camera.x;


    let y =
    Player.y-Camera.y;



    ctx.fillStyle=
    "orange";


    ctx.beginPath();


    ctx.moveTo(
        x-8,
        y+30
    );


    ctx.lineTo(
        x,
        y+70 + Math.random()*20
    );


    ctx.lineTo(
        x+8,
        y+30
    );


    ctx.fill();

}


// =====================
// GAMBAR SHIELD
// =====================

function drawShield(){


    if(Player.shield<=0)
        return;


    ctx.strokeStyle=
    "rgba(0,255,255,0.6)";


    ctx.lineWidth=2;


    ctx.beginPath();


    ctx.arc(

        Player.x-Camera.x,

        Player.y-Camera.y,

        35,

        0,

        Math.PI*2

    );


    ctx.stroke();

}


// =====================
// GAMBAR PESAWAT
// =====================

function drawPlayer(){


    drawEngine();


    let x =
    Player.x-Camera.x;


    let y =
    Player.y-Camera.y;



    ctx.save();


    ctx.translate(x,y);


    ctx.rotate(
        Player.rotation + Math.PI/2
    );



    // badan pesawat

    ctx.fillStyle="#00ffff";


    ctx.beginPath();


    ctx.moveTo(
        0,
        -35
    );


    ctx.lineTo(
        -20,
        25
    );


    ctx.lineTo(
        20,
        25
    );


    ctx.closePath();


    ctx.fill();



    // kaca kokpit

    ctx.fillStyle="white";


    ctx.beginPath();


    ctx.arc(
        0,
        -10,
        7,
        0,
        Math.PI*2
    );


    ctx.fill();



    ctx.restore();



    drawShield();

}
