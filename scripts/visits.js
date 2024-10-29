
const counterElement = document.getElementById('visits')

const visitsString = localStorage.getItem('visitas') || '0'
const visits = parseInt(visitsString)
counterElement.innerText = visits + 1
localStorage.setItem('visitas', visits + 1)
