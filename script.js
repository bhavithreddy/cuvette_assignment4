// // Prevent animation on load
// setTimeout(() => {
//     document.body.classList.remove("preload");
// }, 500);
//
// // DOM Elements
// const btnRules = document.querySelector(".rules-btn");
// const btnClose = document.querySelector(".close-btn");
// const modalRules = document.querySelector(".modal");
//
// const CHOICES = [
//     {
//         name: "paper",
//         beats: "rock",
//     },
//     {
//         name: "scissors",
//         beats: "paper",
//     },
//     {
//         name: "rock",
//         beats: "scissors",
//     },
// ];
//
// const choiceButtons = document.querySelectorAll(".choice-btn");
// const gameDiv = document.querySelector(".game");
// const resultsDiv = document.querySelector(".results");
// const resultDivs = document.querySelectorAll(".results__result");
//
// const resultWinner = document.querySelector(".results__winner");
// const resultText = document.querySelector(".results__text");
//
// const playAgainBtn = document.querySelector(".play-again");
//
// const scoreNumbers = document.querySelectorAll(".score__number"); // Select both score number elements
// let userScore = 0;
// let computerScore = 0;
// const maxPoints = 2; // Add max points
//
// // Game Logic
// choiceButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const choiceName = button.dataset.choice;
//         const choice = CHOICES.find((choice) => choice.name === choiceName);
//         choose(choice);
//     });
// });
//
// function choose(choice) {
//     const aichoice = aiChoose();
//     displayResults([choice, aichoice]);
//     displayWinner([choice, aichoice]);
// }
//
// function aiChoose() {
//     const rand = Math.floor(Math.random() * CHOICES.length);
//     return CHOICES[rand];
// }
//
// function displayResults(results) {
//     resultDivs.forEach((resultDiv, idx) => {
//         setTimeout(() => {
//             resultDiv.innerHTML = `
//               <div class="choice ${results[idx].name}">
//                   <img src="images/${results[idx].name}.png" alt="${results[idx].name}" />
//               </div>
//           `;
//         }, idx * 1000);
//     });
//
//     gameDiv.classList.toggle("hidden");
//     resultsDiv.classList.toggle("hidden");
// }
//
// function displayWinner(results) {
//     setTimeout(() => {
//         const userWins = isWinner(results);
//         const aiWins = isWinner(results.reverse());
//
//         if (userWins) {
//             resultText.innerText = "YOU WIN AGAINST PC";
//             resultDivs[0].classList.toggle("winner");
//             keepScore(1, 0); // User wins
//         } else if (aiWins) {
//             resultText.innerText = "YOU LOSE AGAINST PC";
//             resultDivs[1].classList.toggle("winner");
//             keepScore(0, 1); // AI wins
//         } else {
//             resultText.innerText = "TIE UP";
//         }
//         resultWinner.classList.toggle("hidden");
//         resultsDiv.classList.toggle("show-winner");
//
//         checkGameOver(); // Check if someone has reached 10 points
//     }, 1000);
// }
//
// function isWinner(results) {
//     return results[0].beats === results[1].name;
// }
//
// function keepScore(userPoint, computerPoint) {
//     userScore += userPoint;
//     computerScore += computerPoint;
//
//     // Update scores in the DOM
//     scoreNumbers[0].innerText = computerScore; // Computer Score
//     scoreNumbers[1].innerText = userScore; // User Score
// }
//
// function checkGameOver() {
//     if (userScore === maxPoints || computerScore === maxPoints) {
//         displayFinalWinner();
//     }
// }
//
// function displayFinalWinner() {
//     // Determine the final result message
//     let finalMessage;
//     if (userScore === maxPoints) {
//         finalMessage = "Congratulations! You won the game!";
//     } else {
//         finalMessage = "You lost! The computer won the game.";
//     }
//
//     // Redirect to the game-over page with the result as a URL parameter
//     setTimeout(() => {
//         // Redirect to the game-over page with the result as a URL parameter
//         window.location.href = `victory.html?result=${encodeURIComponent(finalMessage)}`;
//     }, 5000); // Delay for 5 seconds (5000 milliseconds)
//
// }
//
// // Play Again - Regular game play
// playAgainBtn.addEventListener("click", () => {
//     gameDiv.classList.toggle("hidden");
//     resultsDiv.classList.toggle("hidden");
//
//     resultDivs.forEach((resultDiv) => {
//         resultDiv.innerHTML = "";
//         resultDiv.classList.remove("winner");
//     });
//
//     resultText.innerText = "";
//     resultWinner.classList.toggle("hidden");
//     resultsDiv.classList.toggle("show-winner");
// });
//
// // Show/Hide Rules
// btnRules.addEventListener("click", () => {
//     modalRules.classList.toggle("show-modal");
// });
// btnClose.addEventListener("click", () => {
//     modalRules.classList.toggle("show-modal");
// });
setTimeout(() => {
    document.body.classList.remove("preload");
}, 500);

