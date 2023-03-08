if (this.window.innerWidth < 767) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        init: true
    })
    const swiperTech = new Swiper('.swiper-tech', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination-tech',
            clickable: true
        },
        init: true
    })
    const swiperServices = new Swiper('.swiper-services', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination-services',
            clickable: true
        },
        init: true
    })
}

const btnModalChat = document.querySelectorAll('.modal-chat');
const btnModalCall = document.querySelectorAll('.modal-call');
const btnIconBurger = document.querySelector('.icon-burger');
const btnIconBurgerClose = document.querySelectorAll('.icon-burger-close');

const modalOverlayMenu = document.querySelector('.modal-overlay-menu')
const modalOverlayChat = document.querySelector('.modal-overlay-chat')
const modalOverlayCall = document.querySelector('.modal-overlay-call')

const modalOverlay = document.querySelectorAll('.modal-overlay');
const sidebar = document.querySelector('.sidebar-modal')

const brandWrapper = document.querySelector('.swiper-wrapper-repair');
const techWrapper = document.querySelector('.swiper-wrapper-tech')
const textWrapper = document.querySelector('.main__description-text-part__wrapper')
const buttonShowAllText = document.querySelector('.main__description-button')
const buttonShowAllBrand = document.querySelector('.repair-button-brand')
const buttonShowAllTech = document.querySelector('.repair-button-tech')

const buttonTextBrand = document.querySelector('.main-repair__button-text')
const buttonTextTech = document.querySelector('.text-tech')
const buttonTextDescription = document.querySelector('.text-description')

const swiperSlide = document.querySelectorAll('.swiper-slide');

if (window.innerWidth > 767) {
    swiperSlide.forEach(element => {
        element.style.width = 'fit-content';
    });
}

buttonShowAllText.addEventListener('click', function () {
    if (textWrapper.classList.contains('text-wrapper-overflow')) {
        textWrapper.classList.remove('text-wrapper-overflow');
        buttonTextDescription.textContent = 'Читать далее'
    } else {
        textWrapper.classList.add('text-wrapper-overflow');
        buttonTextDescription.textContent = 'Скрыть'
    }
})


buttonShowAllBrand.addEventListener('click', function () {
    if (brandWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        brandWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonTextBrand.textContent = 'Скрыть'
    } else {
        brandWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonTextBrand.textContent = 'Показать всё'
    }
})

buttonShowAllTech.addEventListener('click', function () {
    if (techWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        techWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonTextTech.textContent = 'Скрыть'
    } else {
        techWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonTextTech.textContent = 'Показать всё'
    }
})

btnIconBurger.addEventListener('click', function () {
    modalOverlayMenu.style.display = 'block'
})

btnIconBurgerClose.forEach(el => {
    el.addEventListener('click', function () {
        if (modalOverlayCall.style.display = 'block') {
            modalOverlayCall.style.display = 'none'
        }
        if (modalOverlayChat.style.display = 'block') {
            modalOverlayChat.style.display = 'none'
        }
        if (modalOverlayMenu.style.display = 'block' && window.innerWidth < 1120) {
            modalOverlayMenu.style.display = 'none';
        }
    })
});

btnModalCall.forEach(el => {
    el.addEventListener('click', function () {
        modalOverlayCall.style.display = 'block'
    })
});

btnModalChat.forEach(el => {
    el.addEventListener('click', function () {
        modalOverlayChat.style.display = 'block'
    })
});


modalOverlay.forEach(element => {
    element.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('modal-overlay')) {
            modalOverlayCall.style.display = 'none';
            modalOverlayChat.style.display = 'none';
            if (window.innerWidth < 1119) {
                modalOverlayMenu.style.display = 'none';
            }
        }
    })
});