const hambarger = document.querySelector(`.hamburgerMenu`);
const link = document.querySelector(`.link`);
const link_li = document.querySelector(`.link li`);

hambarger.addEventListener(`click`, () => {
    link.classList.toggle(`open`);
})

