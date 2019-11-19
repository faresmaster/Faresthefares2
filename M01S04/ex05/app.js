var i;
var divisor = prompt('divide using')
var limit = prompt('This is the upper limit');
for (i = 0 ; i <= limit ; i++) {

  console.log(i);
  if ( i % divisor !==0 ) {
    continue;
  }

  console.log (`This number is a devident of ${divisor}`)
}