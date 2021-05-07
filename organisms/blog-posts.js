import { BlogPost } from 'molecules'

const posts = [
  {
    title: 'The Guide To Buying A Vacation Rental',
    href: '#',
    category: { name: 'Blog', href: '#' },
    description: `For many people the prospect of buying a vacation rental is a far away dream. After hundreds of conversations, it's become clear that people tend to overthink the entire process.`,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.ctfassets.net/pqmtoyw9z10u/2zJSPrOISiD6SDHigGz08v/ab0f165f7444c35ccc5804a96d8e8c83/villa-2290347_1920.jpg?w=960',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Tips To Keep Your Vacation Rental Marketed All Year Round',
    href: '#',
    category: { name: 'Blog', href: '#' },
    description:
      'We all know the struggle of keeping properties filled year-round. Almost all travel destinations have a few month span where tourism dies down and a large chunk of the vacation rentals are sitting vacant.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.ctfassets.net/pqmtoyw9z10u/7oXLpgH4qXy2y769meaE8V/d1dce527189c9bf2c078248f156625ef/boardwalk-569314_1920.jpg?w=960',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: '4 Revenue Management Best Practices for Short-Term Rentals',
    href: '#',
    category: { name: 'Tips', href: '#' },
    description:
      'Short-term rental revenue management might still be an ambiguous topic in the industry for some, especially when it comes to defining which operational and business practices actually fall under the revenue management umbrella.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.ctfassets.net/pqmtoyw9z10u/8ED43oZ9tjRrM6qhxaDY1/3f75ba609aa3c4a8e5226dabadf093c4/report-3050965_1920.jpg?w=960',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export const BlogPosts = () => (
  <div className="relative bg-white pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-4 lg:px-8 w-full">
    <div className="absolute inset-0">
      <div className="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        {/*
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Follow our blog
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
        */}
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href={post.category.href} className="hover:underline">
                    {post.category.name}
                  </a>
                </p>
                <a href={post.href} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href} className="hover:underline">
                      {post.author.name}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// export const BlogPosts = () => (
//   <div className="flex justify-between">
//     <BlogPost />
//     <BlogPost />
//     <BlogPost />
//   </div>
// )
