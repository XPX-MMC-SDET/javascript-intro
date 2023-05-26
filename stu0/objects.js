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
}

const ex4 = () => {
    console.log('Exercise 4')
}

const ex5 = () => {
    console.log('Exercise 5')
}

//
// YOUR FUNCTIONS GO HERE
//




//
// The one and only main function.
//

const main = () => {
    ex2() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
