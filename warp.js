// ======================================
// WARP.JS
// Warp Drive
// ======================================

const Warp = {

    active:false,

    speed:0,

    maxSpeed:500,

    energy:100

};

// =====================
// Aktifkan Warp
// =====================

function startWarp(){

    if(Warp.energy <= 0) return;

    Warp.active = true;

    const msg = document.getElementById("message");

    if(msg)
        msg.textContent = "⚡ Warp Drive Aktif";

}

// =====================
// Matikan Warp
// =====================

function stopWarp(){

    Warp.active = false;

    const msg = document.getElementById("message");

    if(msg)
        msg.textContent = "Warp Drive Dimatikan";

}

// =====================
// Update Warp
// =====================

function updateWarp(delta){

    if(Warp.active){

        if(Warp.speed < Warp.maxSpeed){

            Warp.speed += 120 * delta;

        }

        Warp.energy -= 8 * delta;

        if(Warp.energy <= 0){

            Warp.energy = 0;

            stopWarp();

        }

    }else{

        if(Warp.speed > 0){

            Warp.speed -= 180 * delta;

        }

        if(Warp.speed < 0)
            Warp.speed = 0;

        if(Warp.energy < 100){

            Warp.energy += 4 * delta;

        }

        if(Warp.energy > 100)
            Warp.energy = 100;

    }

    // HUD

    const speed = document.getElementById("speed");

    if(speed)
        speed.textContent = Math.floor(Warp.speed);

    const energy = document.getElementById("energy");

    if(energy)
        energy.value = Warp.energy;

}

// =====================
// Efek Warp
// =====================

function drawWarpEffect(){

    if(!Warp.active) return;

    ctx.strokeStyle = "white";

    ctx.lineWidth = 2;

    for(let i=0;i<300;i++){

        const x = Math.random()*canvas.width;
        const y = Math.random()*canvas.height;

        ctx.beginPath();

        ctx.moveTo(x,y);

        ctx.lineTo(
            x,
            y+20+Math.random()*80
        );

        ctx.stroke();

    }

}
