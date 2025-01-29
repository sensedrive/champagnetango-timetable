import type { Config } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Collection = keyof Config['collections']

async function getCollection(collection: Collection, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const col = await payload.find({
    collection: 'programmplaene',
    depth,
    limit: 10,
    sort: 'createdAt',
  })

  return col
}

export default getCollection
