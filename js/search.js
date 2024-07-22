var serInput=document.getElementById('serInput');
var serResult=document.querySelector('.serResult');
serInput.addEventListener('input',function(){
    var serKeyword=this.ariaValueText.toLowerCase();
    serResult.innerHTML='';
    if(serKeyword.trim()===''){
        serResult.style.display='none';
        return;
    }
    fetch('../src/xml/links.xml')
        .then(response=> response.text())
        .then(data=>{
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(data,'application/xml');
            var links=xmlDoc.querySelectorAll('link');
            let hasResults=false;
            links.forEach(link => {
                const url = link.querySelector('url').textContent.toLowerCase();
                const title = link.querySelector('title').textContent.toLowerCase();

                if (title.includes(serKeyword) || url.includes(serKeyword)) {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${url}" rel="external nofollow" data-lastfrom="" title="${title}">${title}</a>`;
                    serResult.appendChild(li);
                    hasResults = true;
                }
            });
            serResult.style.display=hasResults?'block':'none';
        })
        .catch(error => console.error('Error fetching XML:', error));
});
serInput.addEventListener('blur', function () {
    setTimeout(() => {
        serResult.style.display = 'none';
    }, 200);
});