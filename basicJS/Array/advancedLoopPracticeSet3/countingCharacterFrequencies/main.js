const sentence = "The quick brown fox jumps over the lazy dog";
const character = {}
for (const cha of sentence.toLowerCase()){
    if(cha == " ") {
        continue
    }
    if(character[cha]){
        character[cha]++
    }else{
        character[cha] = 1
    }
}
console.log(character)