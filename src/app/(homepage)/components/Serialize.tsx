import React from 'react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    // myTextBlock is the slug of the block
    myTextBlock: ({ node }: { node: any }) => (
      <div style={{ backgroundColor: 'red' }}>{node.fields.text}</div>
    ),
  },
})

export default function RichText(
  props: {
    data: SerializedEditorState
  } & React.HTMLAttributes<HTMLDivElement>,
) {
  return <RichTextWithoutBlocks converters={jsxConverters} {...props} />
}
