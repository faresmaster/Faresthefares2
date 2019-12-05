(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    const showMessaage = (message) => {
      let p = document.createElement('p');
      p.innerText = message;
      p.classList.add('message');
      
      document.body.appendChild(p);
      setTimeout(() => {
        p.remove();
      }, 1000);
    };

    stage.addEventListener('mouseover', () => {
     showMessaage('mouse is on the scene')
    });

    stage.addEventListener('mouseout', () => {
    showMessaage('mouse is off the scene')
    });

  });
})();