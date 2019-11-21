let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'larry',
    surname: 'larryson',
    age: 30
  }, {
    name: 'steven',
    surname: 'stevenson',
    age: 31
  }, {
    name: 'carol',
    surname: 'carolson',
    age: 29
  }]
};


//for each to find the skills
console.warn('exercise starts here')
person.skills.forEach(function (skill, i) {
  if (i % 2 === 0) {
    console.log(skill);
  }
});

//similarly  find the skills that contain A 
console.warn('exercise starts here')
person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    if (skill.includes('a')) {
      console.log(skill);
    }
  }
});

//my friends are named so so, so so and so so 
console.warn('exercise starts here')
let sentence = 'My friends are named '
person.friends.forEach(function (friend , i , friendsArray) {
  sentence += `${friend.name} ${friend.surname}`;

  if (i <= friendsArray.length - 3) {
    sentence += ',';
  }

  if (i === friendsArray.length - 2) {
    sentence += 'si';
  }

});

console.log(sentence + '.');
