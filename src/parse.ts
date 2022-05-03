const map = initMap()
function initMap() {
  const map = new Map()
  map.set(Boolean, parseBoolean)
  map.set(Number, parseNumber)
  map.set(String, parseString)
  return map
}

function parseBoolean(key, args) {
  return args.includes('-' + key)
}
function parseNumber(key, args) {
  return parseInt(args[args.indexOf('-' + key) + 1])
}

function parseString(key, args) {
  return args[args.indexOf('-' + key) + 1]
}

export function parse(options, key, args) {
  let parseHandler = map.get(options[key])
  return parseHandler(key, args)
}
