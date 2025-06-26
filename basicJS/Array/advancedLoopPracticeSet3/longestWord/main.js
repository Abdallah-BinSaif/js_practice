const text = "JavaScript is a wonderful language for web development";
let longestWord = ""

for(const word of text.split(" ")){
    if(word.length > longestWord.length){
        longestWord = word
    }
}

console.log(longestWord)