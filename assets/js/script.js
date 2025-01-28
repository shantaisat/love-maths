
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                
            }
        })
    }
  // Code goes here
    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 *  and after the user's answer has been processed
 */
function runGame(gameType) {
  // Generate two random numbers
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
  
  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  }else{
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}
function checkAnswer() {
  // Calculate the correct answer
  
}
function calculateCorrectAnswer() {
  // Return the correct answer
        let operand1 = parseInt(document.getElementById('operand1').innerText);
        let operand2 = parseInt(document.getElementById('operand2').innerText);     
        let operator = document.getElementById('operator').innerText;   
}
function incrementScore() {
  // Increment the score
  
}
function incrementWrongAnswer() {
  // Increment the incorrect answer
  
}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";


  // Display the question
  
}
function displaySubtractQuestion() {
  // Display the question
  
}
function displayMultiplyQuestion() {
  // Display the question
  
}
