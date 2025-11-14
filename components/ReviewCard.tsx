import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const reviewDate = review.metadata.review_date 
    ? new Date(review.metadata.review_date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })
    : null

  return (
    <div className="border-b border-gray-200 pb-6 last:border-0">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
          {review.metadata.guest_name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{review.metadata.guest_name}</h4>
          {reviewDate && (
            <p className="text-sm text-gray-600">{reviewDate}</p>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span 
              key={index}
              className={index < review.metadata.rating ? 'text-yellow-400' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        {review.metadata.comment}
      </p>
    </div>
  )
}