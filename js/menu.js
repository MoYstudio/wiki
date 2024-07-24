var menus=document.querySelectorAll(".menu");
var ser=document.querySelector(".ser");
var serResult=document.querySelector(".serResult");
var serInput=document.getElementById("serInput");
var scroll=window.scrollY;
var hidden=0;
var flag=1;
document.addEventListener("mousemove", function(event) {
    if(event.clientY<=(window.innerHeight*0.15)){
        hidden=0;
        flag=0;
        //console.log('set');
    }
    else{
        flag=1;
    }
});
function menu(){
    scroll=window.scrollY;
    if(scroll>=100 && flag){
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
        serInput.style.opacity=0;
    }
    else{
        menus.forEach(function(now){
            now.style.opacity=1;
        });
        ser.style.opacity=1;
        serResult.style.opacity=1;
        serInput.style.opacity=1;
    }
    //console.log(`Now hidden: ${hidden}`);
}
setInterval("menu()",50);