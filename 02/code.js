const fs = require('fs');

const input_array = fs.readFileSync('input.txt').toString().split("\n");
let valid_passords = 0;

// Part One
/*
for(i in input_array) {
  const parts = input_array[i].split(" ");
  const range = parts[0].split("-");
  const min = parseInt(range[0]);
  const max = parseInt(range[1]);
  const letter = parts[1][0];
  const password = parts[2];
  const appearances = password.split(letter).length - 1;
  if (appearances >= min && appearances <= max) {
    valid_passords++
  }
}

console.log(valid_passords);
*/

// Part Two
for(i in input_array) {
  const parts = input_array[i].split(" ");
  const range = parts[0].split("-");
  const first_position = parseInt(range[0]);
  const second_position = parseInt(range[1]);
  const letter = parts[1][0];
  const password = parts[2];
  let appearances = 0;
  if (password[first_position - 1] === letter) {
    appearances++
  }
  if (password[second_position - 1] === letter) {
    appearances++
  }
  if (appearances === 1) {
    valid_passords++
  }
}

console.log(valid_passords);