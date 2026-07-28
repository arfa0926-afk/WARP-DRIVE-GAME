// =======================
// WARP DRIVE GAME
// BAGIAN 1
// =======================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// -----------------------
// Status Game
// -----------------------

let ship = {
    x: 200,
    y: 300,
    width: 50,
    height: 60,
    speed: 5
};

let warpSpeed = 0;
let currentPlanet = "Belum Dipilih";

// -----------------------
// Bintang
// -----------------------

const stars = [];

for (let i = 0; i < 600; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1
    });
}

// -----------------------
// Keyboard
// -----------------------

const keys = {};

window.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});

// -----------------------
// Kontrol Pesawat
// -----------------------

function moveShip(){

    if(keys["w"] || keys["arrowup"])
        ship.y -= ship.speed;

    if(keys["s"] || keys["arrowdown"])
        ship.y += ship.speed;

    if(keys["a"] || keys["arrowleft"])
        ship.x -= ship.speed;

    if(keys["d"] || keys["arrowright"])
        ship.x += ship.speed;

    if(ship.x < 0) ship.x = 0;
    if(ship.y < 0) ship.y = 0;

    if(ship.x > canvas.width - ship.width)
        ship.x = canvas.width - ship.width;

    if(ship.y > canvas.height - ship.height)
        ship.y = canvas.height - ship.height;

}

// -----------------------
// Gambar Bintang
// -----------------------

function drawStars(){

    ctx.fillStyle="white";

    stars.forEach(star=>{

        star.y += 1 + warpSpeed * 0.2;

        if(star.y > canvas.height){

            star.y = 0;
            star.x = Math.random()*canvas.width;

        }

        if(warpSpeed > 30){

            ctx.fillRect(
                star.x,
                star.y,
                2,
                12
            );

        }else{

            ctx.fillRect(
                star.x,
                star.y,
                star.size,
                star.size
            );

        }

    });

}

// -----------------------
// Gambar Pesawat
// -----------------------

function drawShip(){

    ctx.save();

    ctx.translate(ship.x,ship.y);

    ctx.fillStyle="cyan";

    ctx.beginPath();

    ctx.moveTo(25,0);
    ctx.lineTo(0,55);
    ctx.lineTo(50,55);

    ctx.closePath();

    ctx.fill();

    ctx.fillStyle="orange";

    ctx.fillRect(20,55,10,10);

    ctx.restore();

}

// -----------------------
// Loop Game
// -----------------------

function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawStars();

    moveShip();

    drawShip();

    requestAnimationFrame(gameLoop);

}

gameLoop();
