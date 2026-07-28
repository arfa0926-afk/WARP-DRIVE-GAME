// ======================================
// MOBILE.JS
// Kontrol HP / Touch
// ======================================


// =====================
// DATA TOUCH
// =====================

const TouchControl = {

    up:false,
    down:false,
    left:false,
    right:false

};


// =====================
// HUBUNGKAN TOUCH KE KEYS
// =====================

function updateMobileKeys(){

    if(TouchControl.up)
        Keys["w"]=true;
    else
        Keys["w"]=false;


    if(TouchControl.down)
        Keys["s"]=true;
    else
        Keys["s"]=false;


    if(TouchControl.left)
        Keys["a"]=true;
    else
        Keys["a"]=false;


    if(TouchControl.right)
        Keys["d"]=true;
    else
        Keys["d"]=false;

}


// Jalankan setiap frame

setInterval(
    updateMobileKeys,
    50
);


// =====================
// BUTTON TOUCH
// =====================

function holdButton(id,direction){


    const btn =
    document.getElementById(id);


    if(!btn)
        return;



    btn.addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            TouchControl[direction]=true;

        }
    );



    btn.addEventListener(
        "touchend",
        function(){

            TouchControl[direction]=false;

        }
    );

}


// =====================
// AKTIFKAN TOMBOL
// =====================

window.onload=function(){


    holdButton(
        "btnUp",
        "up"
    );


    holdButton(
        "btnDown",
        "down"
    );


    holdButton(
        "btnLeft",
        "left"
    );


    holdButton(
        "btnRight",
        "right"
    );


};
