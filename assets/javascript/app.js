// Making sure javascript is linked with html
console.log("linked");

// Global Variables
var questionOne = {
    question: "What is the largest born in the Human Body?",
    answers : ["Skull","Femur","Pelvis","Spine"],
    correctAnswer: "Femur"
};
console.log(" Correct Answer Q1 " + questionOne.correctAnswer)


var questionTwo = {
    question: "What was the name of the second Indiana Jones movies,released in 1984?",
    answers : ["Indiana Jones and the Last Crusade","Indiana Jones and the Kingdom of the Crystal Skull","Indiana Jones and the Temple of Doom"],
    correctAnswer: "Indiana Jones and the Temple of Doom"
};
console.log(" Correct Answer Q1 " + questionTwo.correctAnswer)


var questionThree = {
    question: "Who was the greek god of dremas?",
    answers : ["Dionysus","Morpheus","Nike","Demeter"],
    correctAnswer: "Morpheus"
};
console.log(" Correct Answer Q1 " + questionThree.correctAnswer)



var questionFour = {
    question: "Which pop album is the best-seller of all time?",
    answers : ["Songs For Swingin’ Lovers","Sgt Pepper’s Lonely Hearts Club Band","What’s Goin’ On ","Thriller"],
    correctAnswer: "Thriller"
};
console.log(" Correct Answer Q1 " + questionFour.correctAnswer)


var questionFive = {
    question: "Which is the largest island in the Mediterranean Sea?",
    answers : ["Sicily","Ibiza","Cres","Sardinia"],
    correctAnswer: "Sicily"
};
console.log(" Correct Answer Q1 " + questionFive.correctAnswer)

var result = {

    txt: "Here is the result of the game",
    rightAnswers: 0,
    wrongAnswers: 0,
    unanswered: 0,
}

var counter = 21;
// for some reason I have to put input of counter at 122
var timer;


// ------------------------------------------------------------------------
// Attaching start button to on click event to start the game 


$("#start").click(function(){
    $("#start").remove();

    // Need to go through this coding with TA
    countdown();
    timer = setInterval(countdown,1000);

    // -------------------------------------------------------------

    $("#ZM").append("<h2>" + questionOne.question + "</h2>");
        for(var j=0 ;  j < questionOne.answers.length ; j++){
        $("#ZM").append("<p> <input type='radio'  " + questionOne.answers[j] + "  >  " + questionOne.answers[j] + "</p>" );
        };



    $("#ZM").append("<h2>" + questionTwo.question + "</h2>");
        for(var j=0 ;  j < questionTwo.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionTwo.answers[j] + "  >  " + questionTwo.answers[j] + "</p>" );   
        };
    



    $("#ZM").append("<h2>" + questionThree.question + "</h2>");

        for(var j=0 ;  j < questionThree.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionThree.answers[j] + "  >  " + questionThree.answers[j] + "</p>" );
        };
    



    $("#ZM").append("<h2>" + questionFour.question + "</h2>");

        for(var j=0 ;  j < questionFour.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionFour.answers[j] + "  >  " + questionFour.answers[j] + "</p>" );
        };


        $("#ZM").append("<h2>" + questionFive.question + "</h2>");

        for(var j=0 ;  j < questionFive.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionFive.answers[j] + "  >  " + questionFive.answers[j] + "</p>" );
        };
    
});

// Function for Timer as as it goes down
function countdown(){
    counter --;

    $("#MD").html("<h4> Time Reamaning : " + counter  + "</h4>");

    if(counter == 0){
        clearInterval(timer)
        $("#MD").html("<h4> Time Reamaning : " + counter  + "</h4>").remove();
        $("#ZM").remove();
        $("#MRP").append("<h3>" + result.txt +"</h3>")
        $("#MRP").append(" <h4> Correct Answers: " + result.rightAnswers +"</h4>");
        $("#MRP").append(" <h4> Incorrect Answers: " + result.wrongAnswers +"</h4>");
        $("#MRP").append(" <h4> Unanswered Questions: " + result.unanswered +"</h4>");
    
    }
};