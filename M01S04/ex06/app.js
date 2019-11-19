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
//person and for to show skills 
console.warn('excercise starts here')
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}
// skills not starting wit j
console.warn('excercise starts here')
for (let i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}
// skills not starting wit j in another way
console.warn('excercise starts here')
for (let i = 0; i < person.skills.length; i++) {
  if (!person.skills[i].startsWith('j')) {
    console.log(person.skills[i]);
  }
}
// using for show full names of friends 
console.warn('excercise starts here')
let sentence = 'my friends are ';
for (let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].name} ${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}

console.log(sentence)

//use a for to get total age
console.warn('excercise starts here')
let totalAge = 0;
for (let i = 0; i < person.friends.length; i++) {
  if (person.friends[i].age >= 30) {
    totalAge += person.friends[i].age;
  }
}

console.log(totalAge)

//use a for to get the sum of date bets. 
console.warn('excercise starts here')
let birthYearSum = 0;
for (let i = 0; i < person.friends.length; i++) {
  let birthYear = 2019 - person.friends[i].age;
  birthYearSum += birthYear;
}

console.log(birthYearSum);


//difference of age only if they are larger than 30 years
console.warn('excercise starts here')
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
  if (ageDifference > 2) {
    console.log(ageDifference);
  }
}

//sentence the difference between the ages of 2 friends is xx ONLY IF IT IS ODD
console.warn('exercise starts here')
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
  if (person.friends[i].age % 2 !== 0) {
    console.warn(`difference between ${person.name} and ${person.friends[i].name} is ${ageDifference}`);
  }
}

//use length of array of the skills 
console.warn('exercise starts here')
  for (let i = person.skills.length - 1; i >= 0; i--) {
   console.log(person.skills[i]);
}
