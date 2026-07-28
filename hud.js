// ======================================
// HUD.JS
// Head Up Display
// ======================================

const HUD = {

    fps:0,

    frameCount:0,

    lastTime:performance.now(),

    distance:0

};

// =====================
// Update HUD
// =====================

function updateHUD(){

    HUD.frameCount++;

    const now = performance.now();

    if(now - HUD.lastTime >= 1000){

        HUD.fps = HUD.frameCount;

        HUD.frameCount = 0;

        HUD.lastTime = now;

    }

    // Hitung jarak ke planet tujuan
    if(typeof targetPlanet !== "undefined" && targetPlanet){

        const dx = targetPlanet.x - Player.x;
        const dy = targetPlanet.y - Player.y;

        HUD.distance = Math.floor(
            Math.sqrt(dx*dx + dy*dy)
        );

    }else{

        HUD.distance = 0;

    }

}

// =====================
// Gambar HUD
// =====================

function drawHUD(){

    ctx.save();

    // Panel kiri atas
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fillRect(15,15,250,165);

    ctx.fillStyle = "#00ffff";
    ctx.font = "20px Arial";

    ctx.fillText("🚀 WARP DRIVE",30,45);

    ctx.font = "16px Arial";

    ctx.fillStyle = "white";

    ctx.fillText(
        "FPS : " + HUD.fps,
        30,
        75
    );

    ctx.fillText(
        "Kecepatan : " +
        Math.floor(Warp.speed),
        30,
        100
    );

    ctx.fillText(
        "Energi : " +
        Math.floor(Warp.energy) + "%",
        30,
        125
    );

    ctx.fillText(
        "Jarak : " +
        HUD.distance + " km",
        30,
        150
    );

    // Radar
    const radarX = canvas.width - 120;
    const radarY = 120;

    ctx.strokeStyle = "#00ffff";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.arc(
        radarX,
        radarY,
        70,
        0,
        Math.PI*2
    );

    ctx.stroke();

    // Pesawat
    ctx.fillStyle = "lime";

    ctx.beginPath();

    ctx.arc(
        radarX,
        radarY,
        4,
        0,
        Math.PI*2
    );

    ctx.fill();

    // Planet tujuan
    if(typeof targetPlanet !== "undefined" && targetPlanet){

        let dx =
        (targetPlanet.x-Player.x)/100;

        let dy =
        (targetPlanet.y-Player.y)/100;

        dx = Math.max(-60,Math.min(60,dx));
        dy = Math.max(-60,Math.min(60,dy));

        ctx.fillStyle="red";

        ctx.beginPath();

        ctx.arc(
            radarX+dx,
            radarY+dy,
            5,
            0,
            Math.PI*2
        );

        ctx.fill();

    }

    // Warning
    if(Warp.energy < 20){

        ctx.fillStyle="red";

        ctx.font="22px Arial";

        ctx.fillText(
            "⚠ ENERGI WARP KRITIS",
            canvas.width/2-120,
            50
        );

    }

    ctx.restore();

}
