import React from 'react'

interface DateDisplayProps {
  day: string
  date: string
}

const DateDisplay: React.FC<DateDisplayProps> = ({ day, date }) => {
  return (
    <>
      <div className="text-gold text-xl font-semibold font-['EB Garamond'] leading-8 tracking-widest">
        {day}
      </div>
      <div className="text-gold text-xl font-black font-['EB Garamond'] leading-8 tracking-widest">
        {date}
      </div>
    </>
  )
}

export default DateDisplay
