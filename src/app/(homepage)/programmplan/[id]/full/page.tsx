import React from 'react'

import A4Page from '@/app/(homepage)/components/A4Page'
import { cn } from '@/app/(homepage)/utils'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import Col from '@/app/(homepage)/components/Col'
import EventCard from '@/app/(homepage)/components/EventCard'
import TimeEntry from '@/app/(homepage)/components/TimeEntry'
import RichText from '@/app/(homepage)/components/Serialize'

// Get day in german
const getDay = (date: string) => {
  const day = new Date(date).toLocaleDateString('de-DE', { weekday: 'long' })
  return day
}

// Get date in short format (e.g. 9.9.2022)
const getDateShort = (date: string) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.toLocaleDateString('de-DE', { month: 'numeric' })
  const year = dateObj.getFullYear()
  return `${day}.${month}.${year}`
}

const FullProgrammplanPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const payload = await getPayload({ config: configPromise })

  const doc = await payload.findByID({
    id,
    collection: 'programmplaene',
  })

  const colClass = (cols: number) => {
    if (cols === 3) {
      return 'grid-cols-3'
    }
    return 'grid-cols-2'
  }

  return (
    <A4Page withoutSpacings={true}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center py-12">
          <div className="text-gold text-3xl font-semibold font-['EB Garamond'] leading-10 tracking-widest">
            PROGRAMMABLAUF
          </div>
        </div>
        <div className="px-8 bg-gold-light h-full">
          <div
            className={cn(
              'grid gap-6 bg-gold-light h-full',
              colClass(doc.programmplanTage?.length ?? 2),
            )}
          >
            {doc.programmplanTage
              .filter((tag) => typeof tag !== 'number')
              .map((tag) => (
                <Col key={tag.id}>
                  {typeof tag.image !== 'number' && (
                    <EventCard
                      imageUrl={tag.image.url ?? ''}
                      day={getDay(tag.date)}
                      date={getDateShort(tag.date)}
                    />
                  )}
                  <div className="mt-8 flex flex-col gap-4">
                    {tag.programmeintraege?.map((eintrag) =>
                      eintrag.title ? (
                        <TimeEntry key={eintrag.id} time={eintrag.title ?? ''}>
                          <RichText data={eintrag.text} />
                        </TimeEntry>
                      ) : (
                        <div key={eintrag.id} className="text-xs px-6">
                          <RichText data={eintrag.text} />
                        </div>
                      ),
                    )}
                  </div>
                </Col>
              ))}
          </div>
        </div>
      </div>
    </A4Page>
  )
}

export default FullProgrammplanPage
