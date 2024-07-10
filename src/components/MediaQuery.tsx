import { useMediaQuery } from '../hooks/useMediaQuery'
import { MediaQueryEnum, MediaQueryProps } from '../types'

function createStringMedia(param: string, value?: string | number): string {
  if (value) {
    if (
      param === MediaQueryEnum.minResolution ||
      param === MediaQueryEnum.maxResolution ||
      param === MediaQueryEnum.orientation
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

  function isMediaQueryEnumKey(
    key: string,
  ): key is keyof typeof MediaQueryEnum {
    return key in MediaQueryEnum
  }

  const query = Object.entries(MediaQueryEnum)
    .map(([key, value]) => {
      if (isMediaQueryEnumKey(key)) {
        return createStringMedia(value, props[key])
      }
      return ''
    })
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
