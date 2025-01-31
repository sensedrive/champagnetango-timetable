import React from 'react'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const HomePage = async () => {
  const payload = await getPayload({ config: configPromise })

  const doc = await payload.find({
    collection: 'programmplaene',
  })

  return (
    <div className="bg-gray-100 h-screen p-16">
      <div className="prose">
        <h1 className="text-2xl font-bold">Programmpläne</h1>
        {doc.docs.length > 0 && (
          <ul>
            {doc.docs.map((programmplan) => (
              <li key={programmplan.id}>
                <Link href={`/programmplan/${programmplan.id}`}>
                  {programmplan.title} - {programmplan.headline}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HomePage
