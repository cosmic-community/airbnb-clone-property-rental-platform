import { Host } from '@/types'

interface HostCardProps {
  host: Host
}

export default function HostCard({ host }: HostCardProps) {
  const profilePhoto = host.metadata.profile_photo?.imgix_url
    ? `${host.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`
    : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format'

  const memberSince = host.metadata.member_since 
    ? new Date(host.metadata.member_since).getFullYear()
    : null

  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">Meet your host</h3>
      
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={profilePhoto}
          alt={host.metadata.name}
          className="w-16 h-16 rounded-full object-cover"
          width={64}
          height={64}
        />
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{host.metadata.name}</h4>
          {memberSince && (
            <p className="text-sm text-gray-600">Joined in {memberSince}</p>
          )}
        </div>
      </div>
      
      {host.metadata.bio && (
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {host.metadata.bio}
        </p>
      )}
      
      {host.metadata.response_rate && (
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Response rate:</span>
            <span className="font-semibold text-gray-900">{host.metadata.response_rate}%</span>
          </div>
        </div>
      )}
    </div>
  )
}