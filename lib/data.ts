export type Housing = {
  id: string
  type: 'studio' | 'appartement'
  name: string
  guests: number
  sizeSqm?: number
  beds: string
  description: string
  features: string[]
  image: string
}

export type HousingCategory = {
  type: 'studio' | 'appartement'
  title: string
  count: number
  guests: number
  sizeFrom: number
  beds: string
  description: string
  features: string[]
  image: string
}

export const housingCategories: HousingCategory[] = [
  {
    type: 'studio',
    title: 'Studios',
    count: 14,
    guests: 4,
    sizeFrom: 28,
    beds: 'Lit double 180×200 + canapé-lit',
    description:
      'Studios élégants et contemporains avec terrasse privative vue côté mer ou côté village. Cuisine entièrement équipée, literie haut de gamme et double vitrage pour un confort optimal.',
    features: [
      'Cuisine entièrement équipée',
      'Climatisation',
      'Grande terrasse privative',
      'Double vitrage',
      'Literie haut de gamme 180×200',
      'Wi-Fi haut débit gratuit',
      'Télévision',
    ],
    image: '/photos/appart-studio.jpg',
  },
  {
    type: 'appartement',
    title: 'Appartements 1 chambre',
    count: 15,
    guests: 5,
    sizeFrom: 45,
    beds: 'Chambre lit double 180×200 + salon canapé-lit',
    description:
      'Appartements spacieux avec chambre séparée, salon, cuisine entièrement équipée et grande terrasse privative vue côté mer ou côté village. Idéal pour les familles et les longs séjours.',
    features: [
      'Cuisine entièrement équipée',
      'Climatisation',
      'Grande terrasse privative',
      'Double vitrage',
      'Literie haut de gamme 180×200',
      'Wi-Fi haut débit gratuit',
      'Télévision',
    ],
    image: '/photos/appart-T2.jpg',
  },
]

export const housingServices = [
  {
    title: 'Service de ménage',
    description: 'Service de chambre quotidien ou uniquement en début et fin de séjour, au choix.',
  },
  {
    title: 'Petit-déjeuner en appartement',
    description: 'Servi dans votre appartement sur demande, dès votre réservation ou à votre arrivée.',
  },
  {
    title: 'Accessibilité PMR',
    description: 'Appartements conçus pour les personnes à mobilité réduite.',
  },
]

// Ancien export pour compatibilité (plus utilisé par la page appartements)
export const housings: Housing[] = []

export type ServiceCategory = {
  title: string
  services: { title: string; description: string }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Espace détente & bien-être',
    services: [
      {
        title: 'Piscine extérieure',
        description: 'Piscine extérieure ouverte en saison, pour profiter du soleil corse.',
      },
      {
        title: 'Spa de nage intérieur',
        description: 'Spa de nage intérieur accessible toute l\'année pour la détente et la remise en forme.',
      },
      {
        title: 'Hammam',
        description: 'Hammam pour un moment de relaxation après une journée de découverte.',
      },
      {
        title: 'Sauna',
        description: 'Sauna pour une parenthèse bien-être entre mer et montagne.',
      },
      {
        title: 'Salle de sport 400 m²',
        description: 'Salle de sport moderne de 400 m² équipée des dernières technologies Technogym.',
      },
    ],
  },
  {
    title: 'Services & équipements',
    services: [
      {
        title: 'Parking couvert sécurisé',
        description: 'Parking couvert et sécurisé sur place pour tous nos hôtes.',
      },
      {
        title: 'Bornes de recharge électrique',
        description: 'Bornes de recharge pour véhicules électriques disponibles sur le parking.',
      },
      {
        title: 'Distributeur boissons & snacks',
        description: 'Distributeur automatique de boissons et de snacks accessible 24h/24.',
      },
      {
        title: 'Wi-Fi haut débit gratuit',
        description: 'Connexion Wi-Fi haut débit gratuite dans tous les logements et espaces communs.',
      },
      {
        title: 'Service de ménage',
        description: 'Service de chambre quotidien ou uniquement en début et fin de séjour, au choix.',
      },
      {
        title: 'Petit-déjeuner en appartement',
        description: 'Servi dans votre appartement sur demande, dès votre réservation ou à votre arrivée.',
      },
      {
        title: 'Accessibilité PMR',
        description: 'Appartements conçus pour les personnes à mobilité réduite.',
      },
    ],
  },
]

// Ancien export pour compatibilité
export const services = [
  { title: 'Piscine extérieure', description: 'Piscine extérieure ouverte en saison, solarium avec transats.', icon: 'Waves' },
  { title: 'Spa de nage intérieur', description: 'Spa de nage intérieur accessible toute l\'année.', icon: 'Waves' },
  { title: 'Hammam', description: 'Hammam pour un moment de relaxation.', icon: 'Wind' },
  { title: 'Sauna', description: 'Sauna pour une parenthèse bien-être.', icon: 'Wind' },
  { title: 'Salle de sport 400 m²', description: 'Équipements Technogym dernière génération.', icon: 'Dumbbell' },
  { title: 'Parking couvert sécurisé', description: 'Parking couvert et sécurisé sur place.', icon: 'Car' },
  { title: 'Bornes de recharge électrique', description: 'Rechargez votre véhicule électrique sur place.', icon: 'Car' },
  { title: 'Wi-Fi haut débit gratuit', description: 'Connexion haut débit dans tous les logements.', icon: 'Wifi' },
]

export const regionHighlights = [
  {
    title: 'Sari-Solenzara',
    subtitle: 'Village authentique',
    description:
      'Au cœur du village de Sari-Solenzara, à seulement 3 minutes à pied du port de plaisance. Petits commerces, marina et plages vous attendent.',
    image: '/photos/solenzara.jpg',
  },
  {
    title: 'Plages de sable fin',
    subtitle: 'À quelques minutes',
    description:
      'Des plages paradisiaques comme Canella, Favone ou San Ciprianu accessibles à pied ou en vélo.',
    image: '/photos/plage-canella.jpg',
  },
  {
    title: 'Aiguilles de Bavella',
    subtitle: 'Randonnée & panorama',
    description:
      "Un site grandiose à 30 minutes : randonnées, via ferrata et vues à couper le souffle sur l'Alta Rocca.",
    image: '/photos/aiguilles_bavella.webp',
  },
  {
    title: 'Rivière de Solenzara',
    subtitle: 'Baignade en eau douce',
    description:
      'Piscines naturelles et baignades rafraîchissantes au cœur des maquis corses.',
    image: '/photos/riviere-solenzara.jpg',
  },
]

export const contactInfo = {
  email: 'contact@legabriel.fr',
  phone: '',
  address: 'Le Gabriel, Sari-Solenzara, 20145 Solenzara, Corse',
  hours: 'Ouverture saison 2027',
}
