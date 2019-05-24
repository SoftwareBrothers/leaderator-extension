window.addEventListener('load', () => {
  console.info('Leaderator is running.');

  const element = document.createElement('div');
  element.setAttribute('style', 'height:40%');
  element.setAttribute('id', 'leaderator-container');
  element.innerHTML = '<iframe id="leader-content"></iframe>';

  document.body.appendChild(element);

  const iframe = document.getElementById('leader-content');
  iframe.style.height = '100%';
  iframe.style.width = '300px';
  iframe.style.zIndex = '99999';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.right = '-300px';
  iframe.style.background = '#f8f9fa';
  // eslint-disable-next-line
  iframe.src = chrome.extension.getURL('index.html');
  iframe.frameBorder = 0;

  iframe.onload = function () {
    console.log('iframe loaded');

    const toggle = document.createElement('div');
    toggle.id = 'rstit-leaderator-toggle-iframe';
    toggle.classList.add('no-select');
    toggle.innerHTML = '<svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>';
    toggle.style.position = 'fixed';
    toggle.style.top = '0';
    toggle.style.right = '0';
    toggle.style.zIndex = '999999';
    toggle.style.background = '#ccc';
    toggle.style.cursor = 'pointer';

    toggle.onclick = function () {
      iframe.style.right = iframe.style.right === '0px' ? '-300px' : '0';
    };
    element.appendChild(toggle);
  };
});
