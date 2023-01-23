let count = 12;
let countEl = document.getElementById('count');
let countIn = document.getElementsByClassName('count-in');



function incrementC() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function incrementTwo() {
    count += 2;
    countEl.textContent = count;

}
function incrementThree() {
    count += 3;
    countEl.textContent = count;

}

let guestCount = 5;
let guestEl = document.getElementById('guestCount');
let guestIn = document.getElementById('guest-in');

function incrementG() {
    guestCount += 1;
    guestEl.textContent = guestCount;

}
function incrementTwoo() {
    guestCount += 2;
    guestEl.textContent = guestCount;

}

function incrementThreee() {
    guestCount += 3;
    guestEl.textContent = guestCount;

}

