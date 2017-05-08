var inquirer = require("inquirer");

var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var flashcards = [];
//var loginType = process.argv[2];

//loop?
//if(count < 5) {

//}

askForAction();

function askForAction() {
  inquirer.prompt([

  {
    type: "checkbox",
    name: "action",
    message: "What would you like to do?",
    choices: ["Create", "Quiz", "Quit"]
  }
  ]).then(function(answer) {
  // if basic, call askForBasicInfo()
  // if cloze, call askForClozeInfo()
      var userChoice = answer.action[0];
      if (userChoice === 'Quiz') {
        console.log('quiz quiz quiz!');
        quiz();
      }
      else if (userChoice === 'Create') {
        console.log('create');
        askForCardType(); 
      }
      else {
        return; 
      }
  });
}

function askForCardType() {
  // initial inquirer prompt: ask for card choice (basic or cloze?)
  inquirer.prompt([

  {
    type: "checkbox",
    name: "typeOfCard",
    message: "What type of FlashCard would you like?",
    choices: ["BasicCards", "ClozeCard",]
  }
  ]).then(function(answer) {
  // if basic, call askForBasicInfo()
  // if cloze, call askForClozeInfo()
      var userChoice = answer.typeOfCard[0];
      if (userChoice === 'BasicCards') {
        console.log('basic');
        askForBasicInfo();
      }
      else if (userChoice === 'ClozeCard') {
        console.log('cloze');
        askForClozeInfo(); 
      }
  });
}


function askForBasicInfo() {
  // do another inquirer prompt
  inquirer.prompt([

  {
    type: "input",
    name: "BasicCardQuestion",
    message: "What is the quesion?"
    
  },
  {
    type: "input",
    name: "BasicCardAnswer",
    message: "What is the answer?"
  }
  ]).then(function(answers) {
      var question = answers.BasicCardQuestion; // front
      var answer = answers.BasicCardAnswer; // back
      console.log(question, answer)
      var newCard = new BasicCard(question, answer);
      flashcards.push(newCard);
      console.log(flashcards);
      askForAction();
  });
}

function askForClozeInfo() {
  // do another inquirer prompt
  inquirer.prompt([
    {
      type: "input",
      name: "ClozeInfoStatement",
      message: "What is the statement?"
    }
  ]).then(function(answers) {
  // ask for full statement, and part-to-be-left-out (the cloze?)
    var statement = answers.ClozeInfoStatement;
    //("")is leaving a space between character 
    var statementWords = statement.split(' ');
    //splicing at 0 index and using first two words 
    var cloze = statementWords.splice(0, 2).join(' ');
    var newCard = new ClozeCard(statement, cloze);
    flashcards.push(newCard);
    console.log(flashcards);
    askForAction();
  });

}

function quiz() {
  // this loop will run once for each card in flashcards array:
  // for (var i = 0; i < flashcards.length; i++ ) {
  //   var currentCard = flashcards[i];
  //   // currentCard will either be a BasicCard, or a ClozeCard
  //   if (currentCard.front) {
  //     // this is a basic card. ask the question on the front
  //   }
  //   else if (currentCard.text) {
  //     // this is a cloze card. display the statement with missing cloze.
  //   }
  //   // otherwise, some error, do nothing, continue!
  // }
  askQuizQuestion(0);
  askForAction();
}

function askQuizQuestion(cardIndex) {
  var card = flashcards[cardIndex];
  if (card.front) {
    console.log(card.front);
    console.log(card.back);
  }
  else if (card.partial) {
    console.log(card.partial);
    console.log(card.cloze);
  }
  
  if (cardIndex < flashcards.length - 1) {
    askQuizQuestion(cardIndex + 1);
  }
}

  //{

// ]).then(function(user) {

// if (user === "BasicCards") {
//  var front = question
//  var back = reply
//   myApp.BasicCards();
  

// }

// else {

//   myApp.ClozeCard();

// }
// });
// //count++;
// //what function do i want to callback? Dont i need another input from the command line?

// //var arrayOfCards = []

// //var card = new ClozeCard(cardQuestion,clozer);
// //arrayOfCards.push(card);

// //if(count < 5) {

//}