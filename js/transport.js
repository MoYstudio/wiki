const userLang = navigator.language || navigator.userLanguage;
const lanugages = ['cn','en','ru'];
let debugFlag = 1;
lanugages.forEach(lang => {
    if (userLang.indexOf(`${lang}`) !== -1) {
        document.querySelectorAll(`[id^="content-${lang}"]`).forEach(function(div) {
            div.style.display = 'block';
            console.log(`User Language Detected: ${lang}`);
            debugFlag = 0;
        });
    }
})
if(debugFlag){
    console.error(`Error: No Language Detected!`)
}
