import { ReviewsCards } from './cards'
import { ReviewsG2 } from './g2'

export const Reviews = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50">
      <ReviewsCards />
      <ReviewsG2 />
    </div>
  )
}
