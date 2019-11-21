var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
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

for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

//skills that starts with c
console.warn('start with c');
for (let i = 0; i < person.skills.length; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

//familynames ofmy friends are 
console.warn('my friends family names are');
let sentence = 'my friends last names are:';
for (let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}
console.log(sentence);

//use for to find the sum of array of the friends
totalAge = 0;
console.warn('exercise starts here');
for (let i = 0; i < person.friends.length ; i++) {
  totalAge += person.friends[i].age;
}
console.log(`${totalAge} is the total age of my firneds.`);

//use for to find the sum of years of birth of array of the friends
let birthYearSum = 0;
console.warn('exercise starts here');
for (let i = 0; i < person.friends.length ; i++) {
  let birthYear = 2019 - person.friends[i].age;
   birthYearSum += birthYear; 
}
console.log(`${birthYearSum} is the total of the years of birth`);

for (let i = 0; i < person.friends.length ; i++) 
{let differanceAge = person.age - person.friends[i].age;  
  console.log(differanceAge);
}

