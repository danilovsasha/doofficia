function myFunction(a, b, callback) {
  callback(a + b);
}

function add(a, b) {
  console.log(a + b);
}

myFunction(2, 3, add); // This will output 5
