// Making sure javascript is linked with html
console.log("linked");

var questionOne = {
    question: "What is the largest born in the Human Body?",
    answers : ["Skull","Femur","Pelvis","Spine"],
    correctAnswer: "Femur"
};

var questionTwo = {
    question: "What was the name of the second Indiana Jones movies,released in 1984?",
    answers : ["Indiana Jones and the Last Crusade","Indiana Jones and the Kingdom of the Crystal Skull","Indiana Jones and the Temple of Doom"],
    correctAnswer: "Indiana Jones and the Temple of Doom"
};

var questionThree = {
    question: "Who was the greek god of dremas?",
    answers : ["Dionysus","Morpheus","Nike","Demeter"],
    correctAnswer: "Morpheus"
};


var questionFour = {
    question: "Which pop album is the best-seller of all time?",
    answers : ["Songs For Swingin’ Lovers","Sgt Pepper’s Lonely Hearts Club Band","What’s Goin’ On ","Thriller"],
    correctAnswer: "Thriller"
};


var questionFive = {
    question: "Which is the largest island in the Mediterranean Sea?",
    answers : ["Sicily","Ibiza","Cres","Sardinia"],
    correctAnswer: "Sicily"
};



// ------------------------------------------------------------------------
// Attaching start button to on click event to start the game 
$("#start").click(function(){
    $("#start").remove();

    var timer = setInterval(1);
    $("#ZM").prepend("<h2> Time Reamaning : " + timer  + "</h2>")

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