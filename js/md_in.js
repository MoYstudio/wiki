function loadMarkdownFile() {
        fetch("../src/md/cn/intro.md")
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-cn-intro').innerHTML = html;
        });
        fetch("../src/md/cn/studio.md")
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-cn-studio').innerHTML = html;
        });
        fetch('../src/md/cn/works.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-cn-works').innerHTML = html;
        });
        fetch('../src/md/cn/server.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-cn-server').innerHTML = html;
        });
        fetch('../src/md/cn/mc.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-cn-mc').innerHTML = html;
        });

        
        fetch('../src/md/en/intro.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-en-intro').innerHTML = html;
        });
        fetch('../src/md/en/studio.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-en-studio').innerHTML = html;
        });
        fetch('../src/md/en/works.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-en-works').innerHTML = html;
        });
        fetch('../src/md/en/server.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-en-server').innerHTML = html;
        });
        fetch('../src/md/en/mc.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-en-mc').innerHTML = html;
        });
        fetch('../src/md/divide.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content-divide').innerHTML = html;
        });
}