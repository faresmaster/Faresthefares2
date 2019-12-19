const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById(targetElement);

  if (paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  }
};

let originalW = window.innerWidth;
let originalH = window.innerHeight;


window.addEventListener('resize', module.exports((evt) => {
  console.log('the window has changed dimension');
  showMessage(`the window ${evt.target.innerWidth} pixels`, 'toaster');
  if (evt.target.innerWidth !== originalW) {
    showMessage('the window has changed width', 'salam');
  } else {
    showMessage('the window has not changed width', 'salam');
  }

  showMessage(`the window ${evt.target.innerHeight} pixels`, 'toaster');
  if (evt.target.innerHeight !== originalH) {
    showMessage('the window has changed height', 'salam');
  } else {
    showMessage('the window has not changed height', 'salam');
  }
}, 400));



