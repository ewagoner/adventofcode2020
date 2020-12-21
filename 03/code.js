const fs = require('fs');

const input_array = fs.readFileSync('input.txt').toString().split("\n");
let trees = 0;

// Part One
/*
let position = 0;
for(i in input_array) {
  let line = input_array[i];
  while (position + 1 > line.length) {
    line = line.concat(line);
  }
  console.log(line[position])
  if (line[position] === "#") {
    trees++
  }
  position = position + 3;
}

console.log(trees);
*/

// Part Two
let tree_product = 1;

const slopes = [[1,1], [1,3], [1,5], [1,7], [2,1]];

for (slope of slopes) {
  let row = 0;
  let column = 0;
  for(i in input_array) {
    if (i == row) {
      let line = input_array[i];
      while (column + 1 > line.length) {
        line = line.concat(line);
      }
      if (line[column] === "#") {
        trees++
      }
      row = row + slope[0];
      column = column + slope[1];
    }
  }
  tree_product = tree_product * trees;
  trees = 0;
}

console.log(tree_product)