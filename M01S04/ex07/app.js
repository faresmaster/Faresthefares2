var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache'
  } , {
    name: 'Larry',
    surname: 'Larryson'
  } , {
    name: 'Steven',
    surname: 'Stevenson'
  } , {
    name: 'Carol',
    surname: 'Carolson'
  } , {
    name: 'Andra',
    surname: 'Andrason'}
];

for (let i = 0; i < friends.length ; i++) {
  console.log(friends[i].surname);
}

for (let i = 0; i < friends.length; i++) {
console.log(`${friends[i].name} ${friends[i].surname}`)  
if (friends[i].name === "Steven");
break;
}

for (let i = 0; i < friends.length; i++ ) {
let fullName = friends[i].name + friends[i].surname;
if (fullName.length <= 13) {
  continue;
} console.log(fullName.length, `${friends[i].name} ${friends[i].surname}`);
}

for (let i = 0; i < friends.length; i++) {
console.log(friends[i].name);
}

for (let i = 0; i < friends.length; i++) {
  let fullName = friends[i].name + friends[i].surname;
  console.log(fullName);
}

for (let i = 0; i < friends.length; i++) {
if (friends[i].surname.length >= 9) {
  break;
} console.log(friends[i].surname.length, `${friends[i].name} ${friends[i].surname}`);
}