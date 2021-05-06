import { BlogPosts, Support, FAQ } from 'organisms'
import { Podcast, Guide, SubscribeForm, CTA } from 'molecules'

export const Engagement = () => (
  <div className="flex flex-col items-center">
    <Podcast />
    <Guide />
    <BlogPosts />
    <SubscribeForm />
    <FAQ />
    <CTA bg="white" />
  </div>
)