// DOM Elements
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const CHOICES = [
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "rock",
        beats: "scissors",
    },
];

const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumbers = document.querySelectorAll(".score__number"); // Select both score number elements
let userScore = 0;
let computerScore = 0;
const maxPoints = 5; // Add max points

// Game Logic
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find((choice) => choice.name === choiceName);
        choose(choice);
    });
});

function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
}

function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
        <div class="choice ${results[idx].name}">
          <img src="images/${results[idx].name}.png" alt="${results[idx].name}" />
        </div>
      `;
        }, idx * 1000);
    });

    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results);
        const aiWins = isWinner(results.reverse());

        if (userWins) {
            resultText.innerText = "YOU WIN AGAINST PC";
            resultDivs[0].classList.toggle("winner");
            keepScore(1, 0); // User wins
        } else if (aiWins) {
            resultText.innerText = "YOU LOST AGAINST PC";
            resultDivs[1].classList.toggle("winner");
            keepScore(0, 1); // AI wins
        } else {
            resultText.innerText = "TIE UP";
        }
        resultWinner.classList.toggle("hidden");
        resultsDiv.classList.toggle("show-winner");

        checkGameOver(); // Check if someone has reached 10 points
    }, 1000);
}

function isWinner(results) {
    return results[0].beats === results[1].name;
}

function keepScore(userPoint, computerPoint) {
    userScore += userPoint;
    computerScore += computerPoint;

    // Update scores in the DOM
    scoreNumbers[0].innerText = computerScore; // Computer Score
    scoreNumbers[1].innerText = userScore; // User Score

    // **Reset scores and update DOM after checkGameOver**
    checkGameOver();
}

function checkGameOver() {
    if (userScore === maxPoints || computerScore === maxPoints) {
        displayFinalWinner();

        // **Reset scores to 0 and update DOM here**
        userScore = 0;
        computerScore = 0;
        keepScore(0, 0); // Update scores in the DOM to reflect the reset
    }
}

function displayFinalWinner() {
    // Determine the final result message
    let finalMessage;
    if (userScore === maxPoints) {
        finalMessage = "YOU WIN AGAINST PC";
        setTimeout(() => {
            // Redirect to the game-over page with the result as a URL parameter
            window.location.href = `victory.html?result=${encodeURIComponent(
                finalMessage
            )}`;
        }, 1000); // Delay for 5 seconds (5000 milliseconds)
    } else {
        finalMessage = "YOU LOST AGAINST PC";
    }

    // Display the final message on the results page
    resultText.innerText = finalMessage;

    // Reset scores to 0 after displaying the final winner
    userScore = 0;
    computerScore = 0;
    keepScore(0, 0); // Update scores in the DOM to reflect the reset
}

// Play Again - Regular game play
playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
});

// Show/Hide Rules
btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});