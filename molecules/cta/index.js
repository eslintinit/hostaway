import { CTADefault } from './default'
import { CTAWithReview } from './with-review'
import { CTAForm } from './form'

export const CTA = ({ form, withReview, ...props }) => {
  if (form) return <CTAForm {...props} />
  if (withReview) return <CTAWithReview {...props} />

  return <CTADefault {...props} />
}
