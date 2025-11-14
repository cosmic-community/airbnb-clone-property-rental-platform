// app/listings/[slug]/loading.tsx
export default function ListingLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-96 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-64 mb-8"></div>
        
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden mb-8">
          <div className="col-span-4 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto bg-gray-200"></div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200"></div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="h-48 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}