// ======================================
// ENEMY.JS
// Kapal Musuh
// ======================================

const Enemies = [];

for(let i=0;i<15;i++){

    Enemies.push({

        x:Math.random()*25000,

        y:Math.random()*25000,

        hp:100,

        speed:1+Math.random()*2,

        angle:0

    });

}

function updateEnemies(delta){

    for(const enemy of Enemies){

        let dx=Player.x-enemy.x;
        let dy=Player.y-enemy.y;

        let dist=Math.sqrt(dx*dx+dy*dy);

        if(dist<800){

            enemy.x+=(dx/dist)*enemy.speed;
            enemy.y+=(dy/dist)*enemy.speed;

        }

        if(dist<40){

            Player.shield-=0.2;

            if(Player.shield<0)
                Player.shield=0;

        }

    }

}

function drawEnemies(){

    for(const enemy of Enemies){

        const x=enemy.x-Camera.x;
        const y=enemy.y-Camera.y;

        ctx.save();

        ctx.translate(x,y);

        ctx.fillStyle="#ff3333";

        ctx.beginPath();

        ctx.moveTo(0,-18);
        ctx.lineTo(-12,15);
        ctx.lineTo(12,15);
        ctx.closePath();

        ctx.fill();

        // HP Bar
        ctx.fillStyle="red";
        ctx.fillRect(-20,-28,40,5);

        ctx.fillStyle="lime";
        ctx.fillRect(-20,-28,enemy.hp/2.5,5);

        ctx.restore();

    }

}
