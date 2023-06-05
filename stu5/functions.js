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
const printMessage = (text) => {
    console.log(text)
}

const add = (num1, num2) => {
    return num1 + num2
}

const buildSentence = (string1, string2, string3, string4) =>{
    return `${string1} ${string2} ${string3} ${string4}`
}

const doubleIt = (text) =>{
    return `${text}${text}`
}

const multiply = (num1, num2) => {
    console.log(num1 * num2)
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
    ex2()
    ex3()
    ex4()
    ex5()
}

main()
