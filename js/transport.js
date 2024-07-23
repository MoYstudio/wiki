var userLang = navigator.language || navigator.userLanguage;
const lanugages = ['cn','en','ru'];
let debugFlag = 1;
lanugages.forEach(lang => {
    if (userLang.toLowerCase().indexOf(`${lang}`) !== -1) {
        document.querySelectorAll(`#content-${lang}`).forEach(function(div) {
            div.style.display = 'block';
            console.log(`User Language Detected: ${lang}`);
            debugFlag = 0;
        });
    }
})
if(debugFlag){
    console.error(`Error: No Language Detected! Current User Language: ${userLang}`);
}
