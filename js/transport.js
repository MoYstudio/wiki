/*var userLang=navigator.language||navigator.userLanguage;
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
}*/
const userLang = navigator.language || navigator.userLanguage;
const lanugages = ['cn','en','ru'];
const basePath = '../src/md';
lanugages.forEach(lang => {
    if (userLang.indexOf(`${lang}`) === 0) {
        document.querySelectorAll(`[id^="content-${lang}"]`).forEach(function(div) {
            div.style.display = 'block';
        });
    }
})
