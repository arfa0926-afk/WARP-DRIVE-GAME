// ======================================
// WARP.JS
// Sistem Warp Drive
// ======================================


// =====================
// DATA WARP
// =====================

const Warp = {

    active:false,

    speed:0,

    maxSpeed:1000,

    energy:100,

    cooldown:0

};


// =====================
// AKTIFKAN WARP
// =====================

function startWarp(){


    if(Warp.energy <= 5)
        return;


    Warp.active=true;


    if(typeof playWarpSound==="function")
        playWarpSound();



    const msg =
    document.getElementById("message");


    if(msg)
        msg.textContent=
        "⚡ WARP DRIVE AKTIF";

}



// =====================
// MATIKAN WARP
// =====================

function stopWarp(){


    Warp.active=false;


    const msg =
    document.getElementById("message");


    if(msg)
        msg.textContent=
        "Warp dimatikan";

}



// =====================
// UPDATE WARP
// =====================

function updateWarp(delta){


    if(Warp.active){


        // akselerasi

        if(Warp.speed < Warp.maxSpeed){

            Warp.speed +=
            400 * delta;

        }



        // konsumsi energi

        Warp.energy -=
        10 * delta;



        if(Warp.energy<=0){

            Warp.energy=0;

            stopWarp();

        }


    }
    else{


        // perlambatan

        Warp.speed -=
        500 * delta;


        if(Warp.speed<0)

            Warp.speed=0;



        // isi energi

        Warp.energy +=
        5 * delta;



        if(Warp.energy>100)

            Warp.energy=100;


    }



    // HUD

    const speed =
    document.getElementById("speed");


    if(speed)

        speed.textContent =
        Math.floor(Warp.speed)+" C";



    const energy =
    document.getElementById("energy");


    if(energy)

        energy.value =
        Warp.energy;


}



// =====================
// EFEK WARP
// =====================

function drawWarpEffect(){


    if(!Warp.active)
        return;



    ctx.save();


    ctx.strokeStyle =
    "rgba(255,255,255,0.8)";


    ctx.lineWidth=2;



    for(let i=0;i<250;i++){


        let x =
        Math.random()*canvas.width;


        let y =
        Math.random()*canvas.height;



        ctx.beginPath();


        ctx.moveTo(
            x,
            y
        );


        ctx.lineTo(

            x,

            y + 100 + Warp.speed/5

        );


        ctx.stroke();


    }



    // cahaya tengah warp

    let glow =
    ctx.createRadialGradient(

        canvas.width/2,

        canvas.height/2,

        0,

        canvas.width/2,

        canvas.height/2,

        300

    );


    glow.addColorStop(
        0,
        "rgba(255,255,255,0.5)"
    );


    glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
    );


    ctx.fillStyle=glow;


    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.restore();

}
