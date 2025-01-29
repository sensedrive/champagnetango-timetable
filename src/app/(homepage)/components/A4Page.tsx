'use client'

import cn from '@/app/(homepage)/utils/cn'
import Link from 'next/link'

type A4PageProps = {
  id?: string
  children: React.ReactNode
  className?: string
  title?: string
  withoutSpacings?: boolean
}

const A4Page = ({
  id,
  children,
  className = '',
  title = '',
  withoutSpacings = false,
}: A4PageProps) => {
  // A4 dimensions: 210mm × 297mm
  // We'll add padding and margins for better presentation
  return (
    <div
      className={cn(
        !withoutSpacings && 'flex flex-col justify-center p-4 bg-gray-100 min-h-screen',
        withoutSpacings && 'gap-0',
        className,
      )}
    >
      <div className="flex justify-between items-center">
        {!withoutSpacings && <Link href="/">Zurück</Link>}
        {!withoutSpacings && <Link href={`/programmplan/${id}/full`}>Full</Link>}
      </div>
      {title && <h1 className="text-2xl text-center">{title}</h1>}
      <div
        className={cn(
          !withoutSpacings && 'bg-white shadow-lg mx-auto mt-4',
          withoutSpacings && 'mt-0',
          withoutSpacings && 'shadow-none',
        )}
        style={{
          width: '210mm',
          height: '297mm',
          minHeight: '297mm',
          minWidth: '210mm',
          overflow: 'hidden',
        }}
      >
        {/* Content container with proper margins */}
        <div className="h-full">{children}</div>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: white;
          }
          .shadow-lg {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default A4Page
