const originalArray = ["a", "b", "c", "d", "e"];
const reversedArray = [];

for (const value of originalArray){
    reversedArray.unshift(value)
}
console.log(reversedArray)