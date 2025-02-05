import toggle from './toggle.js'
import keyDown from './navigation.js'

const toggles = document.querySelectorAll('.toggle')
toggles.forEach(function (element) {
    element.addEventListener('click', () => {
        const el = element
        toggle(el)
    })
})

keyDown()