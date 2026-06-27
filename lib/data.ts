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

const studioImages = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d5771f501?w=900&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80',
  'https://images.unsplash.com/photo-1493663284040-bf0efef3ea86?w=900&q=80',
  'https://images.unsplash.com/photo-1560448204-e02b686ab689?w=900&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80',
  'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=900&q=80',
  'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=900&q=80',
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80',
]

const aptImages = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
  'https://images.unsplash.com/photo-1560448204-e02b686ab689?w=900&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  'https://images.unsplash.com/photo-1493663284040-bf0efef3ea86?w=900&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80',
  'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=900&q=80',
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80',
  'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=900&q=80',
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&q=80',
  'https://images.unsplash.com/photo-1502003148287-a82ef80a9a7b?w=900&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80',
]

export const housings: Housing[] = [
  // Studios (12)
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: `studio-${i + 1}`,
    type: 'studio' as const,
    name: `Studio ${i + 1}`,
    guests: 4,
    sizeSqm: 28,
    beds: 'Lit double + canapé-lit',
    description:
      'Studio lumineux avec terrasse ou balcon, coin nuit séparé par un paravent, cuisine équipée et salle de douche.',
    features: ['Clim réversible', 'Cuisine équipée', 'TV', 'Wifi fibre', 'Terrasse / balcon', 'Linge de maison'],
    image: studioImages[i % studioImages.length],
  })),
  // Appartements 1 chambre (11)
  ...Array.from({ length: 11 }).map((_, i) => ({
    id: `apt-${i + 1}`,
    type: 'appartement' as const,
    name: `Appartement ${i + 1}`,
    guests: 5,
    sizeSqm: 45,
    beds: 'Chambre lit double + salon canapé-lit 3pl',
    description:
      'Appartement spacieux avec chambre séparée, salon, cuisine américaine et grand balcon vue jardin ou piscine.',
    features: [
      'Clim réversible',
      'Cuisine équipée',
      'TV',
      'Wifi fibre',
      'Grand balcon',
      'Linge de maison',
      'Espace de travail',
    ],
    image: aptImages[i % aptImages.length],
  })),
]

export const services = [
  {
    title: 'Piscine chauffée',
    description: 'Piscine extérieure chauffée en saison, solarium avec transats.',
    icon: 'Waves',
  },
  {
    title: 'Parking privé',
    description: 'Parking fermé et sécurisé sur place, accès direct.',
    icon: 'Car',
  },
  {
    title: 'Wifi fibre',
    description: 'Connexion haut débit fibre dans tous les logements et espaces communs.',
    icon: 'Wifi',
  },
  {
    title: 'Clim réversible',
    description: 'Climatisation et chauffage réversible dans chaque logement.',
    icon: 'Wind',
  },
  {
    title: 'Cuisine équipée',
    description: 'Réfrigérateur, plaques, micro-ondes, cafetière, vaisselle complète.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Linge de maison',
    description: 'Draps, serviettes et torchons fournis et changés chaque semaine.',
    icon: 'BedDouble',
  },
  {
    title: 'Ménage fin de séjour',
    description: 'Service ménage inclus ou en option selon la durée.',
    icon: 'Sparkles',
  },
  {
    title: 'Navette aéroport',
    description: 'Mise en relation avec service de navette Bastia / Figari sur demande.',
    icon: 'Plane',
  },
]

export const regionHighlights = [
  {
    title: 'Solenzara',
    subtitle: 'Village authentique',
    description:
      'Située entre mer et montagne, Solenzara offre un cadre de vie préservé avec ses petits commerces, sa marina et ses plages.',
    image: '/solenzara.jpg',
  },
  {
    title: 'Plages de sable fin',
    subtitle: 'À quelques minutes',
    description:
      'Des plages paradisiaques comme Canella, Favone ou San Ciprianu accessibles à pied ou en vélo.',
    image: '/plage-canella.jpg',
  },
  {
    title: 'Aiguilles de Bavella',
    subtitle: 'Randonnée & panorama',
    description:
      "Un site grandiose à 30 minutes : randonnées, via ferrata et vues à couper le souffle sur l'Alta Rocca.",
    image: '/aiguilles_bavella.webp',
  },
  {
    title: 'Rivière de Solenzara',
    subtitle: 'Baignade en eau douce',
    description:
      'Piscines naturelles et baignades rafraîchissantes au cœur des maquis corses.',
    image: '/riviere-solenzara.jpg',
  },
]

export const contactInfo = {
  email: 'contact@legabriel.fr',
  phone: '',
  address: 'Le Gabriel, 20145 Solenzara, Corse',
  hours: 'Lun — Sam · 9h00 à 19h00',
}
