var menus=document.querySelectorAll('.menu');
var ser=document.querySelector('.ser');
var serResult=document.querySelector('.serResult');
var scroll=window.scrollY;
let hidden=0;
function menu(){
    scroll=window.scrollY;
    if(scroll>=100){
        hidden=1;
    }
    if(scroll<100){
        hidden=0;
    }
    if(hidden){
        menus.forEach(function(now){
            now.style.opacity=0;
        });
        ser.style.opacity=0;
        serResult.style.opacity=0;
    }
    else{
        menus.forEach(function(now){
            now.style.opacity=1;
        });
        ser.style.opacity=1;
        serResult.style.opacity=1;
    }
}
setInterval(menu(),0);