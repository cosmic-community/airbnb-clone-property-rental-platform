'use client'

import { Photo } from '@/types'
import { useState } from 'react'

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!photos || photos.length === 0) {
    return null
  }

  const mainPhoto = photos[selectedIndex]
  const thumbnails = photos.slice(0, 5)

  // Safety check for mainPhoto
  if (!mainPhoto) {
    return null
  }

  return (
    <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
      {/* Main Photo */}
      <div className="col-span-4 md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-auto">
        <img 
          src={`${mainPhoto.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
          alt="Main property view"
          className="w-full h-full object-cover cursor-pointer hover:brightness-95 transition-all"
          onClick={() => setSelectedIndex(selectedIndex)}
          width={1200}
          height={800}
        />
      </div>
      
      {/* Thumbnail Grid */}
      {thumbnails.slice(1).map((photo, index) => (
        <div 
          key={index}
          className="relative aspect-[4/3] cursor-pointer overflow-hidden"
          onClick={() => setSelectedIndex(index + 1)}
        >
          <img 
            src={`${photo.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={`Property view ${index + 2}`}
            className={`w-full h-full object-cover hover:brightness-95 transition-all ${
              selectedIndex === index + 1 ? 'ring-2 ring-primary' : ''
            }`}
            width={600}
            height={400}
          />
        </div>
      ))}
      
      {photos.length > 5 && (
        <button className="col-span-2 md:col-span-1 aspect-[4/3] bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
          <span className="text-gray-700 font-medium">
            +{photos.length - 5} more
          </span>
        </button>
      )}
    </div>
  )
}