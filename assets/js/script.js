
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
  // Code goes here
});
function runGame() {
  // Generate two random numbers
  
}
function checkAnswer() {
  // Calculate the correct answer
  
}
function calculateCorrectAnswer() {
  // Return the correct answer
  
}
function incrementScore() {
  // Increment the score
  
}
function incrementWrongAnswer() {
  // Increment the incorrect answer
  
}
function displayAdditionQuestion() {
  // Display the question
  
}
function displaySubtractQuestion() {
  // Display the question
  
}
function displayMultiplyQuestion() {
  // Display the question
  
}
