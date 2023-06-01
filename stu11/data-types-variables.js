//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    const message ='Hello World'
    console.log (message)
}

const ex2 = () => {
    const number1 = 5
    const number2 = "5"
    console.log (number1+ parseInt(number2))
}

const ex3 = () =>{
    
    const myName = "Jhon"
    const message = "was here"
    console.log(myName + ' ' + message)
    
}

function ex4() {
    console.log('Exercise 4')
    const result = 9 + 2 
    console.log(typeof(result))
}

const ex5 = () => {
    console.log('Exercise 5')
    const beginning = "Javascript is a"
    const typeOfLanguage = "Dynamic"
    const end = "language"
    console . log (beginning+typeOflanguage+end)
}

//
// The one and only main function.
//

const main = () => {
    ex3() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
