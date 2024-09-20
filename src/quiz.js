class Quiz {
    // YOUR CODE HERE:
constructor (questions, timeLimit, timeRemaining){
this.questions = questions;
this.timeLimit = timeLimit;
this.timeRemaining = timeRemaining;
this.correctAnswers = 0;
this.currentQuestionIndex = 0;
}

getQuestion(){
    return this.questions[this.currentQuestionIndex];
}
    
moveToNextQuestion(){
this.currentQuestionIndex += 1;
}

shuffleQuestions() {
for (let i = 0; i < this.questions.length; i++) {
const randomIndex = Math.floor(Math.random() * (this.questions.length - i)) + i;
[this.questions[i], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[i]];
}
}

checkAnswer(answer) {
const currentQuestion = this.getQuestion();
if (currentQuestion && currentQuestion.correctAnswer === answer) {
this.correctAnswers += 1;
}
}

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

/* Anna's code
class Quiz {
    //Questions = ["In which country you are?"]
    constructor(questions, timeLimit, timeRemaining) {
      this.questions = questions;
      this.timeLimit = timeLimit;
      this.timeRemaining = timeRemaining;
      this.correctAnswers = 0;
      this.currentQuestionIndex = 0;  
    }
    //Method difinition
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }
    shuffleQuestions() {
        for (let i = 0; i < this.questions.length; i++) {
            const currentQuestion = this.questions[i];
            const randomIndex = Math.floor(Math.random() *this.questions.length);
            this.questions.splice(i, 1);
            this.questions.splice(randomIndex, 0, currentQuestion);
    }
    }
    checkAnswer(answer) {
        if (answer === "Germany");
          this.correctAnswers += 1;
    }
    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length)
            return false;
        else if (this.currentQuestionIndex === this.questions.length)
            return true;
        else
            return false;
    }
}
*/

   