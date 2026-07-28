// ======================================
// ASTEROIDS.JS
// Asteroid + Tabrakan + Ledakan
// ======================================


// =====================
// DATA ASTEROID
// =====================

const Asteroids = [];

for(let i=0;i<200;i++){

    Asteroids.push({

        x: Math.random()*30000,

        y: Math.random()*30000,

        radius: 10 + Math.random()*25,

        speed: 0.5 + Math.random()*2,

        angle: Math.random()*Math.PI*2

    });

}


// =====================
// DATA LEDAKAN
// =====================

const Explosions=[];


// =====================
// BUAT LEDAKAN
// =====================

function createExplosion(x,y){

    Explosions.push({

        x:x,

        y:y,

        radius:5,

        alpha:1,

        particles:20

    });


    if(typeof playExplosion==="function"){

        playExplosion();

    }

}


// =====================
// UPDATE ASTEROID
// =====================

function updateAsteroids(delta){


    for(const a of Asteroids){


        a.x +=
        Math.cos(a.angle)
        * a.speed;


        a.y +=
        Math.sin(a.angle)
        * a.speed;



        // cek tabrakan

        checkAsteroidCollision(a);


        // reset jika terlalu jauh

        if(a.x>30000)
            a.x=0;


        if(a.y>30000)
            a.y=0;


    }



    updateExplosions();

}


// =====================
// TABRAKAN
// =====================

function checkAsteroidCollision(a){


    let dx =
    a.x - Player.x;


    let dy =
    a.y - Player.y;



    let distance =
    Math.sqrt(
        dx*dx + dy*dy
    );



    if(distance <
       a.radius + 25){


        createExplosion(
            Player.x,
            Player.y
        );



        Player.shield -= 20;



        // asteroid pindah

        a.x =
        Math.random()*30000;


        a.y =
        Math.random()*30000;



        if(Player.shield<=0){


            Player.shield=100;


            Player.x=500;

            Player.y=500;



            const msg =
            document.getElementById("message");


            if(msg)

                msg.textContent =
                "💥 Pesawat hancur! Respawn";


        }

    }

}


// =====================
// UPDATE LEDAKAN
// =====================

function updateExplosions(){


    for(let i=Explosions.length-1;i>=0;i--){


        const e =
        Explosions[i];


        e.radius += 4;


        e.alpha -= 0.03;



        if(e.alpha<=0){

            Explosions.splice(i,1);

        }

    }

}


// =====================
// GAMBAR ASTEROID
// =====================

function drawAsteroids(){


    for(const a of Asteroids){


        ctx.fillStyle="#777";


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
// GAMBAR LEDAKAN
// =====================

function drawExplosions(){


    for(const e of Explosions){


        ctx.strokeStyle =
        "rgba(255,120,0,"
        + e.alpha +
        ")";


        ctx.lineWidth=5;


        ctx.beginPath();


        ctx.arc(

            e.x-Camera.x,

            e.y-Camera.y,

            e.radius,

            0,

            Math.PI*2

        );


        ctx.stroke();


    }

}
