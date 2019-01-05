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
  return kittens.shift()
  
}