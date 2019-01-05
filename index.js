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

}