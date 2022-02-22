let ua = detect.parse(navigator.userAgent);
document.querySelector('#browsername').innerText = `${ua.browser.name}`;
document.querySelector('#browserversion').innerText = `${ua.browser.version}`;
document.querySelector('#screenwidth').innerText = `${screen.width}`;
document.querySelector('#screenheight').innerText = `${screen.height}`;
