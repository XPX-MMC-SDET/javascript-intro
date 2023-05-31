//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const message ='Hello World'
    console.log (message)
}

const ex2 = () => {
    const myFirstName = "Ravi"
    const message = "Hi"
    console.log (myFirstName +" "+ message)
}

const ex3 = () =>{
    console.log('Exercise 3')
    const result = 8 + 5
    console.log(typeof(result))
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
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
