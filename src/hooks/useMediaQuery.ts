import { useState, useEffect } from 'react'

interface MediaQueryProps {
  query: string
}

export const useMediaQuery = ({ query }: MediaQueryProps) => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const updateMatch = (e: MediaQueryListEvent) => setIsMatch(e.matches)

    mediaQueryList.addEventListener('change', updateMatch)
    setIsMatch(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener('change', updateMatch)
    }
  }, [query])

  return isMatch
}
