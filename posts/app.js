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
  // language: 'java',
  showInvisibles: true,
  prompt: { 
    user: 'user', 
    host: 'host', 
    global: false 
  }
});

function Practice(str){
  if (str === 'orderAndRanking') {
    window.location.href = "../courses/aptitude/OrderRanking/OrderAndRanking.html";
  } else if (str == 'seatingArrangement') {
    window.location.href = "../courses/aptitude/Seating Arrangement/SeatingArrangement.html";
  } else {
    console.log("Invalid Page");
  }
}