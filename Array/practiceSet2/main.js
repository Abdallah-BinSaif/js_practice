const animals = ["cat", "dog", "elephant", "cat", "fish"]
// 2.1 finding an Element's Position
console.log(animals.indexOf("dog"))
console.log(animals.indexOf("cat"))
console.log(animals.indexOf("zebra"))
console.log(animals.indexOf("cat",2))

// 2.1 checking for Element Existence
console.log(animals.includes("elephant"))
console.log(animals.includes("bird"))
console.log(animals.includes("Cat"))

// 2.3 adding/removing/replacing
const fruits = ["apple", "banana", "cherry", "date", "elderberry"]

fruits.splice(fruits.indexOf("cherry"), 1)
console.log(fruits)
fruits.splice(1,0,"grape","kiwi")
console.log(fruits)
fruits.splice(fruits.indexOf("date"),1, "fig")
console.log(fruits)

// 2.4 Extracting aportion
const numbers = [10, 20, 30, 40, 50, 60, 70];
const middleNumbers = numbers.slice(2,6)
console.log(middleNumbers)
const lastThree = numbers.slice(-3)
console.log(lastThree)
const numbersCopy = numbers.slice()
console.log(numbersCopy)

// 2.5 
const cart = ["milk", "bread", "eggs", "cheese", "yougur"];
cart.splice(cart.indexOf("eggs"),1)
cart.splice(cart.indexOf("cheese"),1)
console.log(cart)

const firstTwo = cart.slice(0, 2)
console.log(firstTwo)
const lastOne = cart.slice(-1)
console.log(lastOne)
const summaryItems = [...firstTwo, ...lastOne]
console.log(summaryItems)
