import { useMediaQuery } from '@kseniakap/media-query'
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

  let returnVal;
  {
    if (typeof children === 'function') {
      returnVal = children(isMatch)
    } else {
      if (isMatch) {
        returnVal = children
      } else {
        returnVal = null
      }
    }
  }

  return <>{returnVal}</>
}

export default MediaQuery
