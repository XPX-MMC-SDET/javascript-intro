# Classes
Submit a PR for each exercise. Include the number of the exercise(s) in the title of the PR.

Update `classes.js` in your student directory for all these exercises.

## Ex 1
Update the arrow function: `ex1()` in instantiate a Person class.  The Person class accepts two arguments into it's constructor: The first name of the person, and the age of the person.  The Person class has a method called `greet()` that returns a string with the following greeting:

Example Usage:
```
const p1 = new Person('John', 30)
console.log(p1.greet())
```

Output:
```
Hello, my name is John and I am 30 years old.
```

## Ex 2
Given the following Person objects:

```
const p1 = new Person('Alice', 30)
const p2 = new Person('Bob', 20)
const p3 = new Person('Charlie', 25)
```

Update the arrow function: `ex2()` to call a function: `calcAverageAge()`.  This function takes an array of Person objects and returns the average age of all the people in the array.

Example Usage:
```
const avgAge = calcAverageAge(people)
console.log(`Average age: ${avgAge}`)
```

Output:
```
Average age: 25
```

## Ex 3
Update the arrow function: `ex3()` to instantiate a Calculator class.  The constructor of this class accepts two arguments: operand 1 and operand 2.  The Calculator class has one method that returns the sum of the operands.

Example Usage:
```
const myCalculator = new Calculator(1,3)
console.log(myCalculator.add())
```

Output:
```
4
```

## Ex 4
Update the Calculator class to include subtract, multiply and divide methods.


Example Usage:
```
const myCalculator = new Calculator(10,2)
console.log(myCalculator.substract())
console.log(myCalculator.multiply())
console.log(myCalculator.divide())
```

Output:
```
8
20
5
```

## Ex 5
Update the `divide()` method in the Calculator class to return the text: "Cannot divide by zero" when a zero is passed into the divide method.

Example Usage:
```
const myCalculator = new Calculator(10, 0)
console.log(myCalculator.divide())
```

Output:
```
Cannot divide by zero.
```

