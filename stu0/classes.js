//
// Name: classes.js
// Date: 5/25/2023
// Desc: Demonstrate classes in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const p1 = new Person('John', 30)
    console.log(p1.greet())
}

const ex2 = () => {
    console.log('Exercise 2')

    const p1 = new Person('Alice', 30)
    const p2 = new Person('Bob', 20)
    const p3 = new Person('Charlie', 25)

    const people = [p1, p2, p3]
    const avgAge = calcAverageAge(people)
    console.log(`Average age: ${avgAge}`)
}

const ex3 = () => {
    console.log('Exercise 3')
    const myCalculator = new Calculator(1,3)
    console.log(myCalculator.add())
}

const ex4 = () => {
    console.log('Exercise 4')
    const myCalculator = new Calculator(10, 2)
    console.log(myCalculator.substract())
    console.log(myCalculator.multiply())
    console.log(myCalculator.divide())
}

const ex5 = () => {
    console.log('Exercise 5')
    const myCalculator = new Calculator(10, 0)
    console.log(myCalculator.divide())
}

//
// YOUR CLASSES GO HERE
//

class Calculator {
    constructor(operandA, operandB) {
        this.operandA = operandA
        this.operandB = operandB
    }

    add() {
        return this.operandA + this.operandB
    }
    substract() {
        return this.operandA - this.operandB
    }
    multiply() {
        return this.operandA * this.operandB
    }
    divide() {
        if (this.operandB === 0) {
            return "Cannot divide by zero."
        } else {
            return this.operandA / this.operandB
        }
    }
}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

//
// YOUR FUNCTIONS GO HERE
//

const calcAverageAge = (people) => {
    let sum = 0
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age
    }
    return sum / people.length
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
