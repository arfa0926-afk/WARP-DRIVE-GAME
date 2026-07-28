// ======================================
// SCRIPT.JS
// Main Game Controller
// ======================================

console.log("🚀 Warp Drive Game dimulai");

// Status game
let GameState = {
    started: true,
    destination: null
};

// Menampilkan pesan di HUD
function showMessage(text) {

    const msg = document.getElementById("message");

    if(msg){
        msg.textContent = text;
    }

}

// Memilih tujuan planet
function goPlanet(name){

    GameState.destination = name;

    showMessage("🚀 Menuju " + name);

    if(typeof window.goPlanet === "function"){
        // Fungsi utama berada di planets.js
    }

}

// Saat halaman selesai dimuat
window.addEventListener("load", () => {

    showMessage("🛰️ Sistem Warp Drive Online");

});

// Tombol keyboard tambahan
window.addEventListener("keydown",(e)=>{

    switch(e.key.toLowerCase()){

        case "f":
            if(typeof startWarp==="function")
                startWarp();
            break;

        case "g":
            if(typeof stopWarp==="function")
                stopWarp();
            break;

        case "r":
            if(typeof restartGame==="function")
                restartGame();
            break;

    }

});
