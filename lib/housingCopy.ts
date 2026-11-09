import { housingTypologies, type HousingTypology } from '@/lib/data'

type HousingTranslator = {
  (key: 'kind.signature' | 'views.sea' | 'views.villageMountain'): string
  (key: 'size', values: { size: number }): string
  (key: 'quantity', values: { count: number; perFloor: number }): string
}

export function housingFactLabels(t: HousingTranslator, typology: HousingTypology) {
  const labels: string[] = []
  if (typology.id === 'signature') labels.push(t('kind.signature'))
  if (typeof typology.size === 'number') labels.push(t('size', { size: typology.size }))
  if (typology.view === 'sea') labels.push(t('views.sea'))
  if (typology.view === 'villageMountain') labels.push(t('views.villageMountain'))
  labels.push(t('quantity', { count: typology.count, perFloor: typology.perFloor }))
  return labels
}

export function housingOptionLabel(t: HousingTranslator, typology: HousingTypology) {
  const labels = [typology.name]
  if (typeof typology.size === 'number') labels.push(t('size', { size: typology.size }))
  if (typology.view === 'sea') labels.push(t('views.sea'))
  if (typology.view === 'villageMountain') labels.push(t('views.villageMountain'))
  if (typology.id === 'signature') labels.push(t('kind.signature'))
  return labels.join(' — ')
}

export function housingMetadataSummary(t: HousingTranslator) {
  return housingTypologies
    .map((typology) => {
      const parts = [typology.name]
      if (typeof typology.size === 'number') parts.push(t('size', { size: typology.size }))
      if (typology.view === 'sea') parts.push(t('views.sea'))
      if (typology.view === 'villageMountain') parts.push(t('views.villageMountain'))
      parts.push(t('quantity', { count: typology.count, perFloor: typology.perFloor }))
      return parts.join(', ')
    })
    .join(' · ')
}
