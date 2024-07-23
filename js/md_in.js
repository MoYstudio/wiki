function loadMarkdownFile(){
    const lanugages = ['cn','en','ru'];
    const basePath = '../src/md';
    lanugages.forEach(lan => {
        fetch(`${basePath}${lang}/intro.md`)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(`markdown-content-${lang}-intro`).innerHTML = html;
        });
        fetch(`${basePath}${lang}/studio.md`)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(`markdown-content-${lang}-studio`).innerHTML = html;
        });

    fetch(`${basePath}${lang}/works.md`)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(`markdown-content-${lang}-works`).innerHTML = html;
        });

    fetch(`${basePath}${lang}/server.md`)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(`markdown-content-${lang}-server`).innerHTML = html;
        });

    fetch(`${basePath}${lang}/mc.md`)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(`markdown-content-${lang}-mc`).innerHTML = html;
        });
});
}