//
// Name: control-flow.js
// Date: 5/25/2023
// Desc: Demonstrate control flow in JavaScript.
//

const ex1 = () => {
    console.log(message('log in'))
    console.log(message("log out"))
}

const ex2 = () => {
    const addResult = calculate('add', 2, 3)
    const subResult = calculate('substract', 10, 3)
    console.log(addResult)
    console.log(subResult)

}

const ex3 = () => {
    console.log(dayOfWeek('Monday'))
    console.log(dayOfWeek('Tuesday'))
    console.log(dayOfWeek('Wednesday'))
    console.log(dayOfWeek('Hump day'))

}

const ex4 = () => {
    console.log(convertNumberToText(1))
    console.log(convertNumberToText(2))
    console.log(convertNumberToText(3))

}

const ex5 = () => {
    console.log(testButton("1", "Login"))
    console.log(testButton("1", "Logout"))
}

//
// YOUR FUNCTIONS HERE
//

const message = (msg) => {
    if (msg === "log in") 
        return "hello"
    else if (msg === "log out")
        return "goodbye"
    else
        return "not valid"
}

const calculate = (op, n1, n2) => {
    if (op === "add") {
        const result = n1+n2
        return result
    } else if (op === "substract") {
        const res = n1-n2
        return res
    } else return "not valid"
}

const dayOfWeek = (day) => {
    let number;

    switch (day) {
      case "Monday":
        number = 1;
        break;
      case "Tuesday":
        number = 2;
        break;
      case "Wednesday":
        number = 3;
        break;
      case "Thursday":
        number = 4;
        break;
      case "Friday":
        number = 5;
        break;
      case "Saturday":
        number = 6;
        break;
      case "Sunday":
        number = 7;
        break;
      default:
        number = "Invalid day for a day that is not a day of the week.";
    }
  
    return number;
}

const convertNumberToText = (num) => {
    let a 
    switch (num) {
        case 1:
            a = "ONE"
            break;
        case 2:
            a = "TWO"
            break
        case 3:
            a = "THREE"
            break

        default:
            a = "Type 1-3"
            break;
    }
    return a
}

const testButton = (bId, bText) => {
    if (bId === "1" && bText === "Login") 
        return "Pass"
    else return "Fail"
}

//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
