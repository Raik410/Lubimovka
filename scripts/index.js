let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;

const container = document.querySelector('.slider-reviews__container')
const track = document.querySelector('.slider-reviews__track')
const items = document.querySelectorAll('.slider-reviews__item')
const btnNext = document.querySelector('.slider-reviews__btn-next')
const btnBack = document.querySelector('.slider-reviews__btn-back')
const itemsCount = document.querySelectorAll('.slider-reviews__item').length;
const itemWidth = container.clientWidth / slidesToShow;
console.log(itemWidth)
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition()
  checkButtons();
})

btnBack.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition()
  checkButtons();
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const checkButtons = () => {
  btnBack.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkButtons();
