const toggles = document.querySelectorAll('.toggle')

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', toggle) 
}

function toggle(){
    const answer = this.parentNode.querySelector('.answer');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.querySelector('.icon').setAttribute('src', './assets/images/icon-plus.svg')    
    } else {
        answer.style.display = 'block';
        this.querySelector('.icon').setAttribute('src', './assets/images/icon-minus.svg')
    }
}