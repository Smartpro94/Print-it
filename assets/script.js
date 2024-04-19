const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];
const dots = document.querySelector('.dots');
let listFleche = document.querySelectorAll('.arrow');
let index = 0;

const displayDots = () => {
  dots.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    dots.appendChild(dot);

    if (i == index) {
      dot.classList.add('dot_selected');
    }
  }
};

displayDots();

const tabDots = document.querySelectorAll('.dots .dot');
const img = document.querySelector('.banner-img');
const p = document.querySelector('#banner p');

const handleRightClick = () => {
  if (tabDots.length > 0) {
    tabDots[index].classList.remove('dot_selected'); // Retire la class du premier bouton
    index++;
    if (index >= slides.length) {
      index = 0; // click a l'extreme droite, il revient a 0
    }
    tabDots[index].classList.add('dot_selected');
    img.src = './assets/images/slideshow/' + slides[index].image;
    p.innerHTML = slides[index].tagLine;
  }
};

const arrowRight = document.querySelector(".arrow_right")


arrowRight.addEventListener("click", handleRightClick)

const handleLeftClick = () => {
  if (tabDots.length > 0) {
    tabDots[index].classList.remove('dot_selected'); // Retire la class du premier bouton
    index--;
    if (index < 0) {
      index = slides.length-1; // click a l'extreme gauche, il va a 4
    }
    tabDots[index].classList.add('dot_selected');
    img.src = './assets/images/slideshow/' + slides[index].image;
    p.innerHTML = slides[index].tagLine;
  }
};
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", handleLeftClick)

