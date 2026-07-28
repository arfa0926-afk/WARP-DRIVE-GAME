// ======================================
// PLANETS.JS
// Planet + Tujuan Perjalanan
// ======================================


// =====================
// GAMBAR PLANET
// =====================

const PlanetImages = {};

function loadPlanetImage(name,file){

    const img = new Image();

    img.src = "images/" + file;

    PlanetImages[name] = img;

}


// Load gambar planet

loadPlanetImage("Bumi","earth.png");
loadPlanetImage("Mars","mars.png");
loadPlanetImage("Jupiter","jupiter.png");
loadPlanetImage("Saturnus","saturn.png");
loadPlanetImage("Neptunus","neptune.png");



// =====================
// DATA PLANET
// =====================

const Planets=[

    {
        name:"Bumi",
        x:2000,
        y:1500,
        radius:80,
        color:"#3498db"
    },


    {
        name:"Mars",
        x:4500,
        y:2200,
        radius:60,
        color:"#c0392b"
    },


    {
        name:"Jupiter",
        x:7500,
        y:3000,
        radius:120,
        color:"#d6b07a"
    },


    {
        name:"Saturnus",
        x:10500,
        y:4000,
        radius:110,
        color:"#e5d18c"
    },


    {
        name:"Neptunus",
        x:14000,
        y:2500,
        radius:90,
        color:"#4169e1"
    }

];


let targetPlanet=null;



// =====================
// PILIH PLANET
// =====================

function goPlanet(name){


    targetPlanet =
    Planets.find(
        p=>p.name===name
    );


    const text =
    document.getElementById("planetName");


    if(text)
        text.textContent=name;



    const msg =
    document.getElementById("message");


    if(msg)
        msg.textContent =
        "🚀 Menuju "+name;


}



// =====================
// AUTOPILOT
// =====================

function updatePlanet(delta){


    if(!targetPlanet)
        return;



    let dx =
    targetPlanet.x - Player.x;


    let dy =
    targetPlanet.y - Player.y;



    let distance =
    Math.sqrt(
        dx*dx + dy*dy
    );



    if(distance > targetPlanet.radius){


        Player.x +=
        dx * 0.02;


        Player.y +=
        dy * 0.02;


    }
    else{


        targetPlanet=null;


        const msg =
        document.getElementById("message");


        if(msg)
            msg.textContent =
            "🌍 Sampai di planet!";


    }

}



// =====================
// GAMBAR PLANET
// =====================

function drawPlanets(){


    for(const p of Planets){


        let x =
        p.x - Camera.x;


        let y =
        p.y - Camera.y;



        let img =
        PlanetImages[p.name];



        if(img && img.complete){


            ctx.drawImage(

                img,

                x-p.radius,

                y-p.radius,

                p.radius*2,

                p.radius*2

            );


        }
        else{


            ctx.fillStyle=p.color;


            ctx.beginPath();


            ctx.arc(

                x,

                y,

                p.radius,

                0,

                Math.PI*2

            );


            ctx.fill();


        }



        // Cincin Saturnus

        if(p.name==="Saturnus"){


            ctx.strokeStyle="#f5e6a8";

            ctx.lineWidth=5;


            ctx.beginPath();


            ctx.ellipse(

                x,

                y,

                p.radius+35,

                p.radius-15,

                0,

                0,

                Math.PI*2

            );


            ctx.stroke();


        }



        // Nama planet

        ctx.fillStyle="white";

        ctx.font="20px Arial";


        ctx.fillText(

            p.name,

            x-p.radius,

            y+p.radius+30

        );


    }

}
