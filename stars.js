// ======================================
// STARS.JS
// Bintang + Galaksi + Efek Warp
// ======================================


// =====================
// DATA BINTANG
// =====================

const Stars = [];

for(let i=0;i<2500;i++){

    Stars.push({

        x:Math.random()*30000,

        y:Math.random()*30000,

        size:Math.random()*2+0.5,

        brightness:0.3+Math.random()*0.7

    });

}


// =====================
// DATA GALAKSI / NEBULA
// =====================

const Galaxies=[];


for(let i=0;i<40;i++){

    Galaxies.push({

        x:Math.random()*30000,

        y:Math.random()*30000,

        radius:200+Math.random()*400,

        color:[
            "100,100,255",
            "255,100,200",
            "100,255,255",
            "255,180,100"
        ][Math.floor(Math.random()*4)]

    });

}


// =====================
// GAMBAR GALAKSI
// =====================

function drawGalaxy(){


    for(const g of Galaxies){


        const x =
        g.x - Camera.x*0.1;


        const y =
        g.y - Camera.y*0.1;



        const gradient =
        ctx.createRadialGradient(

            x,
            y,
            0,

            x,
            y,
            g.radius

        );


        gradient.addColorStop(
            0,
            "rgba("+g.color+",0.35)"
        );


        gradient.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );



        ctx.fillStyle=gradient;


        ctx.beginPath();


        ctx.arc(

            x,
            y,
            g.radius,
            0,
            Math.PI*2

        );


        ctx.fill();

    }

}



// =====================
// GAMBAR BINTANG
// =====================

function drawStars(){


    for(const star of Stars){


        let x =
        star.x - Camera.x*0.25;


        let y =
        star.y - Camera.y*0.25;



        ctx.globalAlpha =
        star.brightness;



        ctx.fillStyle="white";



        ctx.fillRect(

            x,

            y,

            star.size,

            star.size

        );


    }


    ctx.globalAlpha=1;


}



// =====================
// EFEK WARP
// =====================

function drawWarpStars(){


    if(typeof Warp==="undefined")
        return;


    if(!Warp.active)
        return;



    ctx.strokeStyle=
    "rgba(255,255,255,0.8)";


    ctx.lineWidth=2;



    for(let i=0;i<300;i++){


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

            y + 50 + Warp.speed/5

        );


        ctx.stroke();


    }

}
