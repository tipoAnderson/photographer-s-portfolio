
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
};

// 1 способ 
// document.querySelectorAll('.menu__link')[0].onclick = function () {
//     document.querySelector('.header__burger').classList.remove('active');
//     document.querySelector('.header__menu').classList.remove('active');
//     document.body.classList.remove('lock');
// };
// document.querySelectorAll('.menu__link')[1].onclick = function () {
//     document.querySelector('.header__burger').classList.remove('active');
//     document.querySelector('.header__menu').classList.remove('active');
//     document.body.classList.remove('lock');
// };
// document.querySelectorAll('.menu__link')[2].onclick = function () {
//     document.querySelector('.header__burger').classList.remove('active');
//     document.querySelector('.header__menu').classList.remove('active');
//     document.body.classList.remove('lock');
// };
// document.querySelectorAll('.menu__link')[3].onclick = function () {
//     document.querySelector('.header__burger').classList.remove('active');
//     document.querySelector('.header__menu').classList.remove('active');
//     document.body.classList.remove('lock');
// };
// document.querySelectorAll('.menu__link')[4].onclick = function () {
//     document.querySelector('.header__burger').classList.remove('active');
//     document.querySelector('.header__menu').classList.remove('active');
//     document.body.classList.remove('lock');
// };


// 2 способ (обработчик вешается на кадую ссылку)
const links = document.querySelectorAll('.menu__link');
links.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
};

// 3 способ (обработчик вешается на родителя ссылок и функция выполняется после проверки на наличие необходимого класса у дочерних элементов по которым происходит событие)
// const nav = document.querySelector('.header__menu')
// nav.addEventListener('click', closeMenu);
// function closeMenu(event) {
//     if (event.target.classList.contains('menu__link')) {
//         document.querySelector('.header__burger').classList.remove('active');
//         document.querySelector('.header__menu').classList.remove('active');
//         document.body.classList.remove('lock');
//     }
// };



const portfolioImages = document.querySelectorAll('.portfolio__item')
const portfolioBtns1 = document.querySelectorAll('.portfolio__btn')[0];

portfolioBtns1.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
})
const portfolioBtns2 = document.querySelectorAll('.portfolio__btn')[1];
portfolioBtns2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
})
const portfolioBtns3 = document.querySelectorAll('.portfolio__btn')[2];
portfolioBtns3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
})
const portfolioBtns4 = document.querySelectorAll('.portfolio__btn')[3];
portfolioBtns4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.add('btn_act');
})

//Наработки для портфолио
// portfolioBtns.forEach((el) => el.addEventListener('click', changeImage));
// function changeImage() {
//     //document.portfolioBtns.getAttribute(season)
//     // const season = el.dataset.season;
//     portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`)
// };

// function changeImage(event) {
//     if (event.target.classList.contains('portfolio__btn')) {
//         portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`)
//         // здесь код функции, меняющей src изображений
//     }
// }