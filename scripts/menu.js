console.log('hola mundo');
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-items')

hamburger.addEventListener('click', () => {
    let header = document.querySelector('#header')
    navLinks.classList.toggle('expanded')
    document.querySelector('#header').classList.toggle('expanded')
})