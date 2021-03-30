window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.head__burger');
    const menu = document.querySelector('.head__menu-mobile');



    burger.addEventListener('click', () => {
        menu.classList.contains('hide') ? 
        menu.classList.remove('hide') :
        menu.classList.add('hide');
        console.log('done');
    })
    

















})