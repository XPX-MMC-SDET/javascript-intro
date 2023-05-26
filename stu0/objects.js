//
// Name: objects.js
// Date: 5/25/2023
// Desc: Demonstration of objects in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const car = {
        id: 1,
        make: 'Ford',
        model: 'F150',
        year: 2020,
        price: '25000'
    }
    console.log(car)
    console.log(Object.keys(car))
}

const ex2 = () => {
    console.log('Exercise 2')
    const array = []
    array.push({ firstName: "Alice"})
    array.push({ firstName: "Bob"})
    array.push({ firstName: "Charlie"})
    console.log(array)
}

const ex3 = () => {
    console.log('Exercise 3')
    const person1 = { id: 1, salary: 60000}
    const person2 = { id: 2, salary: 30000}
    const person3 = { id: 3, salary: 10000}

    const array = []
    array.push(person1)
    array.push(person2)
    array.push(person3)
    const result = calculateSalary(array)
    console.log(result)
}

const ex4 = () => {
    console.log('Exercise 4')
    console.log(addNumbers(2, 3))
}

const ex5 = () => {
    console.log('Exercise 5')
    console.log(calcNumbers("Add", 2, 3))
    console.log(calcNumbers("Substract", 5, 2))
}

//
// YOUR FUNCTIONS GO HERE
//

const calcNumbers = (action, num1, num2) => {
    return {
        operand1: num1,
        operand2: num2,
        result: action === "Add" ? num1 + num2 : num1 - num2,
        action: action
    }
}

const addNumbers = (num1, num2) => {
    return {
        operand1: num1,
        operand2: num2,
        result: num1 + num2,
        action: "add"
    }
}

const calculateSalary = (array) => {
    let retval = 0
    array.forEach(person => {
        retval += person.salary
    })
   return retval
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
