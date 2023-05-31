//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const message="Hello World"
    console.log(message)
}

const ex2 = () => {
    console.log('Exercise 2')
    const number1= 5
    const number2="5"
    const number3=number1+Number(number2)
    console.log(number3)

}

const ex3 = () => {
    console.log('Exercise 3')
    const myName = "John"
    const message = "was here."
    console.log(myName+" "+message)
}

const ex4 = () => {
    console.log('Exercise 4')
    const result = 1 + 2
    console.log(typeof(result))
}

const ex5 = () => {
    console.log('Exercise 5')
    const beginning = "JavaScript is a "
    const typeOfLanguage = "Dynamic and Weakly Typed"  // <== TODO: What is it???
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
