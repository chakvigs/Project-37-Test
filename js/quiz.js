class Quiz {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    })
  }
  
  update(state) {
    database.ref('/').update({
      gameState: state
    })
  }
  
  async start() {
      if (gameState === 0) {
          contestantObject = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCount.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
      }
  }

  play() {
    question.hide();
    background("red");
    fill("black");
    textSize(15);

    text("Result of the Quiz Is: ", 350, 50);
    Contestant.getPlayerInfo();

    if (allContestants !== undefined) {
      debugger
      var displayAnswers = 230;
      text("Contestants who answered correctly are highlighted in green", 130, 230);

      for (var player in allContestants) {
        var correctAnswer = "2";
        if (correctAnswer === allContestants[player].answer) {
          fill("green");
        }

        else {
          fill("red");
        }

        displayAnswers += 30;
        text(allContestants[player].name + ":" + allContestants[player].answer, 250, displayAnswers);
      }
    }
  }
}