import { format } from 'date-fns'

/**
 *
 * @param date  The date to format
 * @returns   The formatted date
 */
export const formatDate = (date: string) => format(new Date(date), 'MMM dd, yyyy')

/**
 *
 * @param path  The path to add params to
 * @param params  The params to add to the path
 * @returns  The path with params
 */
export const addParamsToPath = (
  path: string,
  params: {
    [key: string]: string | number
  }
) => {
  const paramsString = Object.keys(params).reduce((acc: any, key: any) => {
    if (path.includes('?')) {
      return [...acc, `&${key}=${params[key]}`]
    }

    if (acc.some((param: any) => param.includes('?'))) {
      return [...acc, `&${key}=${params[key]}`]
    }

    return [...acc, `?${key}=${params[key]}`]
  }, [])

  return `${path}${paramsString.join('')}`
}
