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
  { id: 1, title: 'Series 1', image: 'https://www.dropbox.com/scl/fi/wf727brbpyq340r2w120y/toefl_reading_masterclass.png?rlkey=76mhr3sqwe6obcn8mo6j0nwyc&st=6ez33sxm&raw=1' },
  { id: 2, title: 'Series 2', image: 'https://www.dropbox.com/scl/fi/3ozy9ltagn5gr44lh0d6l/toefl_listening_masterclass.png?rlkey=j55qsgzquw7krbde1r16x08m0&st=5wquhwwf&raw=1' },
  { id: 3, title: 'Series 3', image: 'https://www.dropbox.com/scl/fi/l85ggv2530v7u05tsw7ly/toefl_writing_masterclass.png?rlkey=s2q919gjp9ap891sj81nyogk4&st=0p33fjc3&raw=1' },
  { id: 4, title: 'Series 4', image: 'https://www.dropbox.com/scl/fi/kynj1hfv0c9ud4d5td0sf/toefl_speaking_class.png?rlkey=nh3710572rilon3ybaxeyb8w8&st=mtr8jnmm&dl=0' },
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
            <img
              src={item.image}
              alt={`Image of ${item.title}`}
              className="object-cover"
              loading="lazy" // Enable lazy loading for performance
              onError={(e) => {
                e.currentTarget.src = '/fallback-image.svg'; // Fallback image if the source fails
              }}
            />
          </AspectRatio>
          {/* <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </CardContent> */}
        </Card>
      </Link>
    ))}
  </div>
)

export function ModernSeriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Pre-Recorded TOEFL Classes</h2>
        <SeriesGrid series={ongoingSeries} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Recently Completed Test Series</h2>
        <SeriesGrid series={completedSeries} />
      </section>
    </div>
  )
}
