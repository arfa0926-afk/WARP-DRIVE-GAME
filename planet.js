// ======================================
// PLANETS.JS
// Planet & Autopilot
// ======================================

const planetImages = {};

function loadPlanetImage(name,file){

    const img = new Image();

    img.src = "images/" + file;

    planetImages[name] = img;

}

loadPlanetImage("Bumi","earth.png");
loadPlanetImage("Mars","mars.png");
loadPlanetImage("Jupiter","jupiter.png");
loadPlanetImage("Saturnus","saturn.png");
loadPlanetImage("Neptunus","neptune.png");

const Planets=[

{
name:"Bumi",
x:1500,
y:1200,
radius:60,
color:"#4da6ff"
},

{
name:"Mars",
x:3500,
y:1700,
radius:45,
color:"#cc5533"
},

{
name:"Jupiter",
x:6500,
y:2600,
radius:90,
color:"#d9b38c"
},

{
name:"Saturnus",
x:9000,
y:4200,
radius:85,
color:"#f2d57c"
},

{
name:"Neptunus",
x:12000,
y:2800,
radius:70,
color:"#4d7dff"
}

];

let targetPlanet = null;

// ======================
// Tombol Planet
// ======================

function goPlanet(name){

    targetPlanet =
        Planets.find(p=>p.name===name);

    const label =
        document.getElementById("planetName");

    if(label)
        label.textContent=name;

    const msg =
        document.getElementById("message");

    if(msg)
        msg.textContent =
        "Menuju " + name;

}

// ======================
// Autopilot
// ======================

function updatePlanet(){

    if(targetPlanet==null)
        return;

    let dx =
        targetPlanet.x-Player.x;

    let dy =
        targetPlanet.y-Player.y;

    let dist =
        Math.sqrt(dx*dx+dy*dy);

    if(dist>5){

        Player.x += dx*0.01;
        Player.y += dy*0.01;

    }

    if(dist<targetPlanet.radius){

        targetPlanet=null;

        const msg =
        document.getElementById("message");

        if(msg)
            msg.textContent =
            "Tiba di planet";

    }

}

// ======================
// Draw Planet
// ======================

function drawPlanets(){

    for(const p of Planets){

        let x =
            p.x-Camera.x;

        let y =
            p.y-Camera.y;

        const img =
            planetImages[p.name];

        if(img && img.complete){

            ctx.drawImage(

                img,

                x-p.radius,

                y-p.radius,

                p.radius*2,

                p.radius*2

            );

        }else{

            ctx.beginPath();

            ctx.fillStyle=p.color;

            ctx.arc(

                x,

                y,

                p.radius,

                0,

                Math.PI*2

            );

            ctx.fill();

        }

        if(p.name==="Saturnus"){

            ctx.strokeStyle="#f7e7a6";

            ctx.lineWidth=4;

            ctx.beginPath();

            ctx.ellipse(

                x,

                y,

                p.radius+20,

                p.radius-10,

                0,

                0,

                Math.PI*2

            );

            ctx.stroke();

        }

        ctx.fillStyle="white";

        ctx.font="18px Arial";

        ctx.fillText(

            p.name,

            x-p.radius,

            y+p.radius+25

        );

    }

}
