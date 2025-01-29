'use client'

import Link from 'next/link'

type A4PageProps = {
  children: React.ReactNode
  className?: string
  title?: string
}

const A4Page = ({ children, className = '', title = '' }: A4PageProps) => {
  // A4 dimensions: 210mm × 297mm
  // We'll add padding and margins for better presentation
  return (
    <div className={`flex flex-col justify-center p-4 bg-gray-100 min-h-screen ${className}`}>
      <Link href="/">Zurück</Link>
      {title && <h1 className="text-2xl text-center">{title}</h1>}
      <div
        className={`bg-white shadow-lg mx-auto mt-4`}
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
