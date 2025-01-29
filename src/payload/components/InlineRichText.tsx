'use client'

import {
  AlignFeatureClient,
  BoldFeatureClient,
  createClientFeature,
  InlineCodeFeatureClient,
  InlineToolbarFeatureClient,
  ItalicFeatureClient,
  LinkFeatureClient,
  RichTextField,
  StrikethroughFeatureClient,
  UnderlineFeatureClient,
} from '@payloadcms/richtext-lexical/client'
import { useField } from '@payloadcms/ui'
import { ComponentProps, useEffect } from 'react'
import './styles.css'
import { ITALIC_STAR, ITALIC_UNDERSCORE } from '@payloadcms/richtext-lexical/lexical/markdown'

type RichTextFieldProps = ComponentProps<typeof RichTextField>
type RichTextValue = {
  root: {
    type: string
    children: {
      type: string
      version: number
      [k: string]: unknown
    }[]
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}

const InlineRichText = ({
  field,
  path,
  schemaPath,
}: {
  field: RichTextFieldProps['field']
  path: RichTextFieldProps['path']
  schemaPath: string
}) => {
  const clientFeatures = {
    toolbarInline: {
      clientFeatureProps: {
        featureKey: 'toolbarInline',
        order: 0,
      },
      clientFeatureProvider: InlineToolbarFeatureClient,
    },
    link: {
      clientFeatureProps: {
        enabledCollections: ['pages'],
        featureKey: 'link',
        order: 1,
      },
      clientFeatureProvider: LinkFeatureClient,
    },
    align: {
      clientFeatureProps: {
        featureKey: 'align',
        order: 2,
      },
      clientFeatureProvider: AlignFeatureClient,
    },
    inlineCode: {
      clientFeatureProps: {
        featureKey: 'inlineCode',
        order: 3,
      },
      clientFeatureProvider: InlineCodeFeatureClient,
    },
    strikethrough: {
      clientFeatureProps: {
        featureKey: 'strikethrough',
        order: 4,
      },
      clientFeatureProvider: StrikethroughFeatureClient,
    },
    underline: {
      clientFeatureProps: {
        featureKey: 'underline',
        order: 5,
      },
      clientFeatureProvider: UnderlineFeatureClient,
    },
    bold: {
      clientFeatureProps: {
        featureKey: 'bold',
        order: 6,
      },
      clientFeatureProvider: BoldFeatureClient,
    },
    redText: {
      clientFeatureProps: {
        featureKey: 'redText',
        order: 8,
      },
      clientFeatureProvider: createClientFeature({
        toolbarInline: true,
      }),
    },
  }

  const featureClientSchemaMap = {
    link: {
      [`${schemaPath}.lexical_internal_feature.link.fields`]: [
        {
          name: 'text',
          type: 'text',
          label: 'Text to display',
          required: true,
        },
        {
          name: 'linkType',
          type: 'radio',
          label: 'Link Type',
          options: [
            {
              label: 'Custom URL',
              value: 'custom',
            },
            {
              label: 'Internal Link',
              value: 'internal',
            },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Enter a URL',
          required: true,
        },
        {
          name: 'doc',
          type: 'relationship',
          label: 'Choose a document to link to',
          relationTo: ['pages'],
          required: true,
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
        },
      ],
    },
  }
  const { value, setValue } = useField<RichTextValue>({ path })

  useEffect(() => {
    const children = value?.root?.children

    if (children && children.length > 1) {
      setValue({
        root: {
          ...(value.root ?? {}),
          children: [children[0]],
        },
      })
    }
  }, [value])

  return (
    <div className="inline-rich-text">
      <RichTextField
        path={path}
        schemaPath={schemaPath}
        initialLexicalFormState={{}}
        field={field}
        admin={{ hideGutter: true }}
        permissions={true}
        clientFeatures={clientFeatures}
        featureClientSchemaMap={
          featureClientSchemaMap as RichTextFieldProps['featureClientSchemaMap']
        }
        lexicalEditorConfig={undefined}
      />
    </div>
  )
}

export default InlineRichText
