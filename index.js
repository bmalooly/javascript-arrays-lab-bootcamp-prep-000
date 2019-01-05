var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(array) {
  return kittens.pop()
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(array) {
  return kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return kittens.concat(name)
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return kittens.concat(name)
}