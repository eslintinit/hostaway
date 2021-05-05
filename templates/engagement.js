import { BlogPosts } from 'organisms'
import { Podcast, Guide, SubscribeForm } from 'molecules'

export const Engagement = () => (
  <div className="flex flex-col items-center">
    <Podcast />
    <Guide />
    <BlogPosts />
    <SubscribeForm />
  </div>
)
