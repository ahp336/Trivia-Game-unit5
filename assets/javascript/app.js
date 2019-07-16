// Making sure javascript is linked with html
console.log("linked");

// Global Variables
var questionOne = {
    question: "What is the largest born in the Human Body?",
    answers: ["Skull", "Femur", "Pelvis", "Spine"],
    correctAnswer: "Femur"
};
console.log(" Correct Answer Q1" + questionOne.correctAnswer)


var questionTwo = {
    question: "What was the name of the second Indiana Jones movies,released in 1984?",
    answers: ["Indiana Jones and the Last Crusade", "Indiana Jones and the Kingdom of the Crystal Skull", "Indiana Jones and the Temple of Doom"],
    correctAnswer: "Indiana Jones and the Temple of Doom"
};
console.log(" Correct Answer Q2 " + questionTwo.correctAnswer)


var questionThree = {
    question: "Who was the greek god of dremas?",
    answers: ["Dionysus", "Morpheus", "Nike", "Demeter"],
    correctAnswer: "Morpheus"
};
console.log(" Correct Answer Q3 " + questionThree.correctAnswer)



var questionFour = {
    question: "Which pop album is the best-seller of all time?",
    answers: ["Songs For Swingin’ Lovers", "Sgt Pepper’s Lonely Hearts Club Band", "What’s Goin’ On ", "Thriller"],
    correctAnswer: "Thriller"
};
console.log(" Correct Answer Q4 " + questionFour.correctAnswer)


var questionFive = {
    question: "Which is the largest island in the Mediterranean Sea?",
    answers: ["Sicily", "Ibiza", "Cres", "Sardinia"],
    correctAnswer: "Sicily"
};
console.log(" Correct Answer Q5 " + questionFive.correctAnswer)

var result = {
    txt: "Here is the result of the game",
    rightAnswers: 0,
    wrongAnswers: 0,
    unanswered: 0,
}

var counter = 15;
var timer;


// ------------------------------------------------------------------------
// Attaching start button to on click event to start the game 


$("#start").click(function (event) {
    $("#start").remove();

    // Need to go through this coding with TA
    countdown();
    timer = setInterval(countdown, 1000);

    // -------------------------------------------------------------

    $("#ZM").append("<h2>" + questionOne.question + "</h2>");
    for (var j = 0; j < questionOne.answers.length; j++) {
        $("#ZM").append("<p> <input type='radio' value='" + questionOne.answers[j] + "' name='questionOne' >" + questionOne.answers[j] + "</p>");
    };



    $("#ZM").append("<h2>" + questionTwo.question + "</h2>");
    for (var j = 0; j < questionTwo.answers.length; j++) {
        $("#ZM").append("<p> <input type='radio' value='" + questionTwo.answers[j] + "' name='questionTwo' >" + questionTwo.answers[j] + "</p>");
    };




    $("#ZM").append("<h2>" + questionThree.question + "</h2>");

    for (var j = 0; j < questionThree.answers.length; j++) {
        $("#ZM").append("<p> <input type='radio' value='" + questionThree.answers[j] + "' name='questionThree' >" + questionThree.answers[j] + "</p>");
    };




    $("#ZM").append("<h2>" + questionFour.question + "</h2>");

    for (var j = 0; j < questionFour.answers.length; j++) {
        $("#ZM").append("<p> <input type='radio' value='" + questionFour.answers[j] + "' name='questionFour' >" + questionFour.answers[j] + "</p>");
    };


    $("#ZM").append("<h2>" + questionFive.question + "</h2>");

    for (var j = 0; j < questionFive.answers.length; j++) {
        $("#ZM").append("<p> <input type='radio' value='" + questionFive.answers[j] + "' name='questionFive' >" + questionFive.answers[j] + "</p>");
    };

    $("#ZM").append("<br><button id='done'>Done</button>");

});

$(document).on('click', "#done", function(){
    resultDisplay();
    clearInterval(timer)
    $("#MD").html("<h4> Time Reamaning in Seconds : " + counter + " </h4>").remove();
    $("#ZM").remove();    
    $("#MRP").append("<h3>" + result.txt + "</h3>")
    $("#MRP").append(" <h4> Correct Answers: " + result.rightAnswers + "</h4>");
    $("#MRP").append(" <h4> Incorrect Answers: " + result.wrongAnswers + "</h4>");
    $("#MRP").append(" <h4> Unanswered Questions: " + result.unanswered + "</h4>");

});

// Function for Timer as as it goes down
function countdown() {
    counter--;

    $("#MD").html("<h4> Time Reamaning in Seconds : " + counter + "</h4>");

    if (counter == 0) {
        clearInterval(timer)
        $("#MD").html("<h4> Time Reamaning in Seconds : " + counter + " </h4>").remove();
        $("#ZM").hide();    
        resultDisplay();
        $("#MRP").append("<h3>" + result.txt + "</h3>")
        $("#MRP").append(" <h4> Correct Answers: " + result.rightAnswers + "</h4>");
        $("#MRP").append(" <h4> Incorrect Answers: " + result.wrongAnswers + "</h4>");
        $("#MRP").append(" <h4> Unanswered Questions: " + result.unanswered + "</h4>");
    }
};

function resultDisplay() {

    var q1 = $("input[name='questionOne']:checked").val();
    var q2 = $("input[name='questionTwo']:checked").val();
    var q3 = $("input[name='questionThree']:checked").val();
    var q4 = $("input[name='questionFour']:checked").val();
    var q5 = $("input[name='questionFive']:checked").val();

    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    console.log(q5);



    // Question One
    $.each($("input[name='questionOne']:checked"), function () {

        if ($(this).val() === questionOne.correctAnswer) {
            result.rightAnswers++;
        }
        else {
            result.wrongAnswers++;
        }
    });


    // Question Two
    $.each($("input[name='questionTwo']:checked"), function () {
        if ($(this).val() === questionTwo.correctAnswer) {
            result.rightAnswers++;
        }
        else {
           result.wrongAnswers++;
        }
    });


    // Question Three
    $.each($("input[name='questionThree']:checked"), function () {
        if ($(this).val() === questionThree.correctAnswer) {
            result.rightAnswers++;
        }
        else {
            result.wrongAnswers++;
        }
    });


    // Question Four
    $.each($("input[name='questionFour']:checked"), function () {
        if ($(this).val() === questionFour.correctAnswer) {
            result.rightAnswers++;
        }
        else {
            result.wrongAnswers++;
        }
    });

    // Question Five
    $.each($("input[name='questionFive']:checked"), function () {
        if ($(this).val() === questionFive.correctAnswer) {
            result.rightAnswers++;
        }
        else {
            result.wrongAnswers++;
        }
    });


};