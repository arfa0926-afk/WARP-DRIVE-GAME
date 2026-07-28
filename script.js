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

// =======================
// BAGIAN 2
// PLANET
// =======================

const planets = {
    "Bumi": {
        color: "#3aa6ff",
        x: 1200,
        y: 180,
        radius: 45
    },
    "Mars": {
        color: "#ff5533",
        x: 1600,
        y: 350,
        radius: 35
    },
    "Jupiter": {
        color: "#d8a26d",
        x: 2100,
        y: 220,
        radius: 65
    },
    "Saturnus": {
        color: "#f4dc8a",
        x: 2700,
        y: 300,
        radius: 60
    },
    "Neptunus": {
        color: "#4d8dff",
        x: 3300,
        y: 150,
        radius: 50
    }
};

// Kamera dunia
let cameraX = 0;

// --------------------
// Tombol Planet
// --------------------

function goPlanet(name){

    currentPlanet = name;

    document.getElementById("planetName").textContent = name;

    document.getElementById("message").textContent =
    "Tujuan diubah ke " + name;

}

// --------------------
// Warp
// --------------------

let warp = false;

function startWarp(){

    warp = true;

    document.getElementById("message").textContent =
    "Warp Drive Aktif";

}

function stopWarp(){

    warp = false;

    document.getElementById("message").textContent =
    "Warp Drive Dimatikan";

}

// --------------------
// Update Warp
// --------------------

function updateWarp(){

    if(warp){

        if(warpSpeed < 50)
            warpSpeed += 0.5;

    }else{

        if(warpSpeed > 0)
            warpSpeed -= 0.5;

    }

    cameraX += warpSpeed;

    document.getElementById("speed").textContent =
    Math.floor(warpSpeed);

}

// --------------------
// Planet
// --------------------

function drawPlanets(){

    for(const name in planets){

        const p = planets[name];

        const drawX = p.x - cameraX;

        if(drawX < -200) continue;
        if(drawX > canvas.width + 200) continue;

        ctx.beginPath();

        ctx.fillStyle = p.color;

        ctx.arc(
            drawX,
            p.y,
            p.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

        // Cincin Saturnus

        if(name=="Saturnus"){

            ctx.strokeStyle="#fff6b0";

            ctx.lineWidth=5;

            ctx.beginPath();

            ctx.ellipse(
                drawX,
                p.y,
                p.radius+25,
                p.radius-15,
                0,
                0,
                Math.PI*2
            );

            ctx.stroke();

        }

        ctx.fillStyle="white";

        ctx.font="18px Arial";

        ctx.fillText(
            name,
            drawX-p.radius,
            p.y+p.radius+25
        );

    }

}

// --------------------
// Ganti Game Loop
// --------------------

function gameLoop(){

    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    updateWarp();

    drawStars();

    drawPlanets();

    moveShip();

    drawShip();

    requestAnimationFrame(gameLoop);

}
