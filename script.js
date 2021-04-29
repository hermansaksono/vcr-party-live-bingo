// FUNCTIONS
/* 
shuffleArray :  Array -> Array
Randomize array in-place using Durstenfeld shuffle algorithm. Adapted from:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
const shuffleArray = (array) => {
	let outputArray = [...array]
	
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = outputArray[i];
        outputArray[i] = outputArray[j];
        outputArray[j] = temp;
    }
	return outputArray;
}

/*
fillCells : Array => void
Randomizes the given entriesArray, then put the entries into the bingo card.
INVARIANT: The entriesArray array must be at least 24 entries.
*/
const fillCells = (entriesArray) => {
	let shuffledArray = shuffleArray(entriesArray);

	for (i = 0; i < NUM_ENTRIES; i++) {
		let td = document.querySelector(cells[i]);
		td.innerHTML = shuffledArray[i];
	}
}

const initCellEvents = () => {
	for (i = 0; i < NUM_ENTRIES; i++) {
		let td = document.querySelector(cells[i]);
		td.onclick = onClickCell;
	}
}

const onClickCell = (event) => {
	var target = event.target;
	if (target.classList.contains(MARKED_CLASS)) {
		target.classList.remove("marked");
	} else {
		target.classList.add("marked");
	}
}

/*
init : void => void
Initializes the Bingo card.
INVARIANT: The bingoEntries array (in entries.js) must be at least 24 entries.
*/
const init = () => {
	initCellEvents();
	fillCells(bingoEntries);
}


// DATA
// The number of boxes in the Bingo card that can be filled.
let NUM_ENTRIES = 24;
let MARKED_CLASS = "marked";

// DO NOT MODIFY. This is an array of predefined Bingo boxes ids.
// Note that #cell33 is not included because it contains the star. 
let cells = new Array(
	"#cell11", "#cell12", "#cell13", "#cell14", "#cell15",
	"#cell21", "#cell22", "#cell23", "#cell24", "#cell25",
	"#cell31", "#cell32", "#cell34", "#cell35", 
	"#cell41", "#cell42", "#cell43", "#cell44", "#cell45",
	"#cell51", "#cell52", "#cell53", "#cell54", "#cell55",
);

// RUN
document.addEventListener("DOMContentLoaded", init);