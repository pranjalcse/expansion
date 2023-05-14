document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

window.onload = function() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

const slider = document.querySelector(".slider");

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrolled = scrollTop / (scrollHeight - clientHeight) * 100;

  slider.style.width = scrolled + "%";

  if (scrolled > 50) {
    slider.classList.add("slider-filled");
  } else {
    slider.classList.remove("slider-filled");
  }
});

var hamburger_menu = document.querySelector(".hamburger-menu");
    var big_wrapper = document.querySelector(".big-wrapper");
    function events() {
  // toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

Prism.highlightAll({
  theme: 'prism',
  language: 'java',
  showInvisibles: true,
  prompt: { 
    user: 'user', 
    host: 'host', 
    global: false 
  }
});

var questions = document.querySelectorAll('input[type="radio"]');
		for (var i = 0; i < questions.length; i++) {
			questions[i].addEventListener('click', function() {
				var question = this.name;
				var answer = this.value;
				if (question && answer) {
					if (checkAnswer(question, answer)) {
						this.parentElement.classList.add('correct');
						// this.parentElement.querySelector('label').classList.add('correct');
						document.getElementById(question+'-feedback').innerHTML = "Correct!";
						document.getElementById(question+'-feedback').classList.add('correct');
						document.getElementById(question+'-feedback').classList.remove('incorrect');
					} else {
						this.parentElement.classList.add('incorrect');
						// this.parentElement.querySelector('label').classList.add('incorrect');
						document.getElementById(question+'-feedback').innerHTML = "Incorrect!";
						document.getElementById(question+'-feedback').classList.add('incorrect');
						document.getElementById(question+'-feedback').classList.remove('correct');
					}
          
				}
			});
		}

		function checkAnswer(question, answer) {
			switch(question) {
				case "q1":
					return answer === "b";
				case "q2":
					return answer === "b";
        case "q3.1":
          return answer === "c";
        case "q3.2":
          return answer === "e";
        case "q4":
          return answer === "c";
        case "q5":
          return answer === "d";
        case "q6.1":
          return answer === "c";
        case "q6.2":
          return answer === "d";
        case "q7.1":
          return answer === "d";
        case "q7.2":
          return answer === "b";        
				default:
					return false;
			}
		}