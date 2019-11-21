let i = 5;
let limit = prompt('this is your limit');
let divisor = prompt('this is your divisor');

while (i <= limit) {
  if (i % divisor === 0) {
    console.log(i);
  }
  i++;
}
