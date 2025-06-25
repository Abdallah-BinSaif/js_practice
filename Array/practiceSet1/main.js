// 1.1 adding to the end
const colors = ["red", "green", "blue"]
colors.push("yellow", "purple")
console.log(colors)

// 1.2 removing from the end
const stack = ["A", "B", "C", "D"];
stack.pop()
console.log(stack)

// 1.3 adding to the beginning
const fruits = ["banana", "cherry"]
fruits.unshift("apple", "orange")
console.log(fruits)

// 1.4 removing from the beginning
const queue = ["first", "second", "third", "fourth"]
queue.shift()
console.log(queue)

// 1.5 combining 
const myList = [];
myList.unshift("item1")
myList.push("item2")
myList.unshift("item3")
myList.shift()
myList.push("item4")
console.log(myList)