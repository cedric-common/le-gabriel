import { createClient } from '@sanity/client'
import fetch from 'node-fetch'

const client = createClient({
  projectId: 'rkhr8ryh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skrCydqSznL2QLhaQdOcUaTQo84Y2iLKnxfkkaDHxEx97jI0Ew4npmNW9z9LzN5GuHygiTyLUwbkGIli2BCvnGN1bsTaPw0r9D5pxhW9DaSim4xRBsBPnFRFp3N6b6jLp1ASLAYyljNokNfA6NdNOYs7dIgdvzwiFsJApLq0eQ7X8QHQwdBf',
  useCdn: false,
})

const activities = [
  {
    title: 'Élevage caprin et fromagerie',
    subtitle: 'Fromagerie',
    description: "Nos chèvres corses élèvées en liberté dans le maquis. Découvrez la fabrication artisanale de nos fromages au lait cru, entre tradition et savoir-faire.",
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=90',
    featured: false,
    order: 1,
  },
  {
    title: 'Apiculture',
    subtitle: 'Miel de Corse',
    description: "Au cœur du maquis corse, nos ruches produisent un miel aux arômes uniques de ciste, romarin et arbousier. Visitez nos ruchers et dégustez nos précieux nectar.",
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&q=90',
    featured: false,
    order: 2,
  },
  {
    title: 'Viticulture',
    subtitle: 'Vins du Terroir',
    description: "Nos vignes cultivées sur les pentes ensoleillées de San Giuliano produisent des vins d'exception. Visitez nos caves et dégustez nos cuvées typiques.",
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=90',
    featured: true,
    order: 3,
  },
  {
    title: "Vergers de Clémentines",
    subtitle: 'Agrumes Corses',
    description: "Nos clémentiniers aux fruits d'or, cultivés sans traitement chimique. Promenez-vous dans nos vergers et goûtez ces joyaux sucrés du soleil corse.",
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=900&q=90',
    featured: false,
    order: 4,
  },
]

async function uploadImageFromUrl(url: string, filename: string): Promise<string | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const buffer = Buffer.from(await response.arrayBuffer())
    const asset = await client.assets.upload('image', buffer, { filename })
    return asset._id
  } catch (err) {
    console.error(`❌ Erreur upload ${filename}:`, err)
    return null
  }
}

async function importActivities() {
  console.log('🎯 Import des activités dans Sanity...\n')

  for (const activity of activities) {
    console.log(`⏳ Upload image pour "${activity.title}"...`)
    const imageAssetId = await uploadImageFromUrl(activity.imageUrl, `${activity.title}.jpg`)

    const doc: any = {
      _type: 'activite',
      title: activity.title,
      subtitle: activity.subtitle,
      description: activity.description,
      featured: activity.featured,
      order: activity.order,
    }

    if (imageAssetId) {
      doc.image = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      }
    }

    try {
      const result = await client.create(doc)
      console.log(`✅ Créé: ${result.title} (${result._id})\n`)
    } catch (err) {
      console.error(`❌ Erreur création ${activity.title}:`, err)
    }
  }

  console.log('🎉 Import terminé !')
}

importActivities()
