# Control Flow
Submit a PR for each exercise. Include the number of the exercise(s) in the title of the PR.

Update `control-flow.js` in your student directory for all these exercises.

## Ex 1
Update the arrow function: `ex1()` to call a function named: `message()`.

Example Usage:
```
console.log(message('log in'))
console.log(message('log out'))
```

Output:
```
hello
goodbye
```

## Ex 2
Update the arrow function: `ex2()` to call a function named: `calculate()`.  This function accepts three arguments.  The first argument is the type of mathematical operation to perform (add or subtract).  The second and third arguments represent the values to pass into the function. 

Example Usage:
```
const addResult = calculate('add', 2, 3)
const subResult = calculate('subtract', 10, 3)
console.log(addResult)
console.log(subResult)
```

Console Output:
```
5
7
```

## Ex 3
Update the arrow function: `ex3()` to call a function named: `dayOfWeek()`.  This function returns:
 - 1 for Monday
 - 2 for Tuesday
 - 3 for Wednesday
 - 4 for Thursday
 - 5 for Friday
 - 6 for Saturday
 - 7 for Sunday
 - Invalid day for a day that is not a day of the week.

Example Usage:
```
console.log(dayOfWeek('Monday'))
console.log(dayOfWeek('Tuesday'))
console.log(dayOfWeek('Wednesday'))
console.log(dayOfWeek('Hump day'))
```

Output:
```
1
2
3
Invalid day
```

## Ex 4
Update the arrow function: `ex4()` to call a function named: `convertNumberToText()`.  This function returns a string based on the number passed into it:
- ONE for 1
- TWO for 2
- THREE for 3

Example Usage:
```
console.log(convertNumberToText(1))
console.log(convertNumberToText(2))
console.log(convertNumberToText(3))
```

Output:
```
ONE
TWO
THREE
```

## Ex 5
Update the arrow function: `ex5()` to call a function named: `testButton()`.  This accepts a button Id and a button text as arguments.  This function returns "Pass" if the button Id and button text are equal to "1" and "Login".  Else, this function returns "Fail".

Example Usage:
```
console.log(testButton("1", "Login"))
console.log(testButton("1", "Logout"))
```

Output:
```
Pass
Fail
```
