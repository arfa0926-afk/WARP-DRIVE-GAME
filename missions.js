// ======================================
// MISSIONS.JS
// Sistem Misi + Skor
// ======================================


// =====================
// DATA MISI
// =====================

const Mission = {

    score:0,

    visited:[],

    totalPlanet:5,

    completed:false

};


// =====================
// CEK PLANET DIKUNJUNGI
// =====================

function checkMission(){


    for(const p of Planets){


        let dx =
        Player.x - p.x;


        let dy =
        Player.y - p.y;


        let distance =
        Math.sqrt(
            dx*dx + dy*dy
        );


        if(distance < p.radius + 100){


            if(!Mission.visited.includes(p.name)){


                Mission.visited.push(p.name);


                Mission.score += 100;


                const msg =
                document.getElementById("message");


                if(msg)

                    msg.textContent =
                    "🌍 Planet "+p.name+
                    " ditemukan!";


            }

        }

    }



    if(Mission.visited.length >= Mission.totalPlanet){


        Mission.completed=true;


        const msg =
        document.getElementById("message");


        if(msg)

            msg.textContent =
            "🏆 MISI SELESAI! Semua planet ditemukan";


    }

}


// =====================
// UPDATE MISI
// =====================

function updateMission(){

    checkMission();

}


// =====================
// HUD MISI
// =====================

function drawMissionHUD(){


    ctx.fillStyle=
    "rgba(0,0,0,0.5)";


    ctx.fillRect(

        15,

        200,

        250,

        120

    );



    ctx.fillStyle="white";

    ctx.font="18px Arial";


    ctx.fillText(

        "📜 MISI",

        30,

        230

    );


    ctx.fillText(

        "Planet: "+
        Mission.visited.length+
        "/"+
        Mission.totalPlanet,

        30,

        260

    );


    ctx.fillText(

        "Skor: "+
        Mission.score,

        30,

        290

    );


}
