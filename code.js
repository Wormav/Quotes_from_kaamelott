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

let dernier = 0;
let nombreAleatoire = 0;

//fonction pour générer entier aléatoire

function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// evénement du click du btn

bnt.addEventListener("click", () => {
  do {
      nombreAleatoire = genererNombreEntier(citationsTable.length);
  } while (nombreAleatoire == dernier);

  citation.textContent = citationsTable[nombreAleatoire][0];
  auteur.textContent = citationsTable [nombreAleatoire] [1];
  dernier = nombreAleatoire;
});
