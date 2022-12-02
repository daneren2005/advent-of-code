const fs = require('fs');

let input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
input = fs.readFileSync('./1-input.txt', {encoding:'utf8', flag:'r'});
let lines = input.split('\n');

let elfCounter = 1;
let maxElf = 1;
let maxElfCalories = 0;

let currentCalories = 0;
lines.forEach(line => {
	line = line.trim();
	if(line) {
		let calories = parseInt(line);
		currentCalories += calories;
	} else {
		// New elf
		if(currentCalories > maxElfCalories) {
			maxElf = elfCounter;
			maxElfCalories = currentCalories;
		}

		currentCalories = 0;
		elfCounter++;
	}
});

if(currentCalories > 0) {
	if(currentCalories > maxElfCalories) {
		maxElf = elfCounter;
		maxElfCalories = currentCalories;
	}
}

console.log(`Number of elves: ${elfCounter}`);
console.log(`Elf with max calories: ${maxElf} with ${maxElfCalories} calories`);