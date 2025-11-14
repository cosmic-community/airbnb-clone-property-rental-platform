export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Find your next adventure
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Discover unique stays and experiences around the world
        </p>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 px-6 py-3">
            <label className="text-xs font-semibold text-gray-900 block mb-1">Where</label>
            <input 
              type="text" 
              placeholder="Search destinations" 
              className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
            />
          </div>
          <div className="hidden md:block w-px bg-gray-200"></div>
          <div className="flex-1 px-6 py-3">
            <label className="text-xs font-semibold text-gray-900 block mb-1">Check in</label>
            <input 
              type="text" 
              placeholder="Add dates" 
              className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
            />
          </div>
          <div className="hidden md:block w-px bg-gray-200"></div>
          <div className="flex-1 px-6 py-3">
            <label className="text-xs font-semibold text-gray-900 block mb-1">Guests</label>
            <input 
              type="text" 
              placeholder="Add guests" 
              className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
            />
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-3 font-semibold transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}