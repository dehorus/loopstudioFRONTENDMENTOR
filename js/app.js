const menuIcon = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('.navbar');
const lines = document.querySelector('.line-1', '.line-2', '.line-3');

const $line = document.querySelectorAll('.line');

const d = document;



window.addEventListener('scroll', () => {
    const $navbar = document.querySelector('.navbar-container');

    const $navlinks = document.querySelectorAll('.nav-group a');

    const $logo = document.querySelector('.logo');
    if (window.pageYOffset > 465) {
        $navbar.classList.add('bg-white');
        $navlinks.forEach(el => el.classList.add('links-white'));
        $logo.classList.add('logo-dark');
        $line.forEach(el => el.classList.add('lineW'));
    } else {
        $navbar.classList.remove('bg-white');
        $navlinks.forEach(el => el.classList.remove('links-white'));
        $logo.classList.remove('logo-dark');
        $line.forEach(el => el.classList.remove('lineW'));
    }
})

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    if (window.pageYOffset > 465) {
        $line.forEach(el => el.classList.toggle('lineW'));
    } else {
        $line.forEach(el => el.classList.remove('lineW'));
    }

});
