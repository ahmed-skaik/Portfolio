let welcomeMsg = `Hello from JS`
console.log(welcomeMsg)

// scroll up start
let btn = document.getElementById("btn")

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function scroll() {
  if (scrollY >= 250) {
    btn.style.display = "block"
  }else {
    btn.style.display  = "none"
  }
}

window.addEventListener("scroll", scroll)

// scroll up end

// skills start
let sectionTop = document.querySelector(".skills")
let sectionBot = document.querySelector("footer")
let spanProg = document.querySelectorAll(".skills .skills-stat .prog-holder .prog span")

function skills() {
  if (window.scrollY >= sectionTop.offsetTop - 100 &&  window.scrollY <= sectionBot.offsetTop - 200) {
    spanProg.forEach ( (span) => {
      span.style.width = span.dataset.width;
    })
  }else {
    spanProg.forEach ( (span) => {
      span.style.width = 0;
    })
  }
}

window.addEventListener("scroll", skills)
// skills end