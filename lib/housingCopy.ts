import { housingTotal, housingTypologies, type HousingTypology } from '@/lib/data'

type HousingTranslator = {
  (key: 'kind.studio' | 'kind.t2' | 'kind.t3' | 'views.sea' | 'views.villageMountain'): string
  (key: 'size', values: { size: number }): string
  (key: 'quantity' | 'total', values: { count: number; perFloor?: number }): string
}

export function housingKindLabel(t: HousingTranslator, typology: HousingTypology) {
  if (typology.layout === 'studio') return t('kind.studio')
  if (typology.layout === 't2') return t('kind.t2')
  return t('kind.t3')
}

export function housingFactLabels(t: HousingTranslator, typology: HousingTypology) {
  const labels = [housingKindLabel(t, typology)]
  if (typeof typology.size === 'number') labels.push(t('size', { size: typology.size }))
  if (typology.view === 'sea') labels.push(t('views.sea'))
  if (typology.view === 'villageMountain') labels.push(t('views.villageMountain'))
  labels.push(t('quantity', { count: typology.count, perFloor: typology.perFloor }))
  return labels
}

export function housingOptionLabel(t: HousingTranslator, typology: HousingTypology) {
  const labels = [typology.name, housingKindLabel(t, typology)]
  if (typeof typology.size === 'number') labels.push(t('size', { size: typology.size }))
  if (typology.view === 'sea') labels.push(t('views.sea'))
  if (typology.view === 'villageMountain') labels.push(t('views.villageMountain'))
  return labels.join(' — ')
}

export function housingMetadataSummary(t: HousingTranslator) {
  const details = housingTypologies
    .map((typology) => {
      const parts = [typology.name, housingKindLabel(t, typology)]
      if (typeof typology.size === 'number') parts.push(t('size', { size: typology.size }))
      if (typology.view === 'sea') parts.push(t('views.sea'))
      if (typology.view === 'villageMountain') parts.push(t('views.villageMountain'))
      parts.push(t('quantity', { count: typology.count, perFloor: typology.perFloor }))
      return parts.join(', ')
    })
    .join(' · ')
  return `${t('total', { count: housingTotal })}. ${details}`
}
