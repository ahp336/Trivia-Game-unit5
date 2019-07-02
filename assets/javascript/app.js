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

var counter = 30;
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
        $("#ZM").append("<p> <input type='radio'  " + questionOne.answers[j] +   " value='" + questionOne.answers[j] + "' name='questionOne' >" + questionOne.answers[j] + "</p>" );
        };



    $("#ZM").append("<h2>" + questionTwo.question + "</h2>");
        for(var j=0 ;  j < questionTwo.answers.length ; j++){
            $("#ZM").append( "<p> <input type='radio'  " + questionTwo.answers[j] +   " value='" + questionTwo.answers[j] + "' name='questionTwo' >" + questionTwo.answers[j] + "</p>" );   
        };
    



    $("#ZM").append("<h2>" + questionThree.question + "</h2>");

        for(var j=0 ;  j < questionThree.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionThree.answers[j] +   " value='" + questionThree.answers[j] + "' name='questionThree' >" + questionThree.answers[j] + "</p>" );
        };
    



    $("#ZM").append("<h2>" + questionFour.question + "</h2>");

        for(var j=0 ;  j < questionFour.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionFour.answers[j] +   " value='" + questionFour.answers[j] + "' name='questionFour' >" + questionFour.answers[j] + "</p>" );
        };


        $("#ZM").append("<h2>" + questionFive.question + "</h2>");

        for(var j=0 ;  j < questionFive.answers.length ; j++){
            $("#ZM").append("<p> <input type='radio'  " + questionFive.answers[j] +   " value='" + questionFive.answers[j] + "' name='questionFive' >" + questionFive.answers[j] + "</p>" );
        };


    // Function Execution which will displey result
        resultDisplay();

});

// Function for Timer as as it goes down
function countdown(){
    counter --;

    $("#MD").html("<h4> Time Reamaning : " + counter  + "</h4>");

    if(counter == 0){
        clearInterval(timer)
        $("#MD").html("<h4> Time Reamaning : " + counter  + " Seconds </h4>").remove();
        $("#ZM").remove();
        $("#MRP").append("<h3>" + result.txt +"</h3>")
        $("#MRP").append(" <h4> Correct Answers: " + result.rightAnswers +"</h4>");
        $("#MRP").append(" <h4> Incorrect Answers: " + result.wrongAnswers +"</h4>");
        $("#MRP").append(" <h4> Unanswered Questions: " + result.unanswered +"</h4>");
        resultDisplay();
    
    }
};

function resultDisplay(){
    
    // Question One
    if($(this).val() == questionOne.correctAnswer){
        result.rightAnswers ++;
    } 
    if($(this).val() == questionOne.answers[0] || $(this).val() == questionOne.answers[2] || $(this).val() == questionOne.answers[3]){
        result.wrongAnswers ++;
    }
    else {
        result.unanswered ++;
    }

    // Question Two
    if($(this).val() == questionTwo.correctAnswer){
        result.rightAnswers ++;
    } 
    if($(this).val() == questionTwo.answers[0] || $(this).val() == questionTwo.answers[1]){
        result.wrongAnswers ++;
    }
    else {
        result.unanswered ++;
    }

    // Question Three
    if($(this).val() == questionThree.correctAnswer){
        result.rightAnswers ++;
    } 
    if($(this).val() == questionThree.answers[0] || $(this).val() == questionThree.answers[2] || $(this).val() == questionThree.answers[3]){
        result.wrongAnswers ++;
    }
    else {
        result.unanswered ++;
    }

    // Question Four
    if(this.val() == questionFour.correctAnswer){
        result.rightAnswers ++;
    } 
    if($(this).val() == questionFour.answers[0] || $(this).val() == questionFour.answers[1] || $(this).val() == questionFour.answers[2]){
        result.wrongAnswers ++;
    }
    else {
        result.unanswered ++;
    }

    // Question Five
    if($(this).val() == questionFive.correctAnswer){
        result.rightAnswers ++;
    } 
    if($(this).val() == questionFive.answers[1] || $(this).val() == questionFive.answers[2] || $(this).val() == questionFive.answers[3]){
        result.wrongAnswers ++;
    }
    else {
        result.unanswered ++;
    }

}