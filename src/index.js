module.exports = function getZerosCount(number) {
  // your implementation
  let numberOfZeros = 0;

  while(number > 0) {
    number = Math.floor(number / 5);
    numberOfZeros += number;
  }

  return numberOfZeros;
}
