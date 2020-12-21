const fs = require('fs');

const input_array = fs.readFileSync('input.txt').toString().split("\n");

// Part One
/*
let high_seat_id = 0;
for(i in input_array) {
  let line = input_array[i];
  let low_column = 0;
  let high_column = 7;
  let low_row = 0;
  let high_row = 127;
  const rows = line.substring(0,7);
  const columns = line.substring(7);

  for (let r = 0; r < 7; r++) {
    const range = high_row - low_row + 1;
    if (rows[r] === "F") {
      high_row = high_row - (range / 2);
    } else {
      low_row = low_row + (range / 2);
    }
  }

  for (let c = 0; c < 3; c++) {
    const range = high_column - low_column + 1;
    if (columns[c] === "L") {
      high_column = high_column - (range / 2);
    } else {
      low_column = low_column + (range / 2);
    }
  }

  const seat_id = (low_row * 8) + low_column;
  if (seat_id > high_seat_id) {
    high_seat_id = seat_id;
  }

}

console.log(high_seat_id);
*/

// Part Two

let seat_ids = [];
for(i in input_array) {
  let line = input_array[i];
  let low_column = 0;
  let high_column = 7;
  let low_row = 0;
  let high_row = 127;
  const rows = line.substring(0,7);
  const columns = line.substring(7);

  for (let r = 0; r < 7; r++) {
    const range = high_row - low_row + 1;
    if (rows[r] === "F") {
      high_row = high_row - (range / 2);
    } else {
      low_row = low_row + (range / 2);
    }
  }

  for (let c = 0; c < 3; c++) {
    const range = high_column - low_column + 1;
    if (columns[c] === "L") {
      high_column = high_column - (range / 2);
    } else {
      low_column = low_column + (range / 2);
    }
  }

  const seat_id = (low_row * 8) + low_column;
  seat_ids.push(seat_id);

}

seat_ids.sort(function(a, b){return a-b});
let missing_ids = [];

for (let j = 0; j < seat_ids.length - 1; j++) {
  const id = seat_ids[j];
  const next_id = seat_ids[j+1];
  if (id + 1 !== next_id) {
    missing_ids.push(seat_ids[j] + 1);
  }
}

console.log(missing_ids);