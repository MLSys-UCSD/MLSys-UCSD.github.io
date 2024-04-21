import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  textColor?: string // Optional prop for text color
  hoverColor?: string // Optional prop for hover color
}

const Tag = ({
  text,
  textColor = 'text-primary-500',
  hoverColor = 'text-primary-600 dark:hover:text-primary-400',
}: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mr-3 text-sm font-medium uppercase ${textColor} hover:${hoverColor}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
