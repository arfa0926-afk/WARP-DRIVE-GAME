// ======================================
// STARS.JS
// Bintang & Nebula
// ======================================

const Stars = [];

for(let i=0;i<2000;i++){

    Stars.push({

        x:Math.random()*20000,

        y:Math.random()*20000,

        size:Math.random()*2+0.5,

        alpha:Math.random()

    });

}

const Nebulas=[];

for(let i=0;i<35;i++){

    Nebulas.push({

        x:Math.random()*20000,

        y:Math.random()*20000,

        radius:150+Math.random()*350,

        color:[
            "#3366ff",
            "#9933ff",
            "#00ffff",
            "#ff3399",
            "#ff6633"
        ][Math.floor(Math.random()*5)]

    });

}

// ======================
// Nebula
// ======================

function drawGalaxy(){

    for(const n of Nebulas){

        const x=n.x-Camera.x*0.15;

        const y=n.y-Camera.y*0.15;

        const g=ctx.createRadialGradient(

            x,

            y,

            0,

            x,

            y,

            n.radius

        );

        g.addColorStop(0,n.color+"66");

        g.addColorStop(1,"transparent");

        ctx.fillStyle=g;

        ctx.beginPath();

        ctx.arc(

            x,

            y,

            n.radius,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

}

// ======================
// Bintang
// ======================

function drawStars(){

    ctx.fillStyle="white";

    for(const star of Stars){

        const x=star.x-Camera.x*0.30;

        const y=star.y-Camera.y*0.30;

        ctx.globalAlpha=star.alpha;

        ctx.fillRect(

            x,

            y,

            star.size,

            star.size

        );

    }

    ctx.globalAlpha=1;

}

// ======================
// Warp Effect
// ======================

function drawWarpStars(){

    if(typeof Warp==="undefined")
        return;

    if(!Warp.active)
        return;

    ctx.strokeStyle="white";

    for(let i=0;i<250;i++){

        const x=Math.random()*canvas.width;

        const y=Math.random()*canvas.height;

        ctx.beginPath();

        ctx.moveTo(x,y);

        ctx.lineTo(

            x,

            y+30+Math.random()*80

        );

        ctx.stroke();

    }

}
