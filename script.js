let homeScore = 0;
let guestScore = 0;

document.getElementById('home-el').textContent = homeScore;
document.getElementById('guest-el').textContent = guestScore;

let totalHome = document.getElementById('home-el');
let totalGuest = document.getElementById('guest-el');


//scores for home element

function scoreOneHome() {
    homeScore += 1;
    totalHome.textContent = homeScore;
}

function scoreTwoHome() {
    homeScore += 2;
    totalHome.textContent = homeScore;
}

function scoreThreeHome() {
    homeScore += 3;
    totalHome.textContent = homeScore;
}

//scores for guest element

function scoreOneGuest() {
    guestScore += 1;
    totalGuest.textContent = guestScore;

}
function scoreTwoGuest() {
    guestScore += 2;
    totalGuest.textContent = guestScore;

}

function scoreThreeGuest() {
    guestScore += 3;
    totalGuest.textContent = guestScore;
}

//start new game

function startGame() {
    homeScore = 0;
    totalHome.textContent = homeScore;
    guestScore = 0;
    totalGuest.textContent = guestScore;
    wonMsg.textContent = '';
}


//end game

let wonMsg = document.getElementById('won-msg');

function gameOver() {
    if (homeScore > guestScore) {
        wonMsg.textContent = "GAME OVER! HOME TEAM WON🎉"
        console.log('home team won!');
    } else if (homeScore < guestScore) {
        wonMsg.textContent = "GAME OVER! Guest TEAM WON🎉"
        console.log('guest team won!');
    } else {
        wonMsg.textContent = "GAME OVER! TIE"
        console.log('wonMsg');
    }
}
