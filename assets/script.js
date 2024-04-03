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
let listFleche = document.querySelectorAll('.arrow');

for (i = 0; i < listFleche.length; i++) {
  let flecheActuel = listFleche[i];
  console.log(flecheActuel);

  flecheActuel.addEventListener('click', (event) => {
    let fleche = event.target;
    if (fleche.classList.contains('arrow_left')) {
      console.log('boutton left');
    } else if (fleche.classList.contains('arrow_right')) {
      console.log('boutton right');
    }
  });
}
console.log("Aujourd'hui");
