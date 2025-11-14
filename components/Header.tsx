import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">🏡</span>
            <span className="text-xl font-bold text-gray-900">Airbnb Clone</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#listings" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Listings
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full font-medium transition-colors">
              Become a Host
            </button>
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}