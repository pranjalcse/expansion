var questions = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    var question = this.name;
    var answer = this.value;
    if (question && answer) {
      if (checkAnswer(question, answer)) {
        // disable all buttons for this question
        var buttons = document.querySelectorAll('input[name="' + question + '"]');
        for (var j = 0; j < buttons.length; j++) {
          buttons[j].disabled = true;
          if (buttons[j].value === answer) {
            buttons[j].parentElement.classList.add('correct');
            document.getElementById(question + '-feedback').innerHTML = "Correct!";
            document.getElementById(question + '-feedback').classList.add('correct');
            document.getElementById(question + '-feedback').classList.remove('incorrect');
          } else {
            buttons[j].parentElement.classList.add('disabled');
          }
        }
      } else {
        this.parentElement.classList.add('incorrect');
        document.getElementById(question + '-feedback').innerHTML = "Incorrect!";
        document.getElementById(question + '-feedback').classList.add('incorrect');
        document.getElementById(question + '-feedback').classList.remove('correct');
      }
    }
  });
}
