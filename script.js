let homeScore = 0;
let guestScore = 0;

let homeScoreDisplay = document.getElementById("home-score");
document.getElementById("home-plus-one").addEventListener("click", () => {
    homeScore++;
    homeScoreDisplay.textContent = homeScore;
});
document.getElementById("home-plus-two").addEventListener("click", () => {
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
});
document.getElementById('home-plus-three').addEventListener('click', () => {
	homeScore += 3;
	homeScoreDisplay.textContent = homeScore;
});

let guestScoreDisplay = document.getElementById("guest-score");
document.getElementById("guest-plus-one").addEventListener("click", () => {
    guestScore++;
    guestScoreDisplay.textContent = guestScore;
});
document.getElementById("guest-plus-two").addEventListener("click", () => {
    guestScore +=2;
    guestScoreDisplay.textContent = guestScore;
});
document.getElementById('guest-plus-three').addEventListener('click', () => {
	guestScore += 3;
	guestScoreDisplay.textContent = guestScore;
});
