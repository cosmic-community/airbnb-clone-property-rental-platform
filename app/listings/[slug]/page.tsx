// app/listings/[slug]/page.tsx
import { getListing, getReviewsForListing } from '@/lib/cosmic'
import { Listing, Review } from '@/types'
import { notFound } from 'next/navigation'
import PhotoGallery from '@/components/PhotoGallery'
import ReviewsList from '@/components/ReviewsList'
import HostCard from '@/components/HostCard'
import AmenitiesList from '@/components/AmenitiesList'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params
  const listing = await getListing(slug) as Listing | null

  if (!listing) {
    notFound()
  }

  const reviews = await getReviewsForListing(listing.id) as Review[]

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.metadata.rating, 0) / reviews.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {listing.metadata.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          {reviews.length > 0 && (
            <span className="flex items-center gap-1">
              <span className="text-gray-900">★</span>
              {averageRating.toFixed(1)} ({reviews.length} reviews)
            </span>
          )}
          <span>{listing.metadata.location}</span>
        </div>
      </div>

      {/* Photo Gallery */}
      {listing.metadata.photos && listing.metadata.photos.length > 0 && (
        <PhotoGallery photos={listing.metadata.photos} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Property Details */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {listing.metadata.property_type.value} hosted by {listing.metadata.host?.metadata.name || 'Host'}
            </h2>
            <div className="flex gap-4 text-gray-600">
              <span>{listing.metadata.guests} guests</span>
              <span>·</span>
              <span>{listing.metadata.bedrooms} bedrooms</span>
              <span>·</span>
              <span>{listing.metadata.bathrooms} bathrooms</span>
            </div>
          </div>

          {/* Description */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              {listing.metadata.description}
            </p>
          </div>

          {/* Amenities */}
          {listing.metadata.amenities && listing.metadata.amenities.length > 0 && (
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <AmenitiesList amenities={listing.metadata.amenities} />
            </div>
          )}

          {/* Reviews */}
          {reviews.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-gray-900">★</span>
                {averageRating.toFixed(1)} · {reviews.length} reviews
              </h3>
              <ReviewsList reviews={reviews} />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Booking Card */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-lg sticky top-8">
            <div className="mb-4">
              <span className="text-2xl font-bold">${listing.metadata.price_per_night}</span>
              <span className="text-gray-600"> / night</span>
            </div>
            
            {listing.metadata.available ? (
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors">
                Reserve
              </button>
            ) : (
              <button className="w-full bg-gray-300 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed" disabled>
                Not Available
              </button>
            )}
            
            <p className="text-center text-gray-600 text-sm mt-4">
              You won't be charged yet
            </p>
          </div>

          {/* Host Card */}
          {listing.metadata.host && (
            <div className="mt-6">
              <HostCard host={listing.metadata.host} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}