function squareSum(numbers) {
  return numbers.reduce((num, sum) => {
    return sum * sum + num;
  }, 0);
}

console.log(squareSum([1, 2, 2]));
