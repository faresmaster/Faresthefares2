const paragraphLog = (...message) => {
let logContainer = document.querySelector('.logs');
let messageParagraph = document.createElement('p');
let message = '';

if (!logContainer) {
  logContainer = document.createElement('div');
  logContainer.classList.add('logs');
  document.body.appendChild(logContainer);
}

for(let i =0; i< messages.length; i++) {
  message += `${messages[i]}`;
}

messageParagraph.innerText = message;
logContainer.appendChild(messageParagraph);
};

console.domlog = paragraphLog;