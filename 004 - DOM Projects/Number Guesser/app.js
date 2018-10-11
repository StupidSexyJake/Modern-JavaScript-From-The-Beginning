// Game values
let min         = 1,
    max         = 10,
    winningNum  = getRandomNum(),
    guessesLeft = 3;

// UI elements
const elGame          = document.getElementById("game"),
      elMinNum        = document.querySelector(".min-num"),
      elMaxNum        = document.querySelector(".max-num"),
      elGuessBtn      = document.getElementById("guess-btn"),
      elGuessInput    = document.getElementById("guess-input"),
      elMessage       = document.querySelector(".message");

// Functions
function getRandomNum() {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function setMessage(msg, color) {
    elMessage.style.color = color;
    elMessage.textContent = msg;
}

function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";
    // Disable input
    elGuessInput.disabled = true;
    // Change border color
    elGuessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
    // Play again
    elGuessBtn.value = "Play Again?";
    elGuessBtn.className += "play-again";
}

// Play again event listener
elGame.addEventListener("mousedown", function(e) {
    console.log(e.target.className);
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});

// Assign UI min and max
elMinNum.textContent = min;
elMaxNum.textContent = max;

// Listen for guess
elGuessBtn.addEventListener("click", function(){
    let guess = parseInt(elGuessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }

    // Check if Game Over - Won {
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        guessesLeft -= 1;
        // Check if Game Over - Lost
        if (guessesLeft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
        } else {
            // Change border color            
            elGuessInput.style.borderColor = "red";
            // Tell user to guess again
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red")
            // Clear input
            elGuessInput.value = "";
        }
    }
});