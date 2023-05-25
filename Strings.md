# Data Types & Variables
Submit a PR for each exercise. 

Update `strings.js` in your student directory for all these exercises.

## Ex 1
Update the arrow function: `ex1()` to call a function named: `trimAndMerge()`.  This function accepts two arguments and returns a nicely formated string without the leading and trailing whitespaces.

Example usage:
```
const word1 = '   Hello  '
const word2 = '    World!'
console.log(trimAndMerge(word1, word2))
```

Output:
```
Hello World!
```

## Ex 2
Update the arrow function: `ex2()` to call a function named: `longestWord()`.  This function accepts one argument and returns the longest word from a sentence.

Example usage:
```
const sentence = 'This is a test'
const word = longestWord(sentence)
console.log(word)
```

Output:
```
This
```

## Ex 3
Update the arrow function: `ex3()` to call a function named: `convertToUpper()`.  This function accepts one array and returns the uppercase value for each item in the array.

Example usage:
```
const array = ['a', 'b', 'c']
console.log(convertToUpper(array))
```

Output:
```
[ 'A', 'B', 'C' ]
```

## Ex 4
Update the arrow function: `ex4()` to call a function named: `format()`.  This function accepts one argument and adds a space after each comma.

Example usage:
```
const oldString  = '1,2,3,4,5,6'
const newString = format(oldString)
console.log(newString)
```

Output:
```
1, 2, 3, 4, 5, 6
```

## Ex 5
Consider the following line of code:
```
const sentence = 'This is a test'
```
Update the arrow function: `ex5()` to use the substring() method to parse the last word of the sentence.

Output:
```
test
```
