export type HousingView = 'sea' | 'villageMountain'

export type HousingTypology = {
  id: 'signature' | 'azur' | 'terra' | 'privilege'
  name: string
  count: number
  perFloor: number
  size?: number
  view?: HousingView
  image?: string
}

// Noms propres figés : identiques dans toutes les langues.
// « Le privilège » garde le p minuscule du message client.
export const housingTypologies: HousingTypology[] = [
  {
    id: 'signature',
    name: 'La Signature',
    count: 8,
    perFloor: 2,
    image: '/photos/appart-studio.jpg',
  },
  {
    id: 'azur',
    name: 'L\u2019Azur',
    count: 8,
    perFloor: 2,
    size: 43,
    view: 'sea',
  },
  {
    id: 'terra',
    name: 'La Terra',
    count: 4,
    perFloor: 1,
    size: 46,
    view: 'villageMountain',
  },
  {
    id: 'privilege',
    name: 'Le privilège',
    count: 4,
    perFloor: 1,
    size: 63,
    view: 'sea',
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
