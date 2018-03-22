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
    redo = false,
    card,
    cards;
card = document.getElementsByClassName('card');
cards = [...card];

shuffle(cards);

for (i = 0; i < 16; i += 1){
    HTML = document.createElement("li");
    HTML.outerHTML = cards[i];
    document.querySelector(".deck").appendChild(HTML);
    document.querySelector(".deck").replaceChild(card[i], HTML);
}


    var Id = setTimeout(calculate_time, 1000);
    if (redo === false){

    clearTimeout(Id);
    }

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


let list = [],
    list_matched = [];
let counter = 0;
function display_counter(){
    counter += 1;
    document.querySelector(".moves").textContent = counter;

}

var audio1 = new Audio('../error.mp3');
audio1.loop = true;


function game() {


    if ((this.classList.contains("closed")) && (list.length < 2)) {
        flip(this);
        redo = true;
        if (gamestart === false && redo === true) {
            setTimeout(calculate_time, 1000);
            gamestart = true;
        }
        list.push(this);
        display_counter();


        if (list.length === 1){

            this.removeEventListener("click", game);
        }

        else if (list.length === 2){
            

            if (list[0].firstElementChild.classList.item(1) === this.firstElementChild.classList.item(1)){
                
                    list_matched.push(list[0]);                
                    list_matched.push(this);


                    setTimeout( function() {
                        match(list[0]);
                        match(list[1]); }, 1000);

                if (list_matched.length === 16){

                    matched();

                }




            }
            else {
                setTimeout( function () {
                    flip(list[1]);
                    flip(list[0]);
                }, 1000);

                this.addEventListener("click", function() {
                    audio1.play();});


            }
            setTimeout( function () {
                list.pop();
                list.pop();
            }, 1001);

        }

    }

delstars();

}

    stars = document.querySelectorAll(".fa-star");

function delstars() {
        if (counter > 2){
        stars[2].remove();  
    }
    if (counter > 28){
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
    redo = false;
    console.log(stars);

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




for (const cart of cards) {
    cart.addEventListener("click", game);
    cart.addEventListener("dblclick", game);

}

const repeat = document.querySelector(".fa-repeat");

repeat.addEventListener("click", restart);
