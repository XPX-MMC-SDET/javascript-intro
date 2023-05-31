//
// Name: data-types-variables.js
// Date: 5/25/2023
// Desc: Demonstrate basic data types and variables with JavaScript.
//

const ex1 = () => {
    let message1 = "Hola Mundo"
    console.log(message1)
}

const ex2 = () => {
    const num1 = 8
    const num2 = "8"
    console.log(num1 = Number(num2))
}

const ex3 = () => {
    const meName = "Maria Becerra"
    const message2 = "here"
    console.log(meName + " " + message2)
}

const ex4 = () => {
    const sum1=1+5
    console.log(typeof(sum1))
}

const ex5 = () => {
    const training = " SDET "
    const TypeLenguage = " JavaScript "
    const fin = " cool"
    console.log("My Training " +  training + " with " + TypeLenguage + fin)
}

//
// The one and only main function.
//

const main = () => {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
