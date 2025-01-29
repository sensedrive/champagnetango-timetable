import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ProgrammplanTage: CollectionConfig = {
  slug: 'programmplan-tage',
  admin: {
    hidden: true,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Datum',
      required: true,
    },
    {
      name: 'programmeintraege',
      type: 'array',
      label: 'Programmeinträge',
      interfaceName: 'Programmeintrag', // optional
      labels: {
        singular: 'Programmeintrag',
        plural: 'Programmeintrag',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'text',
          type: 'richText',
          label: 'Text',
          editor: lexicalEditor({}),
          required: true,
        },
      ],
    },
  ],
}
