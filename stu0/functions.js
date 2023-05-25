//
// Name: functions.js
// Date: 5/25/2023
// Desc: Demonstration of functions in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    printMessage('Hello World!')
}

const ex2 = () => {
    console.log('Exercise 2')
    const result = add(2, 3)
    console.log(result) 
}

const ex3 = () => {
    console.log('Exercise 3')
    console.log(buildSentence('This', 'is', 'a', 'sentence'))
}

const ex4 = () => {
    console.log('Exercise 4')
    const newWord = doubleIt('Hello')
    console.log(newWord)
}

const ex5 = () => {
    console.log('Exercise 5')
    multiply(2, 3)
}

//
// YOUR FUNCTIONS GO HERE
//

const printMessage = (message) => {
    console.log(message)
}

const add = (a, b) => {
    return a + b
}

const buildSentence = (word1, word2, word3, word4) => {
    return word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + '.'
}

const doubleIt = (word) => {
    return word + word
}

const multiply = (a, b) => { 
    console.log(a * b)
}

//
// The one and only main function.
//

const main = () => {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
