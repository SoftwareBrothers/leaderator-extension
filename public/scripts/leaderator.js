window.addEventListener('load', function () {
    console.log('DO SOMETHING');

    const element = document.createElement('div');
    element.setAttribute("style", "height:40%");
    element.setAttribute("id", "leaderator-container");

    console.log('modal', element);

    element.innerHTML =
      `<iframe id="leader-content" style="height:100%"></iframe>`;
    document.body.appendChild(element);
    const iframe = document.getElementById("leader-content");
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.right = '100px';

    console.log('iframe', iframe);
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;

});
