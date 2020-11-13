function divischeck(x, y) {
  return Number.isInteger(x / y)
}
function fizzbuzz(x) {
  if (divischeck(x, 3) == true && divischeck(x, 5) == true) {
    return 'FizzBuzz';
  } else {
    if (divischeck(x, 3) == true || divischeck(x, 5) == true) {
      if (divischeck(x, 3) == true) {
        return 'Fizz';
      } else {
        return 'Buzz';
      }
    } else {
      return x;
    }
  }
}

for (i = 1; i < 101; i++) {
  let printit = fizzbuzz([i]);
  console.log(printit.toString())
}