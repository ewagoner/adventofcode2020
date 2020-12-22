const fs = require('fs');
const { gzip } = require('zlib');

const input_array = fs.readFileSync('input.txt').toString().split("\n");

// Part One
/*
let container_bags = [];

function get_containers(color) {
  for(i in input_array) {
    const rule = input_array[i];
    if (rule.includes(color)) {
      const container_bag = rule.split(" bags")[0];
      if (container_bag !== color) {
        container_bags.push(container_bag);
      }
    }
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

get_containers("shiny gold");
for (let i = 0; i < 100; i++) {
  for (color of container_bags) {
    get_containers(color);
  }
  container_bags = container_bags.filter(onlyUnique);
}

console.log(container_bags.length);
*/

// Part Two

let included_bags = 0;

function get_contents(color, count = 1) {
  for(i in input_array) {
    const rule = input_array[i];
    const container = rule.split(" bags")[0];
    let contents = rule.split(" contain ")[1];
    if (container === color) {
      contents = contents.split(", ");
      for (bag_rule of contents) {
        const components = bag_rule.split(" ");
        const bag_count = parseInt(components[0]);
        const bag_color = components[1] + " " + components[2];
        if (bag_count) {
          console.log(bag_count)
          console.log(bag_color)
          included_bags = included_bags + count * bag_count;
          get_contents(bag_color, (count * bag_count));
        }
      }
    }
  }
}

get_contents("shiny gold");

console.log(included_bags);