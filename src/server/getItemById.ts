import type { Config } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Collection = keyof Config['collections']

async function getItemById(collection: Collection, id: number, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const col = await payload.findByID({
    id,
    collection,
    depth,
  })

  return col
}

export default getItemById
