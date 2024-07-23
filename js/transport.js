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

const lanugages = ['cn','en','ru'];
const basePath = '../src/md';
    lanugages.forEach(lan => {
var userLang = navigator.language || navigator.userLanguage;

if (userLang.indexOf('zh') === 0) {
    document.querySelectorAll('[id^="content-cn"]').forEach(function(div) {
        div.style.display = 'block';
    });
} else if (userLang.indexOf('en') === 0) {
    document.querySelectorAll('[id^="content-en"]').forEach(function(div) {
        div.style.display = 'block';
    });
} else if (userLang.indexOf('ru') === 0) {
    document.querySelectorAll('[id^="content-ru"]').forEach(function(div) {
        div.style.display = 'block';
    });
}
    })
