const NOT_ALL = 'not all'

export const removeWithSpaces = string => string.replace(/\s/g, '')

export const combine = (string, functions) => functions.reduce((prev, func) => func(prev), string)

export const removeMedia = string => string.replace('@media', '')

export const getOrMediaQuery = string => string.split(/,/)

export const trim = string => string.trim().replace(/\s{2,}/g, ' ')

export const removeBrackets = string => string.replace(/{.*}/, '')

export const getMediaQueryInfos = string => {
  const { matches, media } = window.matchMedia(removeMedia(string))
  const error = media === NOT_ALL && string !== NOT_ALL
  return { matches, media, error }
}

export const getOrSections = string => combine(string, [removeMedia, getOrMediaQuery])

export const getAndSections = string =>
  string
    .split(/\sand\s/).filter(a => a) // Get "AND" sections
    .map(section => {
      const { matches, media, error } = getMediaQueryInfos(section)

      return {
        input: section,
        orSection: string,
        matches,
        media,
        error
      }
    })

export const parseOrSections = sections => sections
  .filter(s => s)
  .map(section => {
    const andSections = getAndSections(section)
    const { matches, media } = getMediaQueryInfos(section)
    const error = andSections.find(andSection => andSection.error)

    return {
      input: section,
      andSections,
      matches,
      media,
      error
    }
  })

export const parseMediaQuery = (code, key) => {
  const input = combine(code, [removeBrackets, trim])
  const orSections = parseOrSections(getOrSections(input))
  const { matches, media } = getMediaQueryInfos(input)
  const error = orSections.find(andSection => andSection.error)

  return {
    input,
    orSections,
    matches,
    media,
    error,
    key
  }
}

export const parse = code => {
  const mediaQueries = code.split(/@media/g).filter(c => c)
  return mediaQueries.map(parseMediaQuery)
}
