//
// Name: control-flow.js
// Date: 5/25/2023
// Desc: Demonstrate control flow in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    console.log(message('log in'))
}

const ex2 = () => {
    console.log('Exercise 2')
    const result = calculate('add', 2, 3)
    console.log(result)
}

const ex3 = () => {
    console.log('Exercise 3')
    console.log(dayOfWeek('Monday'))
}

const ex4 = () => {
    console.log('Exercise 4')

}

const ex5 = () => {
    console.log('Exercise 5')
}

//
// YOUR FUNCTIONS HERE
//

const message = (text) => {
    if (text == 'log in') {
       return "hello"
    } 
    if (text == 'log out') {
        return "goodbye"
    }
}

const calculate = (operation, num1, num2) => {
    if (operation == 'add') {
        return num1 + num2
    }
    if (operation == 'subtract') {
        return num1 - num2
    }
}

const dayOfWeek = (day) => {
    switch(day) {
        case 'Monday':
            return 1
        case 'Tuesday':
            return 2
        case 'Wednesday':
            return 3
        case 'Thursday':
            return 4
        case 'Friday':
            return 5
        case 'Saturday':
            return 6
        case 'Sunday':
            return 7
        default:
            return 'Invalid day'
    }
}




//
// The one and only main function.
//

const main = () => {
    ex3() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
