let person = {
  getName: function () {
    return 'Dragos Iordache'
  },
  getAge: function () {
    return 32;
  }
};

const accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName] ();
};

console.log(accessor('Name'));
console.log(accessor('Age'));

console.warn('using accessors save name and make sentence I am XXX');
let firstName = accessor('Name');
console.log(firstName.split(' ')[0]);

console.warn('Find the difference of age');
console.log(56 - accessor('Age'));

console.warn('show the age using the current year');
console.log((new Date()).getFullYear() - accessor('Age'));

console.warn('My name is xx I am yy years old and I was born yy years ago');
let age = accessor('Age');
console.log(`my name is ${firstName} I am ${age} year old and I was born ${age} de ani.`)

console.log(accessor('Name'));
console.log(accessor('Age'));
console.log(2019 - accessor('Age'));
console.log(`mein name is ${accessor('Name')} und ich bin ${accessor('Age')}`);