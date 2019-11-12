var dragos = {
  name: 'Dragos',
  surname:'Iordache',
  friends:{}
}

var larry = {
  name: 'larry',
  surname: 'larreson',
  friends:{}
}

var carol = {
  name: 'carol',
  surname: 'carolson',
  friends:{}
}

var steven = {
  name: 'steven',
  surname: 'stevenson',
  friends:{}
}

var anita ={
  name: 'andra',
  surname: 'andrason',
  friends:{}
}

dragos.friends.larry = larry;
dragos.friends.anita = anita;
dragos.friends.steven = steven;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos;

larry.friends.steven = steven;
anita.friends.steven = steven;
steven.friends.larry = steven;
steven.friends.anita = steven;

anita.friends.carol = carol;
carol.friends.anita = anita;

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(
  larry.friends.steven.friends.dragos.name + ' ' + larry.friends.steven.friends.dragos.surname
);

console.log(
  dragos.friends.steven.friends.larry.name + ' ' + dragos.friends.steven.friends.larry.surname 
)
console.log(
  carol.friends.anita.friends.dragos.name + ' ' + carol.friends.anita.friends.dragos.surname
);

console.log(
  anita.friends.dragos.name.length + ' ' + anita.friends.dragos.surname.length
);