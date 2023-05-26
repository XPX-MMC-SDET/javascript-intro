# Objects
Submit a PR for each exercise. Include the number of the exercise(s) in the title of the PR.

Update `objects.js` in your student directory for all these exercises.

## Ex 1
Given the following properties for a car:

- id: 1
- make: Ford
- model: F150
- year: 2020
- price: 25000

Update the arrow function: `ex1()` to create a car object and display it's contents on the console.  Also, display the keys for this object on the console:

Output:
```
{ id: 1, make: 'Ford', model: 'F150', year: 2020, price: '25000' }
[ 'id', 'make', 'model', 'year', 'price' ]
```

## Ex 2
In JavaScript, we can dynamically push content to arrays at runtime using the `push()` method:

```
const array = []
array.push(1)
array.push(2)
array.push(3)
```

Update the arrow function: `ex2()` to push three people objects to an array and display the contents of the array on the console:

Output:
```
[
  { firstName: 'Alice' },
  { firstName: 'Bob' },
  { firstName: 'Charlie' }
]
```

## Ex 3
Given the following person objects:
```
const person1 = { id: 1, salary: 60000}
const person2 = { id: 2, salary: 30000}
const person3 = { id: 3, salary: 10000}
```

Update the arrow function: `ex3()` to add these person objects to an array.  Pass this array into a function called `calculateSalary()`.  This function accepts an array of person objects and returns the total salary of all the people.

Example Usage:
```
const result = calculateSalary(array)
```

Console output:
```
100000
```

## Ex 4 
Update the arrow function: `ex4()` to call a function: `addNumbers()`.  This function accepts two arguments and returns an object that contains that values passed into the function, the result, and the type of mathmatical operation that was applied.

Example Usage:
```
console.log(addNumbers(2, 3))
```

Output:
```
{ operand1: 2, operand2: 3, result: 5, action: 'add' }

```

## Ex 5
Update the arrow function: `ex5()` to call a function: `calcNumbers()`.  This function accepts three arguments.  The first argument is the mathmatical operation to perform (Add or Substract).  The second and third arguments contain the operands.

Example usage:
```
console.log(calcNumbers("Add", 2, 3))
console.log(calcNumbers("Substract", 5, 2))
```

Output:
```
{ operand1: 2, operand2: 3, result: 5, action: 'Add' }
{ operand1: 5, operand2: 2, result: 3, action: 'Substract'}
```
