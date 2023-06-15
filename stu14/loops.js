//
// Name: loops.js
// Date: 5/25/2023
// Desc: Demonstrates the use of loops in JavaScript.
//

const ex1 = () => {
    console.log('Exercise 1')
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
    countArrayLength(cars);
}
const ex2 = () => {
    console.log('Exercise 2')
    printMessage('Hello World!',3)
}

const ex3 = () => {
    console.log('Exercise 3')
    countDown(3)
}

const ex4 = () => {
    console.log('Exercise 4')
    const numbers = [1, 2, 3]
    console.log(addNumbers(numbers))
    

}

const ex5 = () => {
    console.log('Exercise 5')
    const animals = ['dog', 'cat', 'fish', 'bird']
    hideCat(animals)


}   

let countArrayLength=(cars)=>{
let count=0;
cars.forEach(car => {count++})
  console.log(count);
}

let printMessage=(message, count)=>{
    for(let i=0;i<count;i++)
    {
        console.log(message);
    }
 }

let countDown=(num)=>{
do {
    if(num==0){    console.log("Blast Off")}
    else if(num>0)
        console.log(num)
        num--
    }
while(num>=0)
}

let addNumbers=(numbers)=>{
    let sum =0;
    for (let i=0; i<numbers.length;i++)
    {    
         sum += numbers[i]
    }
    return sum;
    
}

let hideCat=(animals)=>{
for (let i=0;i<animals.length;i++)
{
    if(animals[i]==='cat')
    {
       animals[i]='XXX'
       console.log(animals)
    }
}
}
//
// YOUR FUNCTIONS GO HERE.
//

//
// The one and only main function.
//

const main = () => {
    ex1()
    ex2()
    ex3()
    ex4()
    ex5() // Change to ex2(), ex3(), ex4(), or ex5().
}

main()
