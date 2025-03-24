const foundCompany = (name) => company.find((c) => c.name === name);
const foundLanguage = (name) => languages.find((l) => l.name === name);

const languages = [
  {
    id: 1,
    name: "JavaScript",
    color: "#fff372",
    icon: "javascript/javascript-original",
  },
  {
    id: 2,
    name: "HTML",
    color: "#f88b50",
    icon: "html5/html5-original",
  },
  {
    id: 3,
    name: "CSS",
    color: "#4695cd",
    icon: "css3/css3-original",
  },
  {
    id: 4,
    name: "PHP",
    color: "#8892be",
    icon: "php/php-original",
  },
  {
    id: 5,
    name: "C#",
    color: "#52b63b",
    icon: "csharp/csharp-original",
  },
  {
    id: 6,
    name: "Python",
    color: "#ffc772",
    icon: "python/python-original",
  },
  {
    id: 7,
    name: "Kotlin",
    color: "#8072ff",
    icon: "kotlin/kotlin-original",
  },
  {
    id: 8,
    name: "VueJs",
    color: "#72ff77",
    icon: "vuejs/vuejs-original",
  },
  {
    id: 9,
    name: "Tailwind",
    color: "#72ffff",
    icon: "tailwindcss/tailwindcss-original",
  },
  {
    id: 10,
    name: "DiscordJs",
    color: "#9a72ff",
    icon: "discordjs/discordjs-original",
  },
  {
    id: 11,
    name: "Symphony",
    color: "#ffffff",
    icon: "symfony/symfony-original",
  },
  {
    id: 12,
    name: "Jetpack Compose",
    color: "#9aff72",
    icon: "jetpackcompose/jetpackcompose-original",
  },
  {
    id: 13,
    name: "Godot",
    color: "#729aff",
    icon: "godot/godot-original",
  },
  {
    id: 14,
    name: "Quasar",
    color: "#72efff",
    icon: "quasar/quasar-original",
  },
];

const company = [
  {
    id: 1,
    name: "COM&Company",
    description:
      "L’entreprise COM & Company, est une entreprise de communication spécialisée dans le webmarketing, le <span class='tw-text-primary'>développement de site web</span>, la création de supports publicitaires et la maintenance informatique. l’entreprise accompagne la croissance de chaque entité et <span class='tw-text-primary'>développe des outils adaptés à chaque métier du groupe</span>. COM & Company propose des solution complètes, flexible et sur-mesure pour chaque société du groupe tout en les faisant évoluer.",
    more: "présente partie dev info et comment elle fonctionne (plusieur ilots avec chacun des projets differents) l'equipe ou j'était " +
      "(on était 7 dont 1 responssable project (mon tuteur), nombreux projet dont tethys et espace client) les language utiliser " +
      "(principalement vue, symphony et tw, mais aussi quasar pour espace cli. et expliquer rapidement) la gestion de projet: " +
      "crée nouvelle branche, fait ajout en local, tests, si ok test avec jenkins (simule la version en ligne du projet pour voir " +
      "si aucune erreur) crée MR et envoie la mr avec description au groupe pour qu'ils verif avant de push ",
    logo: new URL('assets/icons/comCompanyLogo.png', import.meta.url).href,
    logoBg: "#ffffff",
    color: "#f7a424",
    location: "94 quai Charles de Gaulle 69 006 Lyon",
    team: "- 1 Responsable d'équipes \n- 1 Project Owner \n- 5 développeurs \n- 1 alternant",
    tools: [
      new URL('assets/icons/monday.png', import.meta.url).href,
      new URL('assets/icons/docker.png', import.meta.url).href,
      new URL('assets/icons/phpstorm.png', import.meta.url).href,
      new URL('assets/icons/gitlab.png', import.meta.url).href,
      new URL('assets/icons/jenkins.png', import.meta.url).href,
    ],
    locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3700720332754!2d4.848135176716111!3d45.783813212056224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb36af14bc4f%3A0x81de0aa67885c134!2sCOM%20%26%20Company!5e0!3m2!1sfr!2sfr!4v1727800406049!5m2!1sfr!2sfr",
    createdAt: "12/14/1298",
  },
];

