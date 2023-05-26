//
// Name: strings.js
// Date: 5/25/2023
// Desc: Demonstrates the use of strings in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const word1 = '   Hello  '
    const word2 = '    World!'
    console.log(trimAndMerge(word1, word2))
}

const ex2 = () => {
    console.log('Exercise 2')
    const sentence = 'This is a test'
    const word = longestWord(sentence)
    console.log(word)
}

const ex3 = () => {
    console.log('Exercise 3')
    const array = ['a', 'b', 'c']
    console.log(convertToUpper(array))
}

const ex4 = () => {
    console.log('Exercise 4')
    const oldString  = '1,2,3,4,5,6'
    const newString = format(oldString)
    console.log(newString)
}

const ex5 = () => {
    console.log('Exercise 5')
    const sentence = 'This is a test'
    const subString = sentence.substring(10)
    console.log(subString)
}   

//
// YOUR FUNCTIONS GO HERE.
//

const format = (str) => {
    return str.replaceAll(',', ', ')
}

const convertToUpper = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    return array
}

const longestWord = (str) => {
    let array = str.split(' ')
    let longest = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i]
        }
    }
    return longest
}

const trimAndMerge = (str1, str2) => {
    return `${str1.trim()} ${str2.trim()}`
}


//
// The one and only main function.
//

const main = () => {
    ex1() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
