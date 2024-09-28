const numbers = [25, 34, 83, 24, 93, 23]

const doubleIt = numbers.map(n => n * 2)
// console.log(doubleIt)

const new1 = [];
const doubleItTwo = numbers.forEach(n => new1.push(n * 2));
// console.log(new1)

const selected = numbers.filter(num => num > 20 && num < 30)
// console.log(selected)

const findIt = numbers.find(num => num > 80)
// console.log(findIt)

const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)
