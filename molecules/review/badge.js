export const ReviewBadge = ({ src, size, rating, noOfReviews, link }) => (
  <div className="flex flex-col items-center">
    <a href={link} target="_blank" className="cursor-pointer">
      <img src={src} className={size} />
    </a>
    <RatingLabel rating={rating} noOfReviews={noOfReviews} link={link} />
  </div>
)

const RatingLabel = ({ rating, noOfReviews, link }) => (
  <div
    id="rating-long"
    className="tp-widget-rating tp-widget-rating-long text-xs text-gray-700 mt-4"
  >
    Rated <strong>{rating}</strong> / 5 based on{' '}
    <a target="_blank" href={link}>
      <strong className="underline">{noOfReviews} reviews</strong>
    </a>
    .
  </div>
)
