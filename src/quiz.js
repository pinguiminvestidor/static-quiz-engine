/*
 
 Client-side interactions to allow the form app to run in GitHub.io

 How to implement this - a short introduction:

  - Questions are <section> tags with a given id of qX, where X is your 
    question number.
  - The text of the question is loaded as a <p> tag.
  - Answers go into a form with radio buttons.
 
*/

// Comment the anonymous function wrapper in order to debug via web console.
// (function () {

// Elements detection
var scoremeter = document.querySelectorAll("span#testscore")[0];
var questions = document.querySelectorAll("form.answer");
var buttons = document.querySelectorAll("form input[type=radio]");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].checked = false;
}

// Calculate the score

function calculate() {
    let total_score = 0;
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let answers = questions[i].querySelectorAll("input[type=radio]");

        for (let j = 0; j < answers.length; j++) {
            if (answers[j].checked) {
                score = Number(answers[j].value);
                total_score += score;
                console.log("In Question " + i + " obtained " + score);
            }
        }
    }
    scoremeter.innerHTML = total_score + "/" + questions.length;
}

calc = document.querySelectorAll("button#calc")[0];
calc.onclick = calculate;

// })()
