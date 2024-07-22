var userLang=navigator.language||navigator.userLanguage;
if (userLang.indexOf('zh')===0){
    var changeDivs=document.querySelectorAll("#content-cn");
    changeDivs.forEach(function(div){
        div.style.display='block';
    })
}
else{
    var changeDivs=document.querySelectorAll("#content-en");
    changeDivs.forEach(function(div){
        div.style.display='block';
    })
}