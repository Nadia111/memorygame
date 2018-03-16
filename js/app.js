
// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * Create a list that holds all of your cards
 */

let i = 0,
    card,
    cards;
    card = document.getElementsByClassName('card');
    cards = [...card];
    
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function show_symbol() {
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("closed");
}
var list_open = [];
function add_opencard() {
            if (this.classList.contains("open")){
            list_open.push(this);
        }
        else {
            list_open.pop();
            console.log('nono');
            list_open.pop();
            console.log('nono');
        }
    
}



for(i = 0; i < 16; i += 1){
    card = cards[i];
    card.addEventListener('click', show_symbol);
    card.addEventListener('click', add_opencard);
}

var m = 0,
    s = 0;

function calculate_time() {

    "use strict";
    var time = document.getElementById('time'),
        sec,
        min;

    function write(s, m) {
        sec = (s < 10) ? "0" + s : s;
        min = (m < 10) ? "0" + m : m;
        time.textContent = min + ":" + sec;
    }



    write(s, m);



    if (s < 59) {

        s += 1;
    }

    if (s === 59) {

        s = 0;
        m += 1;
    }


}

setInterval(calculate_time, 1000);







/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
