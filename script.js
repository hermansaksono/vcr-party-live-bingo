// FUNCTIONS
/* 
shuffleArray :  Array -> Array
Randomize array in-place using Durstenfeld shuffle algorithm. Adapted from:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/*
fillCells : void => void
Randomize the entries array, then put the entries into the bingo card.
INVARIANT: The bingoEntries array (see below) must be at least 24 entries.
*/
const fillCells = () => {
	shuffleArray(bingoEntries);

	for (i = 0; i < NUM_ENTRIES; i++) {
		let td = document.querySelector(cells[i]);
		td.innerHTML = bingoEntries[i];
	}
}


// DATA
// The number of boxes in the Bingo card that can be filled.
let NUM_ENTRIES = 24;

// DO NOT MODIFY. This is an array of predefined Bingo boxes ids.
// Note that this 
let cells = new Array(
	"#cell11", "#cell12", "#cell13", "#cell14", "#cell15",
	"#cell21", "#cell22", "#cell23", "#cell24", "#cell25",
	"#cell31", "#cell32", "#cell34", "#cell35", 
	"#cell41", "#cell42", "#cell43", "#cell44", "#cell45",
	"#cell51", "#cell52", "#cell53", "#cell54", "#cell55",
);

// RUN
document.addEventListener("DOMContentLoaded", fillCells);