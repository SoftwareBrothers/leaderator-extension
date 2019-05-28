function loadCss(filename) {
    var cssNode = document.createElement("link");
    cssNode.setAttribute("rel", "stylesheet");
    cssNode.setAttribute("href", filename);
    cssNode.setAttribute("integrity", 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay');
    cssNode.setAttribute("crossorigin", 'anonymous');
    document.getElementsByTagName("head")[0].appendChild(cssNode);
}

window.addEventListener('load', () => {
    console.info('Leaderator is running.');

    const element = document.createElement('div');
    element.setAttribute('style', 'height:40%');
    element.setAttribute('id', 'leaderator-container');
    element.innerHTML = '<iframe id="leader-content"></iframe>';
    if (self === top) {
        document.body.appendChild(element);

        const iframe = document.getElementById('leader-content');
        iframe.classList.add('leaderator-iframe');
        iframe.style.right = '-300px';
        // eslint-disable-next-line
        iframe.src = chrome.extension.getURL('index.html');
        iframe.frameBorder = 0;

        iframe.onload = function () {

            const toggle = document.createElement('div');
            toggle.classList.add('leaderator-toggle');
            toggle.classList.add('no-select');
            toggle.innerHTML = '<i class="fas fa-chevron-left fa-2x"></i>';
            toggle.style.right = '0';
            toggle.onclick = function () {
                toggle.classList.toggle('open');
                element.classList.add('open');
                iframe.style.right = iframe.style.right === '0px' ? '-300px' : '0';
                toggle.style.right = toggle.style.right === '0px' ? '300px' : '0'
            };
            element.appendChild(toggle);
            loadCss("https://use.fontawesome.com/releases/v5.8.2/css/all.css")
        }
    }
    ;
});


