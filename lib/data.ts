export type HousingView = 'sea' | 'villageMountain'

export type HousingLayout = 'studio' | 't2' | 't3'

export type HousingTypology = {
  id: 'signature' | 'azur' | 'terra' | 'privilege'
  name: string
  layout: HousingLayout
  count: number
  perFloor: number
  size?: number
  view?: HousingView
  image?: string
}

// Noms propres figés : identiques dans toutes les langues.
export const housingTypologies: HousingTypology[] = [
  {
    id: 'signature',
    name: 'La Signature',
    layout: 'studio',
    count: 8,
    perFloor: 2,
    image: '/photos/appart-studio.jpg',
  },
  {
    id: 'azur',
    name: 'L\u2019Azur',
    layout: 't2',
    count: 8,
    perFloor: 2,
    size: 43,
    view: 'sea',
    image: '/photos/appart-T2.jpg',
  },
  {
    id: 'terra',
    name: 'La Terra',
    layout: 't2',
    count: 4,
    perFloor: 1,
    size: 46,
    view: 'villageMountain',
    image: '/photos/aiguilles_bavella.webp',
  },
  {
    id: 'privilege',
    name: 'Le Privilège',
    layout: 't3',
    count: 4,
    perFloor: 1,
    size: 63,
    view: 'sea',
    image: '/photos/heroe-services.jpg',
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

export function listHousingNames() {
  return housingTypologies.map((item) => item.name).join(', ')
}

export const housingTotal = housingTypologies.reduce((sum, item) => sum + item.count, 0)
