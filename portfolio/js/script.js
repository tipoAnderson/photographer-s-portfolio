//import i18Obj from './translate';

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
//====================================================================================

const portfolioImages = document.querySelectorAll('.portfolio__item')
const portfolioBtns1 = document.querySelectorAll('.portfolio__btn')[0];
portfolioBtns1.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
});
const portfolioBtns2 = document.querySelectorAll('.portfolio__btn')[1];
portfolioBtns2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
});
const portfolioBtns3 = document.querySelectorAll('.portfolio__btn')[2];
portfolioBtns3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.add('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.remove('btn_act');
});
const portfolioBtns4 = document.querySelectorAll('.portfolio__btn')[3];
portfolioBtns4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`)
    document.querySelectorAll('.portfolio__btn')[0].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[1].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[2].classList.remove('btn_act');
    document.querySelectorAll('.portfolio__btn')[3].classList.add('btn_act');
});

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
//===================================================================================

// const english = document.querySelector('switch-lng__en')
// english.addEventListener('click', function () {
//     getTranslate('switch-lng__en')
// })
// english.addEventListener('click', buttonLang)
// const russian = document.querySelector('switch-lng__ru')
// russian.addEventListener('click', function () {
//     getTranslate('switch-lng__ru')
// })
// russian.addEventListener('click', buttonLang)
// function getTranslate(lang) {
//     const elementWithDataAttr = document.querySelectorAll('[data-i18n]');
//     elementWithDataAttr.forEach((item, i) => {
//         if (lang === 'switch-lng__ru') {
//             item.textContent = i18Obj['switch-lng__ru'][`${item.dataset.i18n}`];
//         } else {
//             item.textContent = i18Obj['switch-lng__en'][`${item.dataset.i18n}`]
//         }
//     });
// }
// const english = document.getElementById('en')
// english.addEventListener('click', function () {
//getTranslate('en')
// })
// english.addEventListener('click', buttonLang)
// const russian = document.getElementById('ru')
// russian.addEventListener('click', function () {
//     //getTranslate('ru')
// })
// russian.addEventListener('click', buttonLang)
// function getTranslate(lang) {
//     const elementWithDataAttr = document.querySelectorAll('[data-i18n]');
//     elementWithDataAttr.forEach((item, i) => {
//         if (lang === 'ru') {
//             item.textContent = i18Obj['ru'][`${item.dataset.i18n}`];
//         } else {
//             item.textContent = i18Obj['en'][`${item.dataset.i18n}`]
//         }
//     });
// }
// function buttonLang(event) {
//     if (event.target.id === 'ru') {
//         russian.classList.add('switch-lng__l_act')
//         english.classList.remove('switch-lng__l_act')
//         setToLStheam('ru')
//     } else {
//         english.classList.add('switch-lng__l_act')
//         russian.classList.remove('switch-lng__l_act')
//         setToLStheam('en')
//     };
// }
//=================================================================================
// изменение темы
// function setToLStheam(theam) {
//     localStorage.setItem('theam', theam)
// }
// function setToLScolor(bgcolor) {
//     localStorage.setItem('bgcolor', bgcolor)
// }
// function getTheam() {
//     let a = localStorage.getItem('theam')
//     let b = localStorage.getItem('bgcolor')
//     getTranslate(a)
//     if (a === 'ru') {
//         russian.classList.add('switch-lng__ru_act')
//         english.classList.remove('switch-lng__en_act')

//     } else {
//         english.classList.add('switch-lng__en_act')
//         russian.classList.remove('switch-lng__ru_act')
//     }
//     if (b === 'sun') {
//         moon.src = "assets/sun.png";
//         body.classList.add('light-theam')

//     } else {
//         moon.src = "assets/moon.png";
//         body.classList.remove('light-theam')
//     }
// }
// getTheam()



//const videoProgress = document.querySelector('.video__range_video');
//const volumeProgress = document.querySelector('.video__range_volume');
const video = document.querySelector('video');
const play = document.querySelector('.video__play');
const playBtn = document.querySelector('.video__btn');
const vidProgress = document.querySelector('.video__range_video');
const time = document.querySelector('.video__time');
const volProgress = document.querySelector('.video__range_volume');
const volumeBtn = document.querySelector('.video__mute')

console.log(volProgress.volue)

function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        play.src = 'assets/svg/video/pause.svg'
        playBtn.style.display = 'none'
    } else {
        video.pause()
        play.src = 'assets/svg/video/play.svg'
        playBtn.style.display = 'block'
    }
};

function timeProgress() {
    vidProgress.value = (video.currentTime / video.duration) * 100
    let minutes = Math.floor(video.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }
    time.innerHTML = `${minutes}:${seconds}`
}

function videoProgress() {
    video.currentTime = (vidProgress.value * video.duration) / 100;
    const percent = (video.currentTime / video.duration) * 100;
    vidProgress.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${percent}%, #b3b3b3 ${percent}%)`;
    if (video.currentTime == video.duration) {
        video.currentTime = 0
    }
}

function volumeProgress() {
    let v = this.value;
    video.volume = v / 100;
    volProgress.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${volProgress.value}%, #b3b3b3 ${volProgress.value}%)`;
    console.log(v)
}

function volumeToggle() {
    if (volumeBtn.classList.contains('video__mute_mute'))
        unmute();
    else {
        mute();
    }
}

function mute() {
    volumeBtn.classList.add('video__mute_mute');
    video.muted = true;
}

function unmute() {
    volumeBtn.classList.remove('video__mute_mute');
    video.muted = false;
}


play.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', timeProgress);
vidProgress.addEventListener('change', videoProgress)
volProgress.addEventListener('change', volumeProgress)
volProgress.addEventListener('mousemove', volumeProgress)
volumeBtn.addEventListener('click', volumeToggle)

// События
// timeupdate - cрабатывает, когда текущая позиция воспроизведения изменилась
// change - происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано
// volumechange -	Срабатывает при изменении громкости

// Методы




// let video = new Video();

// function setProgress() {
//     const duration = video.duration;
//     currentTime = duration * audioProgress.value / 100;
//     video.currentTime = currentTime;
//     videoProgress.style.background = `-webkit-linear-gradient(to right, #0bdbac 0%, #0bdbac ${audioProgress.value}%, #ffffff ${audioProgress.value}%)`;
//     displayReadableTime(currentTime);
// }