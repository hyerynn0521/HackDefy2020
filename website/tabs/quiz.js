var myQuestions = [
  {
    question: "Which element is NOT involved in the acid rain cycle?",
    answers: {
      a: "NOx",
      b: "Oxygen",
      c: "Water",
      d: "SOx",
      e: "SO2",
      

    },
    correctAnswer: "d"
  },
  {
    question: "Where is NOx emitted from?",
    answers: {
      a: "animals",
      b: "cars",
      c: "clouds"
    },
    correctAnswer: "b"
  },
  {
    question: "Advanced level: pH level of acids is",
    answers: {
      a: "low",
      b: "high",
      c: "middle",
      d: "neutral"
    },
    correctAnswer: "a"
  }
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length;i++){
      answers = [];

      for(letter in questions[i].answers){
        answers.push(
          "<label>"
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ":"
            + questions[i].answers[letter]
          + "</label>"
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join() + '</div>'
      );
    }
    quizContainer.innterHTML = output.join();
  }
  function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect =0;

    for(var i=0; i<questions.length;i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if(userAnswer === questions[i].correctAnswer){
        numCorrect ++;

        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }
    resultsContainer.innerHTML = numCorrect +' out of '+questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
  
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);