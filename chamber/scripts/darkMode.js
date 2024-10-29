
const updateBodyDarkMode = (darkMode) => {
    console.log('Update:', darkMode)
    const bodyElement = document.querySelector('body')
    if (darkMode) {
        bodyElement.classList.add('dark')
    } else {
        bodyElement.classList.remove('dark')
    }
}

let darkMode = JSON.parse(localStorage.getItem('dark-mode'))
console.log('Dark:', darkMode)
updateBodyDarkMode(darkMode)

const darkModeToggle = document.getElementById('dark-mode-toggle')
darkModeToggle.addEventListener('click', () => {
    console.log('Toggle dark mode')
    darkMode = !darkMode
    localStorage.setItem('dark-mode', darkMode)
    updateBodyDarkMode(darkMode)
    if (darkMode){
        darkModeToggle.innerText = '🔆'
    }
    else {
        darkModeToggle.innerText = '🕶️'

    }
})
