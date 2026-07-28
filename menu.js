// ======================================
// MENU.JS
// Menu Utama Game
// ======================================


// =====================
// STATUS MENU
// =====================

const Menu = {

    started:false,

    paused:false

};


// =====================
// MULAI GAME
// =====================

function startGame(){

    Menu.started=true;

    Menu.paused=false;


    Game.running=true;


    const menu =
    document.getElementById("mainMenu");


    if(menu)
        menu.style.display="none";


    const msg =
    document.getElementById("message");


    if(msg)
        msg.textContent =
        "🚀 Misi dimulai! Selamat jalan Kapten";


}


// =====================
// PAUSE GAME
// =====================

function pauseGame(){

    Menu.paused =
    !Menu.paused;


    Game.running =
    !Menu.paused;



    const msg =
    document.getElementById("message");


    if(msg){

        if(Menu.paused)

            msg.textContent="⏸️ Game Pause";

        else

            msg.textContent="▶️ Game Dilanjutkan";

    }

}


// =====================
// RESTART GAME
// =====================

function restartGame(){


    Player.x=500;

    Player.y=500;


    Player.shield=100;


    Warp.speed=0;


    Warp.energy=100;


    Mission.score=0;


    Mission.visited=[];


    targetPlanet=null;



    const msg =
    document.getElementById("message");


    if(msg)

        msg.textContent =
        "🔄 Game diulang";

}



// =====================
// KEYBOARD CONTROL
// =====================

window.addEventListener(
"keydown",
function(e){


    if(e.key==="Escape"){

        pauseGame();

    }


});