const projects = [
  {
    id: 1,
    title: "The Oni",
    description:
      "Bot discord multifonctionnel, permettant de gérer des serveurs discords, de jouer à des jeux et faire des actions de modération.",
    more: "Blablabla",
    logo: new URL('assets/projects/AkuBotIcon.png', import.meta.url).href,
    logoBg: "#343950",
    company: null,
    frameworks: [foundLanguage("DiscordJs")],
    date: "2024",
    images: [
      new URL('assets/projects/images/OniBot4.png', import.meta.url).href,
      new URL('assets/projects/images/OniBot3.png', import.meta.url).href,
      new URL('assets/projects/images/OniBot2.png', import.meta.url).href,
      new URL('assets/projects/images/OniBot1.png', import.meta.url).href,
    ],
  },
  {
    id: 2,
    title: "Tethys - upgrade cron",
    description:
      "La page des crons était déjà créée sur tethys, mon travail était donc de rajouter 2 éléments à cette page:\n\n1. La durée de la dernière exécution à la base de donnée des crons permettant de savoir directement combien de temps a pris le dernier cron et vérifié qu'il n'y ait pas eu d'erreurs.\n\n2. l'ajout d'une nouvelle action “historique” qui répertorie tout l’historique d’un cron avec les dates et durées d'exécution ainsi que les erreurs s'il y en a eu.",
    more: "Blablabla",
    logo: new URL('assets/projects/TethysIcon.png', import.meta.url).href,
    logoBg: "#153155",
    company: foundCompany("COM&Company"),
    frameworks: [foundLanguage("VueJs"), foundLanguage("Symphony"), foundLanguage("Tailwind")],
    date: "2024",
    images: [
      new URL('assets/projects/images/tethysCron1.png', import.meta.url).href,
      new URL('assets/projects/images/tethysCron2.png', import.meta.url).href,
    ],
  },
  {
    id: 3,
    title: "Espace Client - Pratique/page interne",
    description:
      "La page pratique de l’espace client est une page qui recentre toutes les informations dont un utilisateur pourrait avoir besoin, elle permet de naviguer entre les pages d’aides et d’en chercher une grâce à son titre, son contenu ou sa catégorie.",
    more: "Blablabla",
    logo: new URL('assets/projects/ValorityIcon.png', import.meta.url).href,
    logoBg: "#d5a879",
    company: foundCompany("COM&Company"),
    frameworks: [
      foundLanguage("VueJs"),
      foundLanguage("Symphony"),
      foundLanguage("Quasar"),
      foundLanguage("Tailwind"),
    ],
    date: "2024",
    images: [
      new URL('assets/projects/images/espaceClient3.jpg', import.meta.url).href,
      new URL('assets/projects/images/espaceClient2.jpg', import.meta.url).href,
      new URL('assets/projects/images/espaceClient1.jpg', import.meta.url).href,
    ],
  },
  {
    id: 4,
    title: "EcoElec",
    description:
      "Site web de vente d'objets informatique reconditionné et chef-d’œuvre de mon bac pro SN.",
    more: "Blablabla",
    logo: new URL('assets/projects/EcoElecIcon.png', import.meta.url).href,
    logoBg: "#72ff77",
    company: null,
    languages: [
      foundLanguage("JavaScript"),
      foundLanguage("HTML"),
      foundLanguage("CSS"),
    ],
    frameworks: null,
    date: "2024",
    images: [
      new URL('assets/projects/images/ecoElec1.png', import.meta.url).href,
      new URL('assets/projects/images/ecoElec2.png', import.meta.url).href,
      new URL('assets/projects/images/ecoElec3.png', import.meta.url).href,
      new URL('assets/projects/images/ecoElec4.png', import.meta.url).href,
    ],
  },
  {
    id: 5,
    title: "TD3D",
    description:
      "Tower défense 3D créant des map aléatoires à chaque niveau ou nouvelle partie.",
    more: "Blablabla",
    logo: new URL('assets/projects/TDGD-3DIcon.png', import.meta.url).href,
    logoBg: "#dc9571",
    company: null,
    languages: [foundLanguage("Godot")],
    frameworks: null,
    date: "2024",
    images: [
      new URL('assets/projects/images/TDGD3D1.png', import.meta.url).href,
      new URL('assets/projects/images/TDGD3D2.png', import.meta.url).href,
    ],
  },
  {
    id: 6,
    title: "Fake ENT",
    description:
      "Fausse application mobile du site de l'ENT, dans le but de faire de la prévention sur les dangers de données ses informations personnelles sans vérifier l'auteur.",
    more: "Blablabla",
    logo: new URL('assets/projects/EntIcon.png', import.meta.url).href,
    logoBg: "#ffffff",
    company: null,
    languages: [foundLanguage("Kotlin")],
    frameworks: [foundLanguage("Jetpack Compose")],
    date: "2024",
    images: [
      new URL('assets/projects/images/fakeEnt4.png', import.meta.url).href,
      new URL('assets/projects/images/fakeEnt3.png', import.meta.url).href,
      new URL('assets/projects/images/fakeEnt2.png', import.meta.url).href,
      new URL('assets/projects/images/fakeEnt1.png', import.meta.url).href,
    ],
  },
  {
    id: 7,
    title: "Tethys - chiffres clés",
    description:
      "La page chiffres clés permet de Rechercher, Créer et Éditer des chiffres clés et leurs valeurs. Permettant par la suite aux autres applications de les récupérer grâce à une API.",
    more: "Blablabla",
    logo: new URL('assets/projects/TethysIcon.png', import.meta.url).href,
    logoBg: "#153155",
    company: foundCompany("COM&Company"),
    frameworks: [foundLanguage("VueJs"), foundLanguage("Symphony"), foundLanguage("Tailwind")],
    date: "2024",
    images: [
      new URL('assets/projects/images/chiffresCles1.png', import.meta.url).href,
      new URL('assets/projects/images/chiffresCles2.png', import.meta.url).href,
    ],
  },
  {
    id: 8,
    title: "BO Espace Client - Informations avancées utilisateur",
    description:
      "Page avec les informations avancer d’un utilisateur pour centraliser " +
      "un maximum de donnée et trouver des solutions à ses problèmes plus facilement.",
    more: "Blablabla",
    logo: new URL('assets/projects/ValorityIcon.png', import.meta.url).href,
    logoBg: "#3d613c",
    company: foundCompany("COM&Company"),
    frameworks: [
      foundLanguage("VueJs"),
      foundLanguage("Symphony"),
      foundLanguage("Tailwind"),
    ],
    date: "2025",
    images: [
      new URL('assets/projects/images/boEspaceClient4.png', import.meta.url).href,
      new URL('assets/projects/images/boEspaceClient3.png', import.meta.url).href,
      new URL('assets/projects/images/boEspaceClient2.png', import.meta.url).href,
      new URL('assets/projects/images/boEspaceClient1.png', import.meta.url).href,
    ],
  },
  {
    id: 9,
    title: "E-Tromby - Bannières de signature",
    description:
      "La page bannières de signature permet au administrateur de gérer les bannières qu'on un ou plusieurs " +
      "utilisateur sur leurs signature, ensuite visible en bas de leurs mails. à partir de cette page nous pouvonts " +
      "créer des bannières personnalisable doté de date de début, de date de fin, d'affectation et même de " +
      "lien cliquable. Elles peuvent être modifiées à tout moment. et une section de filtre permet de " +
      "les retrouver rapidement.",
    more: "Blablabla",
    logo: new URL('assets/projects/ValorityIcon.png', import.meta.url).href,
    logoBg: "#785e41",
    company: foundCompany("COM&Company"),
    frameworks: [
      foundLanguage("VueJs"),
      foundLanguage("Symphony"),
      foundLanguage("Tailwind"),
    ],
    date: "2024",
    images: [
      new URL('assets/projects/images/trombyBanniere4.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere2.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere3.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere1.png', import.meta.url).href,
    ],
  },
  {
    id: 10,
    title: "Gourmetise",
    description:
      "L'application Gourmetise permet aux boulangers de participer à un concours face à d'autres " +
      "boulangeries de leurs région de partager leur passion pour la boulangerie et aux amateurs de" +
      "découvrir les meilleures boulangeries de la région.",
    more: "Blablabla",
    logo: new URL('assets/projects/GourmetiseIcon.png', import.meta.url).href,
    logoBg: "#bc4242",
    company: null,
    languages: [foundLanguage("Kotlin")],
    frameworks: [
      foundLanguage("VueJs"),
      foundLanguage("Symphony"),
      foundLanguage("Tailwind"),
      foundLanguage("Jetpack Compose")
    ],
    tools: [
      new URL('assets/icons/phpstorm.png', import.meta.url).href,
      new URL('assets/icons/androidStudio.png', import.meta.url).href,
      new URL('assets/icons/github.png', import.meta.url).href,
      new URL('assets/icons/trello.png', import.meta.url).href,
    ],
    date: "2025",
    images: [
      new URL('assets/projects/images/trombyBanniere4.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere2.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere3.png', import.meta.url).href,
      new URL('assets/projects/images/trombyBanniere1.png', import.meta.url).href,
    ],
  },
];

export default [
  {
    id: "projects",
    data: projects,
  },
  {
    id: "company",
    data: company,
  },
  {
    id: "languages",
    data: languages,
  },
];
