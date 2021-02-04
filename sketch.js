var canvas;
var contestantCount, database, quiz, question, contestant;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);

  quizObject = Quiz();
  quizObject.getState();
  quizObject.start();
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
