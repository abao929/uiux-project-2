const body = document.querySelector("body")
const searchBar = document.querySelector("#search-bar")
const hamburger = document.querySelector(".hamburger")
body.addEventListener("click", (e) => {
  console.log(e)
  if (e.target == searchBar) {
    body.classList.add("blur")
    body.classList.add("stop-scrolling")
    for (let img of document.getElementsByTagName("img")) {
      img.classList.add("test-blur")
    }
    document.querySelector(".search-results").classList.remove("hidden")
  } else if (e.target == hamburger) {
  } else {
    body.classList.remove("blur")
    body.classList.remove("stop-scrolling")
    for (let img of document.getElementsByTagName("img")) {
      img.classList.remove("test-blur")
    }
    document.querySelector(".search-results").classList.add("hidden")
  }
})
