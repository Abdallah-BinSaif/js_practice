const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => {
    let c = a-b
    console.log(`A:${a}, B: ${b} = ${c}`)
    return a-b

});
console.log(array1);