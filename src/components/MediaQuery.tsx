import { useMediaQuery } from '../hooks/useMediaQuery'
import { MediaQueries, MediaQueryEnum, MediaQueryProps } from '../types'

function createStringMedia(param: string, value?: string | number): string {
  if (value) {
    if (
      param === MediaQueryEnum.minResolution ||
      param === MediaQueryEnum.maxResolution
    ) {
      return `(${param}: ${value})`
    } else {
      return `(${param}: ${value}px)`
    }
  }
  return ''
}

function MediaQuery(props: MediaQueryProps) {
  const { children } = props

  const query = Object.entries(MediaQueryEnum)
    .map(([key, value]) =>
      createStringMedia(value, props[key as keyof MediaQueries]),
    )
    .filter(Boolean)
    .join(' and ')

  const isMatch = useMediaQuery({ query })

  return (
    <>
      {typeof children === 'function'
        ? children(isMatch)
        : isMatch
        ? children
        : null}
    </>
  )
}

export default MediaQuery
