const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const changeColorCardButton = document.querySelector('#change-color-first-card-button');
const changeColorCardsButton = document.querySelector('#change-color-all-cards-button');
const openGoogleButton = document.querySelector('#open-Google-button')
const outputTitleConsol = document.querySelector('.title');
const toggleButton = document.querySelector('#toggle-color-button')

const urlGoogle = 'https://google.com';
const lavenderPurpleHash = '#D4C9E8';
const mintGreenHash = '#C2DECB';

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('color-toggle-button--active')
})

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = lavenderPurpleHash
})

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = mintGreenHash)
})

outputTitleConsol.addEventListener('mouseover', () => {
  console.log(outputTitleConsol.textContent)
})

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open(urlGoogle)
  }
}