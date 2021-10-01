let welcomeMsg = `Hello from JS`
console.log(welcomeMsg)

// scroll up start
let btn = document.getElementById("btn")

window.onscroll = function () {
  if (scrollY >= 250) {
    btn.style.display = "block"
  }else {
    btn.style.display  = "none"
  }
}

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// scroll up end