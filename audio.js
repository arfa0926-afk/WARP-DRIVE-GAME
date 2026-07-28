// ======================================
// AUDIO.JS
// Web Audio API
// ======================================

let audioCtx = null;

function initAudio(){

    if(audioCtx) return;

    audioCtx = new (
        window.AudioContext ||
        window.webkitAudioContext
    )();

}

// Aktifkan audio saat pertama kali klik
window.addEventListener("click", initAudio,{once:true});
window.addEventListener("keydown", initAudio,{once:true});

// ======================================
// Mesin Pesawat
// ======================================

let engineOsc = null;
let engineGain = null;

function startEngineSound(){

    if(!audioCtx) return;

    if(engineOsc) return;

    engineOsc = audioCtx.createOscillator();
    engineGain = audioCtx.createGain();

    engineOsc.type = "sawtooth";
    engineOsc.frequency.value = 70;

    engineGain.gain.value = 0.02;

    engineOsc.connect(engineGain);
    engineGain.connect(audioCtx.destination);

    engineOsc.start();

}

function stopEngineSound(){

    if(!engineOsc) return;

    engineOsc.stop();

    engineOsc.disconnect();

    engineGain.disconnect();

    engineOsc = null;
    engineGain = null;

}

// ======================================
// Warp
// ======================================

function playWarpSound(){

    if(!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "square";

    osc.frequency.setValueAtTime(
        200,
        audioCtx.currentTime
    );

    osc.frequency.exponentialRampToValueAtTime(
        1600,
        audioCtx.currentTime+1
    );

    gain.gain.setValueAtTime(
        0.12,
        audioCtx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime+1
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();

    osc.stop(audioCtx.currentTime+1);

}

// ======================================
// Ledakan
// ======================================

function playExplosion(){

    if(!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "triangle";

    osc.frequency.setValueAtTime(
        250,
        audioCtx.currentTime
    );

    osc.frequency.exponentialRampToValueAtTime(
        40,
        audioCtx.currentTime+0.6
    );

    gain.gain.setValueAtTime(
        0.2,
        audioCtx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime+0.6
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();

    osc.stop(audioCtx.currentTime+0.6);

}

// ======================================
// Tombol
// ======================================

function playClick(){

    if(!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "square";

    osc.frequency.value = 700;

    gain.gain.value = 0.05;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();

    osc.stop(audioCtx.currentTime+0.08);

}
