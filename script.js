const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});


const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
}); 



Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});


window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
  document.querySelector(".nav-list").addEventListener("click", () => {
    container.classList.remove("change");
  });
  
  for(var i = 0; i < elements.length; i++) {
    let element = elements[i];

    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});


  var audio = document.getElementById("myaudio");
  audio.volume = 0.35;
