const TimeEntry = ({ time, children }: { time: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col px-6 gap-1 text-sm [&>div>p>strong]:text-tango-red [&>div>p>strong]:font-bold">
      <div className="text-black font-bold font-['EB Garamond']">{time}</div>
      {children}
    </div>
  )
}

export default TimeEntry
