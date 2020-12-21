const fs = require('fs');
const { exit } = require('process');

const input_array = fs.readFileSync('input.txt').toString().split("\n");

// Part One
/*
for(i in input_array) {
  for(j in input_array) {
    const x = parseInt(input_array[i]);
    const y = parseInt(input_array[j]);
    if (x + y === 2020) {
      console.log(x * y);
      exit();
    }
  }
}
*/

// Part Two
for(i in input_array) {
  for(j in input_array) {
    for(k in input_array) {
      const x = parseInt(input_array[i]);
      const y = parseInt(input_array[j]);
      const z = parseInt(input_array[k]);
      if (x + y + z === 2020) {
        console.log(x * y * z);
        exit();
      }
    }
  }
}