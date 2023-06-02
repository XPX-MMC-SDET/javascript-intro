//
// Name: control-flow.js
// Date: 5/25/2023
// Desc: Demonstrate control flow in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    console.log(message('log in'))
    console.log(message('log out'))
}

const ex2 = () => {
    console.log('Exercise 2')
    const addResult = calculate('add', 2, 3)
    const subResult = calculate('subtract', 10, 3)
    console.log(addResult)
    console.log(subResult)

}

const ex3 = () => {
    console.log('Exercise 3')
    console.log(dayOfWeek('Monday'))
    console.log(dayOfWeek('Tuesday'))
    console.log(dayOfWeek('Wednesday'))
    console.log(dayOfWeek('Hump day'))

}

const ex4 = () => {
    console.log('Exercise 4')
    console.log(convertNumberToText(1))
    console.log(convertNumberToText(2))
    console.log(convertNumberToText(3))

}

const ex5 = () => {
    console.log('Exercise 5')
    console.log(testButton("1", "Login"))
    console.log(testButton("1", "Logout"))

}

//
// YOUR FUNCTIONS HERE
//

const message = (arg1) => { 
    if (arg1 == 'log in'){ 
        return "hello"
    } else if (arg1 == 'log out'){
        return "goodbye"
    }
}

const calculate = (arg1, arg2, arg3) => { 
    if (arg1 == 'add'){ 
        return arg2+arg3
    } else if (arg1 == 'subtract'){
        return arg2-arg3
    }
}


const dayOfWeek = (arg1) => {
    switch(arg1){
        case "Monday":
            return 1;
            break;

        case "Tuesday":
            return 2;
            break;

        case "Wednesday":
            return 3;
            break;

        case "Thursday":
            return 4;
            break;

        case "Friday":
            return 5;
            break;

        case "Saturday":
            return 6;
            break;

        case "Sunday":
            return 7;
            break;

        default:
            return "Invalid day for a day that is not a day of the week.";
    }

}

const convertNumberToText = (arg1) => {
    switch(arg1){
        case 1:
            return"ONE";
            break;

        case 2:
            return "TWO";
            break;

        case 3:
            return "THREE";
            break;

        default:
            return "Valid number not inserted";
    }
}

const testButton = (arg1,arg2) => {
    if(arg1 == 1 && arg2 == 'Login'){
        return "Pass"
    }else{
        return "Fail"
    }
}

//
// The one and only main function.
//

const main = () => {
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
