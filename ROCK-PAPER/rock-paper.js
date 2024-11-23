 // Variables for scores, rounds, and round count
 let matthewScore = 0;
 let obiScore = 0;
 let roundCount = 0;
 const maxRounds = 5;

 // I also used an object for the Image paths for hands
 const handImages = {
                    rock: "./rock-paper-scissor-images/rock-emoji.png",
                    paper: "./rock-paper-scissor-images/paper-emoji.png",
                    scissors: "./rock-paper-scissor-images/scissors-emoji.png",
                    placeholder: "https://via.placeholder.com/120?text=choice"
                    };

 // I used an Object to store the outcome of the game
 const outcomes = {
                    rock:{
                        rock: "draw", 
                        paper: "obi", 
                        scissors: "matthew"
                        },
                    paper:{
                        rock: "matthew", 
                        paper: "draw", 
                        scissors: "obi"
                        },
                    scissors:{
                        rock: "obi", 
                        paper: "matthew", 
                        scissors: "draw"
                    }
 };

 // Function to generate Obi's move using random number
 function pickObiMove() {
   const randomNumber = Math.random();
   let obiMove = '';
   if(randomNumber >= 0 && randomNumber < 1/3){
    obiMove = 'rock'
   }
   else if(randomNumber >= 1/3 && randomNumber < 2/3){
    obiMove = 'paper'
   }
   else if (randomNumber >= 2/3 && randomNumber < 1) {
    obiMove = 'scissor'
   };
   return obiMove;
 }
 

 // Function to determine round winner using outcomes object

 function determineWinner(matthewMove, obiMove) {
   return outcomes[matthewMove][obiMove]; // Retrieve result directly
 }



 // Function to play the game between Matthew and Obi
 //NB: I called the pickObiMove() function in the playGame() function to get obi move and compare it with Matthew's move.
 function playGame(matthewMove) {
   let obiMove = pickObiMove();
   const resultDisplay = document.getElementById("roundResult");
   const matthewScoreDisplay = document.getElementById("matthewScore");
   const obiScoreDisplay = document.getElementById("obiScore");
   const winnerDisplay = document.getElementById("finalWinner");
   const roundIndicator = document.getElementById("roundIndicator");
   const obiHand = document.getElementById("obiHand");
   const matthewHand = document.getElementById("matthewHand");
   const resetButton = document.getElementById("resetButton");

   // Update hand images
   obiHand.src = handImages[obiMove];
   matthewHand.src = handImages[matthewMove];

   // Determine round winner
   const winner = determineWinner(matthewMove, obiMove);
   roundCount++;

   if (winner === "matthew") {
     matthewScore++;
     roundResult.textContent = `Matthew wins this round! Matthew chose ${matthewMove}, Obi chose ${obiMove}.`;
   } else if (winner === "obi") {
     obiScore++;
     roundResult.textContent = `Obi wins this round! Matthew chose ${matthewMove}, Obi chose ${obiMove}.`;
   } else {
     roundResult.textContent = `It's a draw! Both chose ${matthewMove}.`;
   }

   // Update scores and round indicator
   matthewScoreDisplay.textContent = matthewScore;
   obiScoreDisplay.textContent = obiScore;
   
   if (roundCount < maxRounds) {
     roundIndicator.textContent = `Round ${roundCount + 1} of ${maxRounds}`;
     roundIndicator.style.fontSize = '20px'
   } else {
    roundIndicator.textContent = `Game Over`;
    roundIndicator.style.color = 'red'
    roundIndicator.style.fontWeight = 'bold'
     resetButton.style.display = "inline"; // Show reset button
   }

   // Check if game is over
   if (roundCount === maxRounds) {
     if (matthewScore > obiScore) {
       winnerDisplay.textContent = "Congratulations! Matthew is the overall winner!";
     } else if (obiScore > matthewScore) {
       winnerDisplay.textContent = "Obi wins the game! Better luck next time Matthew.";
     } else {
       winnerDisplay.textContent = "It's a tie! No overall winner.";
     }
     // Disable all buttons after the game ends
     document.querySelectorAll(".button1").forEach(button => {
       button.disabled = true;
     });
   }
 }

 // Reset the game
 function resetGame() {
   matthewScore = 0;
   obiScore = 0;
   roundCount = 0;

   document.getElementById("matthewScore").textContent = "0";
   document.getElementById("obiScore").textContent = "0";
   document.getElementById("roundIndicator").textContent = `Round 1 of ${maxRounds}`;
   document.getElementById("roundResult").textContent = "";
   document.getElementById("finalWinner").textContent = "";
   document.getElementById("matthewHand").src = handImages.placeholder;
   document.getElementById("obiHand").src = handImages.placeholder;

   document.querySelectorAll(".button1").forEach(button => {
     button.disabled = false;
   });

   document.getElementById("resetButton").style.display = "none"; // Hide reset button
 }

 // Add event listeners to buttons
 document.querySelectorAll(".button1").forEach(button => {
   button.addEventListener("click", () => {
     let matthewMove = button.getAttribute("data-choice");
     playGame(matthewMove);
   });
 });

 // Add event listener to reset button
 let gameReset = document.getElementById("resetButton");
 gameReset.addEventListener("click", resetGame);