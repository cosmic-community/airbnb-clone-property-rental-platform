interface AmenitiesListProps {
  amenities: string[]
}

const amenityIcons: Record<string, string> = {
  'WiFi': '📶',
  'Kitchen': '🍳',
  'Air Conditioning': '❄️',
  'Heating': '🔥',
  'Parking': '🚗',
  'Pool': '🏊',
  'Hot Tub': '🛁',
  'Washer': '🧺',
  'Dryer': '👕',
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  if (!amenities || amenities.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-2xl">{amenityIcons[amenity] || '✓'}</span>
          <span className="text-gray-700">{amenity}</span>
        </div>
      ))}
    </div>
  )
}