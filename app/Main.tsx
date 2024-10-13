import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

const sponsors = ['/static/images/sponsors/hdsi.png']

export default function Home({ posts }) {
  return (
    <>
      <div className="my-6 flex flex-col gap-x-12 xl:mb-12 xl:flex-row">
        <div className="mr-8 pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-12 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-12 md:text-4xl md:leading-14">
            UC San Diego ML Systems Group
          </h1>
          <h2 className="prose text-justify text-lg text-gray-600 dark:text-gray-400">
            {`We are a group of faculty, researchers, and students targeting at the intersection of machine learning and systems. 
            Our current members span the Computer Science and Engineering Department `}
            (<Link href="https://cse.ucsd.edu">CSE</Link>)
            {` and the Halıcıoğlu Data Science Institute `}(
            <Link href="https://datascience.ucsd.edu">HDSI</Link>)
            {` at the University of California, San Diego. Our research focuses on a broad spectrum of topics aimed at advancing next-generation systems for machine learning and developing innovative algorithms.`}
          </h2>
        </div>
        <div className="flex-col pt-6 xl:mb-12">
          <h2 className="pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-8 md:text-2xl md:leading-8">
            Research Areas
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-400">
            <div className="list-disc text-base text-gray-600 dark:text-gray-400">
              <li>Systems for ML/AI</li>
              <li>ML/AI for building systems</li>
              <li>ML compilers and runtimes</li>
              <li>Distributed ML/AI</li>
              <li>Hardware software co-design for ML/AI</li>
              <li>ML/AI system benchmarks and datasets</li>
              <li>AIGC and agents</li>
              <li>AI systems for science</li>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            News & Events
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, speakers } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                      <div className="flex flex-wrap">
                        {tags?.map((tag) => (
                          <Tag
                            key={tag}
                            text={tag}
                            textColor={tag === 'news' ? 'text-pink-500' : 'text-yellow-500'}
                          />
                        ))}
                      </div>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/events/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        {speakers && (
                          <div className="prose max-w-none text-justify text-gray-500 dark:text-gray-400">
                            <b>{speakers}</b>
                          </div>
                        )}
                        <div className="dark:text-gray-400y prose max-w-none text-justify text-gray-500">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/events/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/news"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All news"
            >
              All News &rarr;
            </Link>
          </div>
        ) && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/events"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      {/* Sponsor Section */}
      <div className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Sponsors</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {sponsors.map((src, index) => (
            <div key={index} className="relative h-20 w-full">
              <Image src={src} alt={`Sponsor ${index + 1}`} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      {/* {siteMetadata.eventsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <eventsletterForm />
        </div>
      )} */}
    </>
  )
}
