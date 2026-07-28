// ======================================
// SCRIPT.JS
// Penghubung Semua Sistem
// ======================================

console.log("🚀 Warp Drive Game Loaded");


// Mulai suara mesin setelah interaksi
window.addEventListener("keydown",()=>{

    if(typeof startEngineSound==="function"){
        startEngineSound();
    }

});


// Tombol klik
window.addEventListener("click",()=>{

    if(typeof playClick==="function"){
        playClick();
    }

});


// Cek game siap
window.onload=()=>{

    const msg=document.getElementById("message");

    if(msg){

        msg.textContent=
        "🚀 Sistem online. Selamat datang Kapten.";

    }

};
