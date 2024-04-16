import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
    <NextImage src={`/MLSys-UCSD${src}`} {...rest} />
  )

export default Image
