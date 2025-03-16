const actuality = [
  {
    name: "Rabbit R1",
    description: "Le Rabbit r1 est un assistant personnel basé sur GPT-3.5 et fonctionnant sous Android, développé par la startup technologique Rabbit Inc et conçu par Teenage Engineering.",
    icon: new URL('assets/icons/rabbitR1.png', import.meta.url).href,
    date: "fin mars 2024",
    link: "https://www.rabbit.tech/rabbit-r1?utm_source=google&utm_medium=search&utm_campaign=Global_brand_feature_0626&gad_source=1&gclid=EAIaIQobChMIzLTR2_iSiAMVt1BBAh1ZSCAREAAYASAAEgLzuvD_BwE",
  },
  {
    name: "DeepSeek R1",
    description: "DeepSeek-R1 est un modèle de langage développé par la start-up chinoise DeepSeek. Il se distingue par ses performances élevées et son coût de développement réduit,",
    icon: new URL('assets/icons/deepseek.jpg', import.meta.url).href,
    date: "20 janvier 2025.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
]

const workflow = [
  {
    title: "Étape 1 : Identifier",
    description: "Identifier les informations interessantes",
    icons: [
      new URL('assets/icons/dailydev.png', import.meta.url).href,
      new URL('assets/icons/youtube.png', import.meta.url).href,
    ],
  },
  {
    title: "Étape 2 : Organiser",
    description: "Organiser les informations afin de s'en servir plus tard",
    icons: [
      new URL('assets/icons/notion.png', import.meta.url).href,
    ],
  },
  {
    title: "Étape 3 : Utiliser",
    description: "Utiliser les informations sur des petits projets perso.",
    icons: [
    ],
  },
];

export default {
  actuality,
  workflow,
}
