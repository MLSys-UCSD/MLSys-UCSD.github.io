import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Team' })

export default function Page() {
  const authors = allAuthors
  // render all authors
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Faculty
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          {authors.map((author) => {
            const mainContent = coreContent(author)
            return (
              <AuthorLayout key={author._id} content={mainContent}>
                <MDXLayoutRenderer code={author.body.code} />
              </AuthorLayout>
            )
          })}
        </div>
      </div>
    </>
  )
}
