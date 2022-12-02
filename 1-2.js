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

let elves = {};
let elfCounter = 1;

let currentCalories = 0;
lines.forEach(line => {
	line = line.trim();
	if(line) {
		let calories = parseInt(line);
		currentCalories += calories;
	} else {
		// New elf
		elves[elfCounter] = currentCalories;

		currentCalories = 0;
		elfCounter++;
	}
});

if(currentCalories > 0) {
	elves[elfCounter] = currentCalories;
}

let elfIndexes = Object.keys(elves);
elfIndexes.sort((a, b) => elves[b] - elves[a]);
let topElfIndexes = elfIndexes.slice(0, 3);
let topElfCalories = topElfIndexes.map(i => elves[i]);
let combinedCalories = topElfCalories.reduce((total, calories) => total + calories);

console.log(`Number of elves: ${elfCounter}`);
console.log(`Top 3 elves: ${topElfIndexes.join(', ')} with ${topElfCalories.join(' + ')} = ${combinedCalories} calories`);