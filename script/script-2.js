// Hamburger Menu JS function

const hamburger = document.querySelector('.open_btn')
const hamburger1Close = document.querySelector('.close_btn')

hamburger.addEventListener('click', () => {
  document.querySelector('.mob-menu').style.display = 'block'
})

hamburger1Close.addEventListener('click', () => {
  document.querySelector('.mob-menu').style.display = 'none'
})
