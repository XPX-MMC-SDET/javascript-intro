//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const message = 'Hello World!'
    console.log(message)
}

const ex2 = () => {
    console.log('Exercise 2')
    const number1 = 5
    const number2 = "5"
    console.log(Number(number2) + number1)
}

const ex3 = () => {
    console.log('Exercise 3')
    const myName = "Marty"
    const message = " was here."
    console.log(myName + message)
}

const ex4 = () => {
    console.log('Exercise 4')
    const result = 1 + 2
    console.log(typeof(result))
}

const ex5 = () => {
    console.log('Exercise 5')
    const beginning = "JavaScript is a "
    const typeOfLanguage = "weakly typed"
    const end = " language"
    console.log(beginning + typeOfLanguage + end)
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
