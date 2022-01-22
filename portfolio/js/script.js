console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\nВ коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n<header>, <main>, <footer> +2\n\nшесть элементов <section> (по количеству секций) +2\nтолько один заголовок <h1> +2\nпять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\nодин элемент <nav> (панель навигации) +2\n\nдва списка ul > li > a (панель навигации, ссылки на соцсети) +2\nдесять кнопок <button> +2\nдва инпута: <input type="email"> и <input type="tel"> +2\nодин элемент <textarea> +2\nтри атрибута placeholder +2\n3. Вёрстка соответствует макету +48\nблок <header> +6\nсекция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +6\nсекция price +6\nсекция contacts +6\nблок <footer> +6\n4. Требования к css + 12\nдля построения сетки используются флексы или гриды +2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\nиконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\nизображения добавлены в формате .jpg +2\nесть favicon +2\n5. Интерактивность, реализуемая через css +20\nплавная прокрутка по якорям +5\nссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5');
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