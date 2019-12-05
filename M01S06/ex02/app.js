let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'We do not know what browser we are using';


if(userAgentString.includes('Chrome')) {
message = 'Navigate using chrome';
}

if(userAgentString.includes('Edge')) {
  message = 'Navigate using Edge';
}
paragraphElement.innerText = message;
document.body.appendChild(paragraphElement);
