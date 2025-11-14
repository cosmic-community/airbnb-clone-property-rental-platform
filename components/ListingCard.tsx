import Link from 'next/link'
import { Listing } from '@/types'

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const primaryPhoto = listing.metadata.photos?.[0]
  const imageUrl = primaryPhoto?.imgix_url 
    ? `${primaryPhoto.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
    : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format'

  return (
    <Link href={`/listings/${listing.slug}`} className="group">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3">
        <img 
          src={imageUrl}
          alt={listing.metadata.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={400}
        />
        {!listing.metadata.available && (
          <div className="absolute top-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            Unavailable
          </div>
        )}
      </div>
      
      <div>
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
            {listing.metadata.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-1">
          {listing.metadata.location}
        </p>
        
        <p className="text-gray-600 text-sm mb-2">
          {listing.metadata.guests} guests · {listing.metadata.bedrooms} bedrooms · {listing.metadata.bathrooms} bathrooms
        </p>
        
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-gray-900">${listing.metadata.price_per_night}</span>
          <span className="text-gray-600 text-sm">/ night</span>
        </div>
      </div>
    </Link>
  )
}