var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {

  return [element, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {

 chocolateBars.unshift(element)
 return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element) {

  return [...chocolateBars, element]
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {

 chocolateBars.push(element)
 return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0)
  return array
}
