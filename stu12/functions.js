//
// Name: functions.js
// Date: 5/25/2023
// Desc: Demonstration of functions in JavaScript.
//

const ex1 = () => {
        console.log('Exercise 1')    
        printMessage("Helloo World!")    
}

const ex2 = () => {
    console.log('Exercise 2')   
    const result = add(2, 3)
    console.log(result)   
}

const ex3 = () => {
    console.log('Exercise 3')   
    console.log(buildSentence('This', 'is', 'a', 'sentence'))
}    
   

const ex4 = () => {    
    console.log('Exercise 4')   
    const newWord = doubleIt('Hello')
    console.log(newWord)
}

const ex5 = () => {   
    console.log('Exercise 5')       
    multiply(2, 3)    
}

//1
const printMessage = (messageE1)=> console.log(messageE1)
//2
const add = (arg1,arg2) => { return arg1+arg2 }
//3
const buildSentence= (arg1, arg2, arg3, arg4) => { return arg1+" "+arg2+" "+arg3+" "+arg4 }
//4
const doubleIt= (arg1) => { return arg1+arg1 }
//5
const multiply = (arg1,arg2)=> console.log(arg1*arg2)



function main() {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
