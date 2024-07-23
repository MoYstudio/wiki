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
