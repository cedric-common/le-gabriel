export const housingCategoryMeta = [
  {
    type: 'studio' as const,
    count: 14,
    guests: 4,
    sizeFrom: 28,
    image: '/photos/appart-studio.jpg',
  },
  {
    type: 'appartement' as const,
    count: 15,
    guests: 5,
    sizeFrom: 45,
    image: '/photos/appart-T2.jpg',
  },
]

export const regionHighlightMeta = [
  { image: '/photos/solenzara.jpg' },
  { image: '/photos/plage-canella.jpg' },
  { image: '/photos/aiguilles_bavella.webp' },
  { image: '/photos/riviere-solenzara.jpg' },
]

export const contactInfo = {
  email: 'contact@legabriel.fr',
  phone: '',
  address: 'Le Gabriel, Sari-Solenzara, 20145 Solenzara, Corse',
}
