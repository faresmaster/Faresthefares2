let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let countElement = document.querySelector('.count')
let count = 0;

stage.addEventListener('mouseover', () => {
  message.innerText = 'mouse is on scene';
  count = count + 1;

});

stage.addEventListener('mouseout', () => {
  message.innerText = 'mouse is out of the scene';
  countElement.innerText = `mouse was on scene ${count}times`;
});
