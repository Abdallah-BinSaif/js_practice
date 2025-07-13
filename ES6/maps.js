const numbers = [25, 34, 83, 24, 93, 23]

const hello = numbers.map((item, idx, arr)=> {
    console.log(idx)
    console.log(arr)
    return arr[idx]
})
console.log(hello)