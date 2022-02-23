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
  [
    "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
    "Seigneur Perceval",
  ],
  [
    "Moi, je m’en fous, si on me force à y retourner, je retiens ma respiration jusqu’à ce qu’on arrête de me forcer à y retourner.",
    "Seigneur Yvain",
  ],
  [
    "Oh vous, toujours vous, mais allez chier dans une fiole, on verra après.",
    "Elias de Kelliwic’h",
  ],
  [
    "Allez, y'a plein de bruit, là ! Si ça se trouve c'est bourré d'oiseaux venimeux. Y'en a des rouges, des jaunes, des re-rouges et des pourpres ! Y bouffent que des noisettes et des escalopes de veau. Et quand ils vous donnent un coup de bec vous voyez une grande lumière et ça vous donne la diarrhée !",
    "Seigneur Perceval",
  ],
  [
    "La joie de vivre et le jambon, y'a pas trente-six recettes du bonheur !",
    "Seigneur Karadoc",
  ],
  [
    "Et va falloir vous y faire parce qu’à partir de maintenant, on va s’appeler Les Chevaliers de la Table Ronde  ! - Ben heureusement qu’on s’est pas fait construire un buffet à vaisselle !",
    "Le roi Arthur et le seigneur Léodagan",
  ],
  [
    "On va vous envoyer un mec que en fait on dirait qu'il marche normalement alors qu'il marche alternativement à cloche-pied sur chaque pied alors faites gaffe !",
    "Seigneur Karadoc",
  ],
  [
    "Ah ! À ce propos, je dois vous avouer que j'ai longtemps réflechi à savoir comment vous deviez m'appeler. [...] Éh oui ! Parce que vous êtes pas, à proprement parler, un de mes sujets. Vous êtes pas sous mes ordres non plus. Sire c'est quand même un peu ampoulé. Alors j'ai pensé à beaucoup de choses. Loth, Seigneur, Monsieur... Je me suis même demandé si vous deviez pas m'appeler vieille branche, mon p'tit pote ou canaillou.",
    "Le roi Loth",
  ],
  ["Faut pas respirer la compote, ça fait tousser.", "Kadoc"],
  [
    "Moi, j'ai toujours mené mes troupes de façon laborieuse et pénible, pourquoi ? Avant tout - faut pas s'le cacher - parce que ma femme est une grosse salope.",
    "Le roi Loth",
  ],
  [
    "Si les dieux avaient dû être de notre côté, ils nous auraient pas refilé des enfants comme vous.",
    "Dame Séli",
  ],
  ["Arthour ! On est fort... en pomme !", "Le roi burgonde"],
  [
    "Ça vieillit mal les héros... – Ouais, enfin les connards aussi, ça vieillit mal !",
    "César et Arthur",
  ],
  [
    "Alors c'est ça, la stratégie moderne? Réunir cinq trous-de-balle en cercle et s'balancer des fions?",
    "Goustan",
  ],
  [
    "Moi j’ai appris à lire, ben je souhaite ça à personne",
    "Seigneur Léodagan",
  ],
  ["Une fois j’ai pissé par la fenêtre !", "Guenièvre"],
  [
    "Des p'tits croutons tout vieux genre pour les lapins ? Ouais j'savais pas c'que c'était, dans le doute j'les ai bouffés.",
    "Seigneur Karadoc",
  ],
  [
    "Moi une fois, j’étais soûl comme cochon, je me suis tatoué « J’aime le raisin de table » sur la miche droite... Et ça y est toujours !",
    "Le maître d’armes",
  ],
  [
    "Ah, le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs.",
    "Le roi Arthur",
  ],
  [
    " Parce que votre existence est merdique, mon pauvre ami... Vous avez l’œil qui brille à chaque fois qu’un oiseau pète ! C’est triste à voir ! Ça fait des années que vous menez un train de vie de noix de St-Jacques, alors évidemment, un message... qui annonce la visite d’un imbécile, porteur de bonnes nouvelles, c’est déjà un p’tit festival pour vous ! J’suis sûr que vous vous êtes peigné pour l’occasion !",
    "Le roi Loth",
  ],
  [
    " Et à un moment... le sorcier s’est mis à nous menacer avec ses parties génitales.",
    "Seigneur Gauvain",
  ],
  [
    "La culture burgonde ? Je savais même pas qu’y en avait une… Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c’est encore moins répandu.",
    "L’interprète burgonde",
  ],
  [
    "J’ai rêvé qu’il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !",
    "Grüdü",
  ],
  [" Après demain, à partir d'aujourd'hui ?", "Seigneur Perceval"],
  [
    "Et qu'est-ce que vous voulez que j'y fasse à la paperasse, moi ? Vous me prenez pour un serre-livre ?",
    "Le roi Arthur",
  ],
  [
    "Non, je suis désolé, moi je peux pas faire une légende avec un fakir qui enroule sa bite autour d'un bâton. En plus je sais même pas comment ça se dit en latin. – Quoi ? « Bite » ?  – Non, « fakir.",
    "Père Blaise",
  ],
  ["Et deux jus de pomme qui piquent !", "Le tavernier"],
  ["La patience est un plat qui se mange sans sauce.", "Perceval de Galles"],
  [
    "Halte là, manants de bon conseils ! Rebroussez malice à l’instant où il vous en cuira. A l’étuvée.",
    "Urgan",
  ],
  [
    "La visite en Carmélide, c’est un peu comme les plans de fraises. Plus c’est espacé, mieux c’est !",
    "Fraganan",
  ],
  [
    "Bon reconnaissons que la perspective d’etre suspendu par les noyaux constitue un bel encouragement à se bouger le cul.",
    "Fraganan",
  ],
  [" Quand il dit pute, il veut dire ça dans le bon sens du terme.", "Alzagar"],
];

//variables

let citation = document.querySelector(".citation");
let auteur = document.querySelector(".auteur");
let bnt = document.querySelector(".nouveau");

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
  auteur.textContent = citationsTable[nombreAleatoire][1];
  dernier = nombreAleatoire;
});
