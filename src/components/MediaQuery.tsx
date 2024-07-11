import { useMediaQuery } from '../hooks/useMediaQuery'
import { MediaQueryEnum, MediaQueryProps } from '../types'

function createStringMedia(param: string, value?: string | number): string {
  if (value) {
    const isString = typeof value === 'string'
    if (
      param === MediaQueryEnum.minResolution ||
      param === MediaQueryEnum.maxResolution
    ) {
      return `(${param}: ${isString ? value : value + 'dppx'})`
    } else {
      return `(${param}: ${isString ? value : value + 'px'})`
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

  {
    if (typeof children === 'function') {
      return children(isMatch)
    } else {
      if (isMatch) {
        return children
      } else {
        return null
      }
    }
  }
}

export default MediaQuery
