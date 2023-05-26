//
// Name: loops.js
// Date: 5/25/2023
// Desc: Demonstrates the use of loops in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    let number = 0;
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
    cars.forEach(car => {
        number++;
    })
    console.log(number)
}

const ex2 = () => {
    console.log('Exercise 2')
    printMessage('Hello World!', 3)
}

const ex3 = () => {
    console.log('Exercise 3')
    countDown(3)
}

const ex4 = () => {
    console.log('Exercise 4')
    const numbers = [1, 2, 3]
    console.log(addNumbers(numbers))
}

const ex5 = () => {
    console.log('Exercise 5')
    const animals = ['dog', 'cat', 'fish', 'bird']
    hideCat(animals)
    console.log(animals)
}   

//
// YOUR FUNCTIONS GO HERE.
//

const hideCat = (animals) => {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === 'cat') {
            animals[i] = 'xxx'
        }
    }
}

const addNumbers = (numbers) => {
    let retval = 0
    for (let i = 0; i < numbers.length; i++) {
        retval += numbers[i]
    }
    return retval
}

const countDown = (num) => {
    while (num > 0) {
        console.log(num)
        num--
    }
    console.log('Blast Off!')
}

const printMessage = (message, numTimes) => { 
    for (let i = 0; i < numTimes; i++) {
        console.log(message)
    }
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
