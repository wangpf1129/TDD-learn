import { parse } from './parse'

export const parseArgs = (options, args) => {
  return Object.keys(options).reduce((result, key) => {
    result[key] = parse(options, key, args)
    return result
  }, {})
}
