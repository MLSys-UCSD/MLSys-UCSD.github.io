import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'People' })

export default function Page() {
  const authors = allAuthors as Authors[]
  const faculty = authors.filter(
    (author) => author.occupation && author.occupation.includes('Professor')
  )
  const phd_students = authors.filter(
    (author) => author.occupation && author.occupation.includes('PhD')
  )
  const masters_students = authors.filter(
    (author) => author.occupation && author.occupation.includes('Master')
  )
  const undergrad_students = authors.filter(
    (author) => author.occupation && author.occupation.includes('Undergrad')
  )
  // render all authors
  return (
    <>
      <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              Faculty
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
            {faculty.map((author) => {
              const mainContent = coreContent(author)
              return (
                <AuthorLayout key={author._id} content={mainContent}>
                  <MDXLayoutRenderer code={author.body.code} />
                </AuthorLayout>
              )
            })}
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              PhD Students
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
            {phd_students.map((author) => {
              const mainContent = coreContent(author)
              return (
                <AuthorLayout key={author._id} content={mainContent}>
                  <MDXLayoutRenderer code={author.body.code} />
                </AuthorLayout>
              )
            })}
            </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              Master Students
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
            {masters_students.map((author) => {
              const mainContent = coreContent(author)
              return (
                <AuthorLayout key={author._id} content={mainContent}>
                  <MDXLayoutRenderer code={author.body.code} />
                </AuthorLayout>
              )
            })}
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              Undergraduate Students
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
            {undergrad_students.map((author) => {
              const mainContent = coreContent(author)
              return (
                <AuthorLayout key={author._id} content={mainContent}>
                  <MDXLayoutRenderer code={author.body.code} />
                </AuthorLayout>
              )
            })}
            </div>
        </div>
      </div>
    </>
  )
}
