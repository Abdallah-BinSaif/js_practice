function threeParameter(number1, number2, number3) {
    const result = number1 + number2 + number3;
    return result;
}

const threeParameter2 = (number1, number2, number3) => number1 * number2 * number3;
// console.log(threeParameter2(3,4,2))

const three = function threeParameter(number1, number2, number3) {
    const result = number1 + number2 + number3;
    return result;
}
// console.log(three(3,4,2))

const printFunction = (str) => {
    for (let i = 0; i < 3; i++) {
        // console.log(str);
    }
};

const string = 'I am a web developer. I love to code. I love to eat biryani.'
printFunction(string)


const addition =(number1, number2 = 0) => number1 +number2;
// console.log(addition(23,3))

const friends = ["amir", "shourik", "sufian", "faysal", "intisar", "shohel"]
const myEvenFriends = []
const evenFriends = (friends) => {
    for(let i=0; i< friends.length ; i++){
        if (friends[i].length % 2 === 0){
            myEvenFriends.push(friends[i]);
        };
    };
};

evenFriends(friends);
// console.log(myEvenFriends)



let newArray = []
let sum = 0;
const squarArray = (arr) => {
    for (let arr1 of arr) {
        arr1 = arr1 * arr1;
        sum = sum + arr1;
    };
    const avg = sum / arr.length;
    return avg;
};
// console.log(squarArray([2,3,4]))


const maxNumber = (arr1, arr2)=>{
    let newArray = [...arr1, ...arr2];
    return Math.max(...newArray)
}
// console.log(maxNumber([3,54,4], [4,6,9]))

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
console.log(data['Sophia']['study'][1]['secondary'][1]['location'])