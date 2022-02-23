//fontion génére nombre aléatoire compris entre ....

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeOnClick(nombre){
    nombre = nombreAleatoire ;
    citation.textContent = citationsTable[nombre] [0]
    auteur.textContent = citationsTable[nombre] [1]
};



// tableau de citations

let citationsTable = [
  [
    "Moi, à une époque, je voulais faire vœu de pauvreté (...) Mais avec le pognon que j'rentrais, j'arrivais pas à concilier les deux.",
    "Seigneur Galessin",
  ],

  [
    "Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
    "Le rois Arthur",
  ],

  [
    "C'que j'dis, tout l'monde s'en tamponne ! Je gueule je gueule, j'pourrai gueuler dans l'cul d'un poney qu'ce s'rait pareil !",
    "Guethenoc",
  ],
];

//variables

let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");
let bnt = document.querySelector("#nouveau");

let dernier = citationsTable[0] [0];
let nombreAleatoire = entierAleatoire(0, 2);


bnt.addEventListener('click', changeOnClick);

