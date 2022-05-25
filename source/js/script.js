const navButtons = document.querySelectorAll('.nav-menu__button');

navButtons[0].onclick = function () {
    document.documentElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

navButtons[1].onclick = function () {
    const priceList = document.querySelector('.price-list');
    priceList.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

navButtons[2].onclick = function () {
    const contacts = document.querySelector('.address');
    contacts.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

navButtons[3].onclick = function () {
    const reviews = document.querySelector('.reviews');
    reviews.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

const revItems = document.querySelectorAll('.review__item');
