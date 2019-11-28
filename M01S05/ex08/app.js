let button = document.getElementById('clicker');
let removeEventButton = document.getElementById('removeEventButton');
let queryButton = document.getElementById('query');
let messageParagraph = document.getElementById('message');
const clickHandler = () => {
  alert('you pressed the thing')

}


button.addEventListener('click', clickHandler());
removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click',clickHandler);
});

queryButton.addEventListener('click', ()=> {
  age = prompt('introduce age');
let message = `you have ${age} years`;

messageParagraph.innerText = message;
});