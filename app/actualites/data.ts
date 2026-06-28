export const articles = [
  {
    slug: 'ouverture-appart-hotel-solenzara',
    category: 'Nouveauté',
    date: '27 juin 2026',
    title: "L'appart-hôtel Le Gabriel ouvre ses portes à Solenzara",
    excerpt:
      "Découvrez un nouveau concept d'hébergement entre l'intimité d'un appartement et les services d'un hôtel au cœur de la Corse.",
    image: '/photos/solenzara.jpg',
    content: [
      "C'est avec une grande fierté que nous ouvrons les portes du Gabriel, un appart-hôtel pensé comme une maison d'hôtes contemporaine au cœur de Solenzara. Situé entre les plages de sable fin du Sud-Est corse et les montagnes de l'Alta Rocca, notre établissement propose un nouveau concept d'hébergement : l'intimité et l'espace d'un appartement, associés aux services attendus d'un hôtel.",
      "Le Gabriel compte 12 studios et 11 appartements d'une chambre, pouvant accueillir de 4 à 5 personnes. Chaque logement dispose d'une cuisine équipée, d'une connexion WiFi fibre, de la climatisation réversible, d'une terrasse ou d'un balcon, et d'un linge de maison complet. La décoration, sobre et élégante, puise dans les tonalités de la terre corse pour offrir un cadre chaleureux et apaisant.",
      "Au-delà des logements, nous avons imaginé des espaces communs conviviaux : une piscine chauffée entourée d'un jardin méditerranéen, un parking privé et sécurisé, ainsi qu'une salle de sport moderne au rez-de-chaussée, ouverte aux résidents et au public. Notre équipe reste disponible pour organiser votre arrivée, vous conseiller sur la région et faciliter chaque étape de votre séjour.",
      "Solenzara se révèle comme un point de départ idéal pour explorer la Corse. Plages paradisiaques, piscines naturelles de la rivière, Aiguilles de Bavella et villages de l'Alta Rocca sont accessibles en quelques minutes. Que vous veniez pour le farniente, la randonnée ou la découverte gastronomique, Le Gabriel vous offre un pied-à-terre raffiné au rythme de l'île.",
    ],
  },
  {
    slug: 'guide-plages-solenzara',
    category: 'Découverte',
    date: '15 juin 2026',
    title: 'Les plus belles plages autour de Solenzara',
    excerpt:
      "De Canella à Santa Giulia, embarquez pour un tour des criques de sable fin accessibles depuis votre appart-hôtel.",
    image: '/photos/plage-canella.jpg',
    content: [
      "Solenzara est une perle méconnue du littoral corse, idéale pour les amateurs de plages sauvages et de criques préservées. À seulement quelques minutes en voiture ou en vélo de l'appart-hôtel Le Gabriel, vous découvrirez des étendues de sable fin bordées d'eaux cristallines.",
      "La plage de Canella est sans doute la plus proche et aussi l'une des plus charmantes. Son sable doré, ombragé par les pins parasols, offre un cadre parfait pour les familles. Les eaux peu profondes et chaudes permettent de se baigner en toute sécurité, tandis que les fonds rocheux sur le côté invitent au snorkeling.",
      "Plus au sud, la plage de Favone surprend par son ambiance à la fois animée et naturelle. Les petits restaurants de plage y servent des grillades de poissons frais et des spécialités corses avec les pieds dans le sable. Pour les randonneurs, le sentier du littoral qui la borde offre des panoramas spectaculaires sur les aiguilles de Bavella.",
      "Santa Giulia, plus loin vers Porto-Vecchio, mérite également une escapade. Sa lagune aux nuances de turquoise est l'une des plus photographiées de Corse. Enfin, n'oubliez pas les piscines naturelles de la rivière de Solenzara : baignades rafraîchissantes au cœur des maquis, à quelques pas du village. L'été, elles deviennent le rendez-vous préféré des locaux et de nos résidents.",
    ],
  },
  {
    slug: 'nouvelle-salle-sport',
    category: 'Bien-être',
    date: '10 juin 2026',
    title: 'Une salle de sport moderne au rez-de-chaussée',
    excerpt:
      "Cardio, musculation et cours collectifs : la nouvelle salle de sport Le Gabriel accueille résidents et visiteurs.",
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    content: [
      "Le Gabriel ne se contente pas d'offrir un hébergement de qualité : nous avons également pensé à votre bien-être physique. Notre salle de sport, située au rez-de-chaussée de l'appart-hôtel, est ouverte à la fois aux résidents et au public. Accessible en journée et en soirée, elle dispose d'équipements modernes et régulièrement entretenus.",
      "La zone cardio propose tapis de course, vélos elliptiques et rameurs, parfaits pour éliminer le stress après une journée de randonnée ou de plage. La zone musculation libre, elle, est équipée d'haltères, de bancs et de machines guidées pour travailler chaque groupe musculaire en toute sécurité.",
      "Nous organisons également des cours collectifs encadrés par des coachs certifiés : yoga en plein air sur la terrasse le matin, circuit training le mardi et jeudi, et après-midi stretching le samedi. Les résidents bénéficient d'un accès gratuit à la salle et d'un tarif préférentiel sur les cours.",
      "Les visiteurs extérieurs peuvent également profiter de l'espace avec un pass journalier à 15 € ou un abonnement mensuel à 39 €. Parking et vestiaires sont à disposition. Que vous soyez en vacances ou habitant les environs, la salle de sport du Gabriel vous accueille dans un cadre élégant et motivant, avec vue sur le jardin méditerranéen.",
    ],
  },
]

export type Article = typeof articles[number]
