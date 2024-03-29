document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active')
    document.querySelector('.menu').classList.toggle('is-active')
  })
  const ingredientsElement = document.querySelector('.js-ingredients-tab')
  const preparationElement = document.querySelector('.js-preparation-tab')
  if (ingredientsElement) {
    ingredientsElement.addEventListener('click', function() {
      preparationElement.classList.remove('is-active')
      this.classList.add('is-active')
      document.querySelector('.js-preparation').classList.remove('is-active')
      document.querySelector('.js-ingredients').classList.add('is-active')
    })
  }
  if (preparationElement) {
    preparationElement.addEventListener('click', function() {
      ingredientsElement.classList.remove('is-active')
      preparationElement.classList.add('is-active')
      document.querySelector('.js-preparation').classList.add('is-active')
      document.querySelector('.js-ingredients').classList.remove('is-active')
    })
  }
});