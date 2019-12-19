let imageElement = document.querySelector('.image');

const showMessage = (message => {
  let paragraph = document.getElementById('toaster');
  if (paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    document.body.appendChild(p);
  }

});

imageElement.addEventListener('load', () => {
  showMessage('Image has loaded');
  imageElement.addEventListener('click', (evt) => {
    alert(`the image with the URL ${evt.target.src} has loaded`);
  });
});
