const fs = require('fs');

let input = `A Y
B X
C Z`;
input = fs.readFileSync('./2-input.txt', {encoding:'utf8', flag:'r'});
let lines = input.split('\n');

let myScore = 0;
let enemyScore = 0;
lines.forEach(line => {
	line = line.trim();
	if(!line) {
		return;
	}
	let parts = line.split(' ');
	let player1 = parts[0];
	let player2 = parts[1];

	if(player1 === 'A') {
		enemyScore += 1;
	} else if(player1 === 'B') {
		enemyScore += 2;
	} else if(player1 === 'C') {
		enemyScore += 3;
	}

	if(player2 === 'X') {
		myScore += 1;
	} else if(player2 === 'Y') {
		myScore += 2;
	} else if(player2 === 'Z') {
		myScore += 3;
	}

	if(
		(player1 === 'A' && player2 === 'X') ||
		(player1 === 'B' && player2 === 'Y') ||
		(player1 === 'C' && player2 === 'Z')
	) {
		myScore += 3;
		enemyScore += 3;
	} else if(
		(player1 === 'A' && player2 === 'Z') ||
		(player1 === 'B' && player2 === 'X') ||
		(player1 === 'C' && player2 === 'Y')
	) {
		enemyScore += 6;
	} else {
		myScore += 6;
	}
});

console.log(`Score: ${myScore} vs ${enemyScore}`);