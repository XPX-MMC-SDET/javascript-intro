//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    const message = 'Hello World!'
    console.log(message)
}

const ex2 = () => {
    let number1 = 5
    let number2 = "5"
    console.log(Number(number2) + number1)
}

const ex3 = () => {
    console.log('Exercise 3')
}

const ex4 = () => {
    console.log('Exercise 4')
}

const ex5 = () => {
    console.log('Exercise 5')
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
