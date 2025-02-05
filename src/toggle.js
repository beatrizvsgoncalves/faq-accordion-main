export default function toggle(el){
    const answer = el.parentNode.querySelector('.answer');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        el.querySelector('.icon').setAttribute('src', './assets/images/icon-plus.svg')    
    } else {
        answer.style.display = 'block';
        el.querySelector('.icon').setAttribute('src', './assets/images/icon-minus.svg')
    }
}