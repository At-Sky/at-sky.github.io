const buyButton = document.querySelector('.cart__buy-button')
const overlay = document.querySelector('.overlay')

buyButton.addEventListener('click', () => overlay.classList.add('active'))

overlay.addEventListener('click', event => {if (event.target == overlay) overlay.classList.remove('active')})