
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
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

let m = 0,
    s = 0;
let time = document.getElementById('time'),
    sec,
    min;

function write(s, m) {
    sec = (s < 10) ? "0" + s : s;
    min = (m < 10) ? "0" + m : m;
    time.textContent = min + ":" + sec;
}



write(s, m);

function calculate_time() {

    "use strict";

    write(s, m);


    if (s < 59) {

        s += 1;
    }

    if (s === 59) {

        s = 0;
        m += 1;
    }


    setTimeout(calculate_time, 1000);

}



/*
 * Create a list that holds all of your cards
 */

let i = 0,
    gamestart = false,
    card,
    cards;
card = document.getElementsByClassName('card');
cards = [...card];

function flip(arg) {
    arg.classList.toggle("closed");
    arg.classList.toggle("open");
}

function close_matched(arg) {
    arg.classList.toggle("closed");
    arg.classList.toggle("match");    
}


function match(arg) {
    arg.classList.toggle("open");
    arg.classList.toggle("match");
}

function clear() {
    var Id = setTimeout(calculate_time, 1000);
    clearTimeout(Id);
}

const list = [],
      list_matched = [];
let counter = 0;
function display_counter(){
    counter += 1;
    document.querySelector(".moves").textContent = counter;

}




function game() {


    if ((this.classList.contains("closed")) && (list.length < 2)) {
        flip(this);
        display_counter();
        if (gamestart === false) {
            setTimeout(calculate_time, 1000);
            gamestart = true;
        }
        list.push(this);
        if (list.length === 1){

            this.removeEventListener("click", game);
        }
        else if (list.length === 2){

            if (list[0].innerHTML === this.innerHTML){
                list_matched.push(list[0]);
                list_matched.push(this);
                setTimeout( function() {match(list[1]);
                                        match(list[0]);
                                       }, 1000);
                if (list_matched.length === 16){

                    matched();

                }

            }
            else {
                setTimeout( function () {
                    flip(list[1]);
                    flip(list[0]);
                }, 1000);


            }
            setTimeout( function () {
                list.pop();
                list.pop();
            }, 1000);

        }

    }

    stars = document.querySelectorAll(".fa-star");
    if (counter > 20){
        stars[2].remove();  
    }
    else if (counter > 28){
        stars[1].remove();
    }

}

function matched() {
    setTimeout(write(s, m), 0);
    alert("you won");
    restart();
}



function restart() {
    list.splice(0, list.length);
    list_matched.splice(0, list_matched.length);
    counter = 0;
    Id = setTimeout(calculate_time, 1000);;
    clearTimeout(Id);
    document.querySelector(".moves").textContent = 0;
    for (i = 0; i < 16 ; i += 1){
        cards[i].classList.add("closed");
        cards[i].classList.remove("open");
        cards[i].classList.remove("match");

    }
    s = 0;
    m = 0;
    write(s, m);
}

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




for (const card of cards) {
    card.addEventListener("click", game);
    card.addEventListener("dblclick", game);

}

const repeat = document.querySelector(".fa-repeat");

repeat.addEventListener("click", restart);
