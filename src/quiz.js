/*
 
 Client-side interactions to allow the form app to run in GitHub.io

 How to implement this - a short introduction:

  - Questions are <section> tags.
  - The text of the question is loaded as a <p> tag.
  - Answers go into a form with radio buttons. Change the response with the 
    "value" attribute. 
  - Additional effects and styling may be implemented via CSS.

*/

// Comment the anonymous function wrapper in order to debug via web console.
(function () {
'use strict';

// Elements detection
var scoremeter = document.querySelectorAll("span#testscore")[0];
var questions = document.querySelectorAll("form.answer");
var pages = document.querySelectorAll("body > section");
var radiobuttons = document.querySelectorAll("form input[type=radio]");
var nextbuttons = document.querySelectorAll("button.next");

// This counter will let us know what is the current "page" we're in:
var currentpage = 0;

// Clear choices, just in case.
for (let i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].checked = false;
}

// Hide all sections except for the beginning
function hideAll() {
    for (var i = 0; i < pages.length; i++) { // page 1 is title
        pages[i].style = "display: none";
    }
    pages[currentpage].style = "display: block";
}

// Advance to the next page by clicking the button. Sorry, no "going back"
function next() {
    pages[currentpage].style = "display: none";
    pages[currentpage + 1].style = "display: block";
    currentpage += 1;
}

// Evaluation of score. Change this according to your rules:
function evaluateScore(score) {
    if (score == 3) {
        return "Perfect";
    }
    else if (score > 1) {
        return "Passable";
    }
    else {
        return "Insufficient";
    }
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
            }
        }
    }

    scoremeter.innerHTML = total_score + "/" + questions.length + " which is " + evaluateScore(total_score);
}

var calc = document.querySelectorAll("button#calc")[0];
calc.onclick = calculate;

for (let a = 0; a < nextbuttons.length; a++) {
    nextbuttons[a].onclick = next;
}

hideAll();

})();
