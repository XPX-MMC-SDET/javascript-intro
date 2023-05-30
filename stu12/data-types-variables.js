//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    let messageE1 = "Hello World"
    console.log(messageE1)
}

const ex2 = () => {
    const number1 = 5
    const number2 = "5"
    console.log(number1 + Number(number2))
}

const ex3 = () => {
    const myName = "Rodrigo Vazquez"
    const message = "was here."
    console.log(myName +" "+ message)
}

const ex4 = () => {
    const result = 1 + 2
    console.log(typeof(result))
}

const ex5 = () => {
    const beginning = "JavaScript is a "
    const typeOfLanguage = "dynamic"  // <== TODO: What is it???
    const end = " language."
    console.log(beginning+typeOfLanguage+end)
}

//
// The one and only main function.
//

const main = () => {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
