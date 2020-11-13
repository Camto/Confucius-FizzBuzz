function checkit(x, y) {
  return x % y;
};

function numtest(x, y, z) {
  if (checkit(x, (y*z)) === 0) {
    return 'FizzBuzz';
  } else if (checkit(x, y) === 0) {
    return 'Fizz';
  } else if (checkit(x, z) === 0) {
    return 'Buzz';
  } else {
    return x;
  }
};

for (i = 1; i < 101; i++) {
  let printit = numtest([i], 3, 5);
  console.log(printit.toString())
}