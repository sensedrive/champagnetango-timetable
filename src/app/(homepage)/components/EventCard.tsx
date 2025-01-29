import React from 'react'
import DateDisplay from './DateDisplay'

interface EventCardProps {
  imageUrl: string
  day: string
  date: string
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, day, date }) => {
  return (
    <div className="flex flex-col px-6 gap-6 justify-center items-center">
      <img src={imageUrl} alt="Event image" className="aspect-square object-cover size-42" />
      <div className="flex flex-col px-6 justify-center items-center">
        <DateDisplay day={day} date={date} />
      </div>
    </div>
  )
}

export default EventCard
