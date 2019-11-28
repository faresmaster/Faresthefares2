let person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  }
};

console.warn('show first name');
console.log(person.getName().split(' ')[0]);

console.warn('dofference of age');
console.log(`difference of age between me and person is ${22 - person.getAge()}`);

console.warn('last 2 letters of year');
let birthYear = (new Date()).getFullYear() - person.getAge();

console.log(String(birthYear).slice(-2));
console.log(`ma numesc ${person.getName()} si am ${person.getAge()}!`);

console.log(person.getName());
console.log(person.getAge());
console.log(2019 - person.getAge());
console.log(`my name is ${person.getName()} I was born in ${2019 - person.getAge()}!`);