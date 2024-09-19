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



   