//
// Name: functions.js
// Date: 5/25/2023
// Desc: Demonstration of functions in JavaScript.
//

const ex1 = () => {
    
    const printMessage = (messageE1)=> console.log(messageE1)
    printMessage("Helloo World!")
    
}

const ex2 = () => {
    const add = (arg1,arg2) => { return arg1+arg2 }
    const result = add(2, 3)
    console.log(result)   
}

const ex3 = () => {
    
    const buildSentence= (arg1, arg2, arg3, arg4) => {
        return arg1+" "+arg2+" "+arg3+" "+arg4
    }

    console.log(buildSentence('This', 'is', 'a', 'sentence'))

}
    
   

const ex4 = () => {
    
    const doubleIt= (arg1) => {
        return arg1+arg1
    }
    const newWord = doubleIt('Hello')
    console.log(newWord)
    

}

const ex5 = () => {
    
    const multiply = (arg1,arg2)=> console.log(arg1*arg2)
    multiply(2, 3)
    
}



const practice1 = () =>{

    const changeStuff = (a,b,c) =>
    {
        a = a *10
        b.firstName = "RODRIGO"
        c = { firstName: "Antonio"}
    }

    let num = 10;
    let person1 = { firstName: "Rodrigo"}
    let person2 = { firstName: "Mathias"}

    changeStuff(num, person1, person2)

    console.log(num)
    console.log(person1.firstName)
    console.log(person2.firstName)

}



function main() {
    ex4() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
