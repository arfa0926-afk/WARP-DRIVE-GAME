// ======================================
// UPGRADES.JS
// Sistem Upgrade Pesawat
// ======================================


// =====================
// DATA UPGRADE
// =====================

const Upgrade = {

    speedLevel:1,

    warpLevel:1,

    shieldLevel:1

};


// =====================
// HARGA UPGRADE
// =====================

function upgradePrice(level){

    return level * 200;

}


// =====================
// UPGRADE KECEPATAN
// =====================

function upgradeSpeed(){

    let price =
    upgradePrice(
        Upgrade.speedLevel
    );


    if(Mission.score >= price){


        Mission.score -= price;


        Upgrade.speedLevel++;


        Player.speed += 2;


        showUpgradeMessage(
            "🚀 Kecepatan meningkat!"
        );


    }else{

        showUpgradeMessage(
            "❌ Skor tidak cukup"
        );

    }

}


// =====================
// UPGRADE WARP
// =====================

function upgradeWarp(){


    let price =
    upgradePrice(
        Upgrade.warpLevel
    );


    if(Mission.score >= price){


        Mission.score -= price;


        Upgrade.warpLevel++;


        Warp.maxSpeed += 300;


        Warp.energy += 20;


        if(Warp.energy>100)
            Warp.energy=100;


        showUpgradeMessage(
            "⚡ Warp meningkat!"
        );


    }else{

        showUpgradeMessage(
            "❌ Skor tidak cukup"
        );

    }

}


// =====================
// UPGRADE SHIELD
// =====================

function upgradeShield(){


    let price =
    upgradePrice(
        Upgrade.shieldLevel
    );


    if(Mission.score >= price){


        Mission.score -= price;


        Upgrade.shieldLevel++;


        Player.shield += 25;


        if(Player.shield>100)
            Player.shield=100;


        showUpgradeMessage(
            "🛡️ Shield diperkuat!"
        );


    }else{

        showUpgradeMessage(
            "❌ Skor tidak cukup"
        );

    }

}


// =====================
// PESAN
// =====================

function showUpgradeMessage(text){

    const msg =
    document.getElementById("message");


    if(msg)
        msg.textContent=text;

}
