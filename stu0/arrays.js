//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate arrays in JavaScript.
//
 
const ex1 = () => {
    console.log('Exercise 1')
    const animals = ["Dog", "Cat", "Bird", "Fish"]
    console.log(animals)
}

const ex2 = () => {
    console.log('Exercise 2')
    const animals = ["Dog", "Cat", "Bird", "Fish"]
    console.log(getFirstItem(animals))
}

const ex3 = () => {
    console.log('Exercise 3')
    const animals = ["Dog", "Cat", "Bird", "Fish"]
    const newArray = sliceIt(animals, 0, 2)
    console.log(newArray)
}

const ex4 = () => {
    console.log('Exercise 4')
    const animals = ["Dog", "Cat", "Bird", "Fish"]
    console.log(sortArray(animals, 'asc'))
    console.log(sortArray(animals, 'desc'))
}

const ex5 = () => {
    console.log('Exercise 5')
    const animals = ["Dog", "Cat", "Bird", "Fish"]
    console.log(isAnimalInList(animals, "Cats"))
}

//
// YOUR FUNCTIONS GO HERE
//

const sortArray = (array, direction) => {
    if (direction === 'asc') {
        return array.sort()
    } else if (direction === 'desc') {
        return array.sort().reverse()
    }
}

const sliceIt = (array, start, end) => {
    return array.slice(start, end)
}

const getFirstItem = (array) => {
    return array[0]
}

const isAnimalInList = (animals, theAnimal) => {
    const animal = animals.find(animal => animal === theAnimal)
    if (animal) {
        return true
    } else {
        return false
    }
}

//
// The one and only main function.
//

const main = () => {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
