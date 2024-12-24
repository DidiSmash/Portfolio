const actuality = [
  {
    name: "Rabbit R1",
    description: "Le Rabbit r1 est un assistant personnel basé sur GPT-3.5 et fonctionnant sous Android, développé par la startup technologique Rabbit Inc et conçu par Teenage Engineering.",
    icon: new URL('assets/icons/rabbitR1.png', import.meta.url).href,
    date: "fin mars 2024",
    link: "https://www.rabbit.tech/rabbit-r1?utm_source=google&utm_medium=search&utm_campaign=Global_brand_feature_0626&gad_source=1&gclid=EAIaIQobChMIzLTR2_iSiAMVt1BBAh1ZSCAREAAYASAAEgLzuvD_BwE",
  },
  {
    name: "Next.js 14",
    description: "Lancement en septembre 2023 avec TurboPack.",
    icon: new URL('assets/png/fish.png', import.meta.url).href,
    date: "IDK",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "Vue 3.4",
    description: "Nouvelle version avec reactivity améliorée.",
    icon: new URL('assets/png/fish.png', import.meta.url).href,
    date: "IDK",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "GitHub Copilot X",
    description: "Fonctionnalités IA avancées pour devs.",
    icon: new URL('assets/png/fish.png', import.meta.url).href,
    date: "IDK",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
]

const workflow = [
  { title: "Étape 1 : Identifier", description: "Identifier les sources pertinentes." },
  { title: "Étape 2 : Utiliser", description: "Utiliser des outils comme Feedly." },
  { title: "Étape 3 : Trier", description: "Classer les informations utiles." },
  { title: "Étape 4 : Partager", description: "Partager via articles ou projets." },
];

// min 4
// max 10

export default {
  actuality,
  workflow,
}
