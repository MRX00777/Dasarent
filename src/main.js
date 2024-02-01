const buttonNavMenu = document.querySelector('.header-nav-menu');
const headerNavList = document.querySelector('.header-nav__list');

buttonNavMenu.addEventListener('click', function () {
    headerNavList.classList.toggle('displayBlock');
})