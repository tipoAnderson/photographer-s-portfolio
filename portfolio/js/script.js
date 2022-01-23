console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48/nблок <header> +6/nсекция hero +6/nсекция skills +6/nсекция portfolio +6/nсекция video +6/nсекция price +6/nсекция contacts +6/nблок <footer> +6/n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15/nнет полосы прокрутки при ширине страницы от 1440рх до 768рх +5/nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5/nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5/n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22/nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2/nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4/nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4/nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4/nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2/nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2/nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4');
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
};
document.querySelectorAll('li.menu__link')[0].onclick = function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};
document.querySelectorAll('li.menu__link')[1].onclick = function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};
document.querySelectorAll('li.menu__link')[2].onclick = function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};
document.querySelectorAll('li.menu__link')[3].onclick = function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};
document.querySelectorAll('li.menu__link')[4].onclick = function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};
// function menuClose() {
//     document.querySelector('.header__burger').click;
// }
// const navLinks = document.querySelectorAll('.menu__link');
// navLinks.forEach((el) => el.addEventListener('click', closeMenu));
// function closeMenu(event) {
//     if (event.target.classList.contains('menu__link')) {
//         document.querySelector('.header__burger').classList.remove('active');
//         document.querySelector('.header__menu').classList.remove('active');
//         document.body.classList.remove('lock');
//     }
// }
// const list = document.querySelectorAll('.menu > .menu__link');
// console.log(list);