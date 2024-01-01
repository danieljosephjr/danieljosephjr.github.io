const burgerIcon = document.querySelector('#burgerMobile');
const navbarMenu = document.querySelector('#nav-links');

    burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    });

    const burgerIconT = document.querySelector('#burgerTab');
    const navbarMenuT = document.querySelector('#nav-links-tablet');

    burgerIconT.addEventListener('click', () => {
    navbarMenuT.classList.toggle('is-active');
    });