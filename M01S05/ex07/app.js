var dateBuilder = [
  function () {
    return '2019'
  },
  function () {
    return ' February'
  },
  function () {
    return '24';
  },
];

dateBuilder[3] = function () {
    return 'Sunday';
  };


console.warn('Use dateBuilder to show february');
console.log(dateBuilder[1]());

console.warn(`We are in the year ${dateBuilder[0]()}`);
console.log(`We are in ${dateBuilder[1]()} of the year ${dateBuilder[0]()}`);
console.log(`today is ${dateBuilder[3]()}`);