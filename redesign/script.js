const body = document.querySelector("body")
const searchBar = document.querySelector("#search-bar")
const hamburger = document.querySelector("#hamburger")
const locateBanner = document.querySelector(".locate-banner")
const iconBanner = document.querySelector(".icon-banner")
body.addEventListener("click", (e) => {
  // console.log(e)
  // console.log(hamburger.checked)
  if (e.target == searchBar) {
    body.classList.add("blur")
    body.classList.add("stop-scrolling")
    for (let img of document.getElementsByTagName("img")) {
      img.classList.add("test-blur")
    }
    document.querySelector(".search-results").classList.remove("hidden")
    hamburger.checked = false
  } else if (e.target == hamburger) {
    body.classList.add("blur")
    body.classList.add("stop-scrolling")
    // locateBanner.classList.add("lower-z")
    // iconBanner.classList.add("lower-z")
    // console.log(hamburger.checked)
  } else {
    body.classList.remove("blur")
    body.classList.remove("stop-scrolling")

    // locateBanner.classList.remove("lower-z")
    // iconBanner.classList.remove("lower-z")
    document.querySelector(".search-results").classList.add("hidden")
    hamburger.checked = false
  }
  if (!hamburger.checked) {
    body.classList.remove("blur")
    body.classList.remove("stop-scrolling")
  }

  // console.log(hamburger.checked)
})
