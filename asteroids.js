// ======================================
// ASTEROIDS.JS
// Asteroid + Tabrakan + Ledakan
// ======================================


// =====================
// Data Asteroid
// =====================

const Asteroids = [];

for(let i = 0; i < 150; i++){

    Asteroids.push({

        x: Math.random()*20000,
        y: Math.random()*20000,

        radius: 10 + Math.random()*25,

        speed:
        0.2 + Math.random()*1,

        angle:
        Math.random()*Math.PI*2

    });

}


// =====================
// Ledakan
// =====================

const Explosions = [];

function createExplosion(x,y){

    Explosions.push({

        x:x,
        y:y,

        size:5,

        maxSize:80,

        alpha:1

    });


    if(typeof playExplosion==="function"){
        playExplosion();
    }

}


// =====================
// Update Asteroid
// =====================

function updateAsteroids(delta){

    for(const a of Asteroids){

        a.x += Math.cos(a.angle)
        * a.speed;

        a.y += Math.sin(a.angle)
        * a.speed;


        // kembali ke dunia

        if(a.x > 20000)
            a.x = 0;

        if(a.y > 20000)
            a.y = 0;


        checkAsteroidCollision(a);

    }



    updateExplosions();

}


// =====================
// Cek Tabrakan
// =====================

function checkAsteroidCollision(a){


    const dx =
    a.x - Player.x;

    const dy =
    a.y - Player.y;


    const distance =
    Math.sqrt(
        dx*dx + dy*dy
    );


    if(distance < a.radius + 25){


        createExplosion(
            Player.x,
            Player.y
        );


        Player.shield -= 25;


        // asteroid dipindah

        a.x =
        Math.random()*20000;

        a.y =
        Math.random()*20000;



        if(Player.shield <= 0){

            Player.shield = 100;


            Player.x = 500;
            Player.y = 500;


            const msg =
            document.getElementById("message");

            if(msg)
                msg.textContent =
                "💥 Pesawat hancur! Respawn";

        }

    }

}


// =====================
// Update Ledakan
// =====================

function updateExplosions(){

    for(let i=Explosions.length-1;i>=0;i--){

        let e=Explosions[i];


        e.size += 3;

        e.alpha -= 0.03;


        if(e.alpha<=0){

            Explosions.splice(i,1);

        }

    }

}


// =====================
// Gambar Asteroid
// =====================

function drawAsteroids(){

    ctx.fillStyle="#777";


    for(const a of Asteroids){

        ctx.beginPath();

        ctx.arc(

            a.x-Camera.x,

            a.y-Camera.y,

            a.radius,

            0,

            Math.PI*2

        );

        ctx.fill();

    }


    drawExplosions();

}


// =====================
// Gambar Ledakan
// =====================

function drawExplosions(){

    for(const e of Explosions){

        ctx.strokeStyle =
        "rgba(255,120,0,"+
        e.alpha+
        ")";


        ctx.lineWidth=5;


        ctx.beginPath();


        ctx.arc(

            e.x-Camera.x,

            e.y-Camera.y,

            e.size,

            0,

            Math.PI*2

        );


        ctx.stroke();

    }

}
