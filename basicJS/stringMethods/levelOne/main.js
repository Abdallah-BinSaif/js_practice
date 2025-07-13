// 1
const myString = "Learning JavaScript is fun!";
console.log(myString.length)

// 2
let returnString 
returnString = myString[8]
console.log(returnString)
returnString = myString.charAt(0)
console.log(returnString)
returnString = myString.at(-1)
console.log(returnString)

// 3
let upperString = myString.toUpperCase()
console.log(upperString)
let lowerString = myString.toLowerCase()
console.log(lowerString)

// 4
let index = myString.indexOf("JavaScript")
console.log(index)
let lastIndex = myString.lastIndexOf("n")
console.log(lastIndex)
let isInclude = myString.includes("fun")
console.log(isInclude)

// 5
let startString = myString.startsWith("Learning")
console.log(startString)
let endString = myString.endsWith("fun!")
console.log(endString)
let startFrom = myString.startsWith("JavaScript", 9)
console.log(startFrom)
