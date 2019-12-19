let boxElement = document.querySelector('.box');
let applyButton = document.querySelector('#applyButton');
let darkenButton = document.getElementById('darkenButton')
let cssClassName = 'animate-class';

window.setTimeout(() => {
  boxElement.classList.add('animate-class');

  window.setTimeout(() => {
    boxElement.classList.remove('animate-class');
  }, 2000);
}, 2000);

applyButton.addEventListener('click', (evt) => {
  if (boxElement.classList.contains(cssClassName)) {
    boxElement.classList.remove(cssClassName);
    evt.target.innertext = 'apply';
  } else {
    boxElement.classList.add(cssClassName);
    evt.target.innertext = 'eliminate';
  }
});

darkenButton.addEventListener('click',(evt) => {
  boxElement.style.backgroundColor = '#000';
});
