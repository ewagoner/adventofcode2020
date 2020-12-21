const fs = require('fs');
const { gzip } = require('zlib');

const input_array = fs.readFileSync('input.txt').toString().split("\n\n");
let valid_passports = 0;

// Part One
/*
const requirements = [
  "byr:",
  "iyr:",
  "eyr:",
  "hgt:",
  "hcl:",
  "ecl:",
  "pid:"
]

for(i in input_array) {
  let present = 0;
  let passport = input_array[i];
  for (requirement of requirements) {
    if (passport.includes(requirement)) {
      present++
    }
  }
  if (present === 7) {
    valid_passports++
  }
}

console.log(valid_passports);
*/

// Part Two
for(i in input_array) {
  let valid_parts = 0;
  let passport = input_array[i];
  passport = passport.replace(/\n/gi, " ");
  const passport_parts = passport.split(" ");
  for (passport_part of passport_parts) {
    const pair = passport_part.split(":");
    const key = pair[0];
    let value = pair[1];
    if (key === "byr") {
      value = parseInt(value);
      if (value >= 1920 && value <= 2002) {
        valid_parts++
      } else {
        break;
      }
    }
    if (key === "iyr") {
      value = parseInt(value);
      if (value >= 2010 && value <= 2020) {
        valid_parts++
      } else {
        break;
      }
    }
    if (key === "eyr") {
      value = parseInt(value);
      if (value >= 2020 && value <= 2030) {
        valid_parts++
      } else {
        break;
      }
    }
    if (key === "hgt") {
      const units = value.substring(value.length, value.length - 2);
      value = value.substring(0, value.length - 2);
      if ((units === "in" || units === "cm") && value === value.replace(/[^0-9]+/g, "")) {
        if (units === "in" && parseInt(value) >= 59 && parseInt(value) <= 76) {
          valid_parts++
        } else if (units === "cm" && parseInt(value) >=150 && parseInt(value) <= 193) {
          valid_parts++
        }
      } else {
        break;
      }
    }
    if (key === "hcl") {
      if (
        value.length === 7 &&
        value[0] === "#" &&
        value.substring(1) === value.substring(1).replace(/[^0-9a-f]+/g, "")
      ) {
        valid_parts++
      } else {
        break;
      }

    }
    if (key === "ecl") {
      const valid_colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
      if (valid_colors.includes(value)) {
        valid_parts++
      } else {
        break;
      }
    }
    if (key === "pid") {
      if (value.length === 9 && value === value.replace(/[^0-9]+/g, "")) {
        valid_parts++
      } else {
        break;
      }
    }
  }
  if (valid_parts === 7) {
    valid_passports++
  }
}

console.log(valid_passports);
