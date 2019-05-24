window.addEventListener('load', () => {
  console.info('Leaderator is running.');

  const element = document.createElement('div');
  element.setAttribute('style', 'height:40%');
  element.setAttribute('id', 'leaderator-container');

  element.innerHTML = '<iframe id="leader-content" style="height:100%; z-index:99999"></iframe>';
  document.body.appendChild(element);
  const iframe = document.getElementById('leader-content');
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.right = '100px';

  iframe.src = chrome.extension.getURL('index.html');
  iframe.frameBorder = 0;
});
