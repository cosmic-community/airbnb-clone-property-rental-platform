import { getListings } from '@/lib/cosmic'
import { Listing } from '@/types'
import ListingCard from '@/components/ListingCard'
import Hero from '@/components/Hero'

export const revalidate = 60

export default async function HomePage() {
  const listings = await getListings() as Listing[]

  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Explore our listings
          </h2>
          <p className="text-gray-600">
            Discover unique stays and experiences around the world
          </p>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No listings available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}