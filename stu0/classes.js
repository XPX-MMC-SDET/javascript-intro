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
// YOUR CLASSES GO HERE
//

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
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
