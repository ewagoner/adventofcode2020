const fs = require('fs');

const input_array = fs.readFileSync('input.txt').toString().split("\n\n");

// Part One
/*
let count = 0;
function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}

for(i in input_array) {
  let group_answers = input_array[i];
  group_answers = group_answers.replace(/\n/gi, "");
  group_answers = makeUnique(group_answers);
  count = count + group_answers.length;
}

console.log(count);
*/

// Part Two

let count = 0;

for(i in input_array) {
  let all_answered = 0;
  let group_answers = input_array[i];
  const group_answers_array = group_answers.split("\n");
  const group_size = group_answers_array.length;
  let answer_counts = new Map();
  for(answer of group_answers_array) {
    for (let a = 0; a < answer.length; a++) {
      if (answer_counts.get(answer[a])) {
        answer_counts.set(answer[a], answer_counts.get(answer[a]) + 1);
      } else {
        answer_counts.set(answer[a], 1);
      }
    }
  }

  answer_counts.forEach((values) => {
    if (values === group_size) {
      all_answered++
    }
  });

  count = count + all_answered;

}

console.log(count);
