var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name: 'Carol',
    surname: 'caroleson',
    age: 31

  }, {
    name: 'Steven',
    surname: 'Steven',
    age: 29
  }]
};

console.log(
  'Ma numesc ' + person.name + ' ' + person.surname + 
  '   si stiu  ' + person.skills[0] + 'si ' + person.skills[2]
 + '.'
 );

 console.log(`sunt ${person.name} si acum invat javascript.`);
 console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}`)
 console.log(`Ma numesc ${person.name} si invat ${person.skills[1]}`);
 console.log(`Sunt ${person.name} si stiu ${person.skills[0]} si ${person.skills[2]}`);
 console.log(`Am ${person.friends.length} firends: ${person.friends[0].surname}, ${person.friends[1].surname} si ${person.friends[2].surname}`);
 console.log(`My name is ${person.name} ${person.surname} and I have ${person.friends.length}.`);