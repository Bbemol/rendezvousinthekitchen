document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active')
    document.querySelector('.menu').classList.toggle('is-active')
  })
});