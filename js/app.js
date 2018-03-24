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
    timer,
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
var timer_function = function (){
timer = setInterval( function () {

    "use strict";

    write(s, m);


    if (s < 59) {

        s += 1;
    }

    if (s === 59) {

        s = 0;
        m += 1;
    }

}
    , 1000);
    

    


};



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
    HTML.innerHTML = cards[i].innerHTML;
    document.querySelector(".deck").appendChild(HTML);
    document.querySelector(".deck").replaceChild(card[i], HTML);
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

function error(arg) {
    arg.classList.toggle("open");
    arg.classList.toggle("error");
}

function flip_error(arg) {
    arg.classList.toggle("error");    
    arg.classList.toggle("closed");
    
}

let list = [],
    counter_matched = 0;
let counter = 0;
function display_counter(){
    counter += 1;
    document.querySelector(".moves").textContent = counter;

}

var audio = new Audio('../yes.mp3');



function game() {


    if ((this.classList.contains("closed")) && (list.length < 2)) {
        flip(this);
        if (gamestart === false || redo === true) {
            timer_function();
            gamestart = true;
            redo = false;
        }
        list.push(this);
        display_counter();


        if (list.length === 1){

            this.removeEventListener("click", game);
        }

        else if (list.length === 2){


            if (list[0].firstElementChild.classList.item(1) === this.firstElementChild.classList.item(1)){

                counter_matched += 1;                



                setTimeout( function() {
                    match(list[0]);
                    match(list[1]); }, 1000);

                if (counter_matched === 8){
                    audio.play();
                    matched();

                }




            }
            else {
                setTimeout( function () {
                    error(list[1]);
                    error(list[0]);
                }, 1000);
                setTimeout( function () {
                    flip_error(list[1]);
                    flip_error(list[0]);
                }, 2000);

            }
            setTimeout( function () {
                list.pop();
                list.pop();
            }, 2001);

        }

    }

    delstars();

}
let panel_stars = document.querySelector(".stars").innerHTML,
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
    clearInterval(timer);
    console.log("you won");
    restart();
}



function restart() {
    list.splice(0, list.length);
    counter_matched = 0;
    counter = 0;
    document.querySelector(".stars").innerHTML = panel_stars;
if (redo === false){
    clearInterval(timer);
    redo = true;
}
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
