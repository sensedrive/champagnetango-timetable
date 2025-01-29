import type { CollectionConfig } from 'payload'

export const Programmplaene: CollectionConfig = {
  slug: 'programmplaene',
  labels: {
    singular: 'Programmplan',
    plural: 'Programmpläne',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'programmplanTage',
      label: 'Tage',
      type: 'relationship',
      relationTo: 'programmplan-tage',
      hasMany: true,
      required: true,
    },
  ],
}
