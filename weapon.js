// ======================================
// WEAPON.JS
// Senjata Laser
// ======================================

const Bullets = [];

const Weapon = {
    damage: 25,
    speed: 18,
    cooldown: 0.2,
    timer: 0
};

// =====================
// Menembak
// =====================

function shoot(){

    if(Weapon.timer > 0)
        return;

    Bullets.push({

        x: Player.x,
        y: Player.y,

        angle: Player.rotation,

        life: 120

    });

    Weapon.timer = Weapon.cooldown;

}

// =====================
// Update
// =====================

function updateWeapon(delta){

    if(Weapon.timer > 0)
        Weapon.timer -= delta;

    if(Keys[" "]){
        shoot();
    }

    for(let i=Bullets.length-1;i>=0;i--){

        const b = Bullets[i];

        b.x += Math.cos(b.angle) * Weapon.speed;
        b.y += Math.sin(b.angle) * Weapon.speed;

        b.life--;

        if(b.life <= 0){

            Bullets.splice(i,1);
            continue;

        }

        // Tabrakan musuh
        if(typeof Enemies !== "undefined"){

            for(let j=Enemies.length-1;j>=0;j--){

                const e = Enemies[j];

                const dx = b.x - e.x;
                const dy = b.y - e.y;

                const dist = Math.sqrt(dx*dx + dy*dy);

                if(dist < 20){

                    e.hp -= Weapon.damage;

                    if(typeof createExplosion==="function"){
                        createExplosion(e.x,e.y);
                    }

                    Bullets.splice(i,1);

                    if(e.hp <= 0){

                        Enemies.splice(j,1);

                        if(typeof Mission!=="undefined"){
                            Mission.score += 50;
                        }

                    }

                    break;

                }

            }

        }

    }

}

// =====================
// Gambar Laser
// =====================

function drawWeapon(){

    ctx.fillStyle = "#00ffff";

    for(const b of Bullets){

        ctx.beginPath();

        ctx.arc(

            b.x - Camera.x,
            b.y - Camera.y,

            3,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

}
