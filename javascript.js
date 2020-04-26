//Adding object that contain questions and list of answers
var quizzQuestions = [{
    "question": "Inside which HTML element do we put the javascript?",
    "option1": "<script>",
    "option2": "<js>",
    "option3": "<javascript>",
    "option4": "<scripting>",
    "answer": "1"
},{
    "question": "How do you write 'Hello World' in an alert box?",
    "option1": "alert('Hello World');",
    "option2": "msg('Hello World');",
    "option3": "alertBox('Hello World')",
    "option4": "<scripting>",
    "answer": "1"
},{
    "question": "How to write an IF statement in JavaScript?",
    "option1": "if i = 5",
    "option2": "if i = 5 then",
    "option3": "if(i==5)",
    "option4": "if i==5 then",
    "answer": "3"
},{
    "question": "How to write an IF statement for executing some code if i is NOT equal to 5?",
    "option1": "if (i <> 5)",
    "option2": "if i <> 5",
    "option3": "if i =! 5 then",
    "option4": "if (i != 5)",
    "answer": "4"
}]


//Declare variables that hold our values and functions
var questionAsked = 0;
var score = 0; 
//grab the container div

var container = document.getElementById("quizzContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");


var totalQuestion = quizzQuestions.length;
var nextButton = document.getElementById("nextButton");
var result = document.getElementById("result");


//Specify the method for asking the question

function askQuestion (quizzQuestionsIndex) {
    var quest = quizzQuestions[quizzQuestionsIndex];
    //set text for the question element
    questionEl.textContent = (quizzQuestionsIndex + 1) + ". " + quest.question;
    opt1.textContent = quest.option1;
    opt2.textContent = quest.option2;
    opt3.textContent = quest.option3;
    opt4.textContent = quest.option4;
};

function askNextQuestion (){
    var userAnswered = document.querySelector("input[type=radio]:checked");
    if (!userAnswered){
        alert("Select an option to answer the question.");
        return;
    }
    var answer = userAnswered.value;
    if (quizzQuestions[questionAsked].answer == answer){
        score += 1;
    }
    userAnswered.checked = false;
    questionAsked++;
    if (questionAsked == totalQuestion - 1){
        nextButton.textContent = "Finish";
    }
    if (questionAsked == totalQuestion){
        container.style.display = "none";
        result.style.display = "";
        result.textContent = "You got " + score + "/4";
        return;
    }
    askQuestion(questionAsked);
}

//execute the function:
askQuestion(questionAsked);

let user_time = sessionStorage.getItem("time");
document.querySelector(".time").innerHTML = user_time;
