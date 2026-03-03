import Image from 'next/image'

interface BookCardProps {
  title: string
  description: string
  rating: string
  reviews: string
  cta: string
  imgSrc: string
  imgAlt: string
  href: string
}

function StarRating({ rating }: { rating: string }) {
  const numRating = parseFloat(rating.replace(',', '.'))
  const fullStars = Math.floor(numRating)
  const hasHalf = numRating % 1 >= 0.25 && numRating % 1 < 0.75
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="flex items-center gap-1" aria-label={`Note: ${rating} sur 5`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function BookCard({
  title,
  description,
  rating,
  reviews,
  cta,
  imgSrc,
  imgAlt,
  href,
}: BookCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center group">
      {/* Book cover */}
      <div className="relative w-[160px] h-[240px] mb-6 rounded-lg overflow-hidden bg-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-mid text-sm leading-relaxed mb-4">{description}</p>

      {/* Rating */}
      <div className="flex flex-col items-center gap-1 mb-5">
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-navy font-bold text-sm">{rating}★</span>
        </div>
        <span className="text-gray-400 text-xs">{reviews}</span>
      </div>

      {/* CTA */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all"
      >
        {cta}
      </a>
    </div>
  )
}
