var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var numInput = document.querySelector("input");
var resetbtn = document.querySelector("#reset");
var winningScoreDisplay = document.querySelector("p span");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change", function(){
    while(this>0) {
        winningScoreDisplay.textContent = this.value;
        winningScore = Number(this.value);
        reset();
    }
});

p1.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
    
p2.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("winner");
    p2Display.classList.remove("loser");
    gameOver = false;
}

resetbtn.addEventListener("click", reset);
