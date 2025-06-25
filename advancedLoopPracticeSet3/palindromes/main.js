function isPalindrom(word) {
    const newArray = [];
    for(const cha of word.toLowerCase()){
        newArray.unshift(cha)
    }
    const newWord = newArray.join("")
    return word.toLowerCase() === newWord
}

console.log(isPalindrom("madam"))
console.log(isPalindrom("racecar"))
console.log(isPalindrom("hello"))
console.log(isPalindrom("Noon"))

