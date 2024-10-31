'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface Series {
  id: number
  title: string
  image: string
}

const ongoingSeries: Series[] = [
  { id: 1, title: 'Series 1', image: '/assets/goglobal.webp' },
  { id: 2, title: 'Series 2', image: '/assets/goglobal.webp' },
  { id: 3, title: 'Series 3', image: '/assets/goglobal.webp' },
  { id: 4, title: 'Series 4', image: '/assets/goglobal.webp' },
]

const completedSeries: Series[] = [
  { id: 5, title: 'Series 5', image: '/assets/goglobal.webp' },
  { id: 6, title: 'Series 6', image: '/assets/goglobal.webp' },
  { id: 7, title: 'Series 7', image: '/assets/goglobal.webp' },
  { id: 8, title: 'Series 8', image: '/assets/goglobal.webp' },
]

const SeriesGrid = ({ series }: { series: Series[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {series.map((item) => (
      <Link key={item.id} href={`/series/${item.id}`} className="block" aria-label={`Go to ${item.title}`}>
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.image}
              alt={`Image of ${item.title}`}
              fill
              className="object-cover"
              loading="lazy" // Enable lazy loading for performance
              onError={(e) => {
                e.currentTarget.src = '/fallback-image.svg'; // Fallback image if the source fails
              }}
            />
          </AspectRatio>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
)

export function ModernSeriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Currently Happening (Ongoing Series)</h2>
        <SeriesGrid series={ongoingSeries} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Recently Completed Series</h2>
        <SeriesGrid series={completedSeries} />
      </section>
    </div>
  )
}
