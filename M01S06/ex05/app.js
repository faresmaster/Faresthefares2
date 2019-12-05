(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeEventListener = document.querySelector('#removeButtons');

    const showAlert = () => {
      alert('button is pressed');
    };

    const addmessage = () => {
      let p = document.createElement('p');

      if (eventBound) {
        p.innerText = 'alerta a fost afisata'
      } else {
        p.innerText = "Alerta nu va fi afisata"
      }
      document.body.appendChild(p);
    };

    removeButtons.addEventListener('click', () => {

      if (!confirm('are you sure?')) {
        return;
      }
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
      }

      showButton.remove();
      toggleEventButton.remove();
    });

    showButton.addEventListener('click', showAlert);
    let eventBound = true;

    toggleEventButton.addEventListener('click', (evt) => {
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        evt.target.innerText = 'Porneste afiseara';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        evt.target.innerText = 'Opreste afiseara'
      }
    });
  });
})();
