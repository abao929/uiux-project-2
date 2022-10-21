const body = document.querySelector('body')
const searchBar = document.querySelector('#search-bar')
const hamburger = document.querySelector('#hamburger')
const locateBanner = document.querySelector('.locate-banner')
const iconBanner = document.querySelector('.icon-banner')
const searchResults = document.querySelector('.search-results')
const chips = Array.from(document.querySelectorAll('.chip'))
const chipsMenu = document.querySelector('#chip-menu')

body.addEventListener('click', (e) => {
  if (e.target == searchBar) {
    console.log('search')
    body.classList.add('blur')
    body.classList.add('stop-scrolling')
    searchResults.classList.remove('hidden')
    hamburger.checked = false
  } else if (e.target == hamburger) {
    if (!searchResults.classList.contains('hidden')) {
      searchResults.classList.add('hidden')
    }
    if (chipsMenu.classList.contains('active')) {
      chipsMenu.classList.remove('active')
    }
    if (body.classList.contains('blur')) {
      body.classList.remove('blur')
      body.classList.remove('stop-scrolling')
    } else {
      body.classList.add('blur')
      body.classList.add('stop-scrolling')
    }
  } else if (chips.includes(e.target)) {
    body.classList.add('blur')
    body.classList.add('stop-scrolling')
    chipsMenu.classList.add('active')
    hamburger.checked = false
  } else {
    body.classList.remove('blur')
    body.classList.remove('stop-scrolling')
    searchResults.classList.add('hidden')
    chipsMenu.classList.remove('active')
    hamburger.checked = false
  }
  // console.log(chips.)
})

document.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.key == 'Escape') {
    body.classList.remove('blur')
    body.classList.remove('stop-scrolling')
    searchResults.classList.add('hidden')
    hamburger.checked = false
  }
})
