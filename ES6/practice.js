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
// console.log(data['Sophia']['study'][1]['secondary'][1]['location'])

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

// console.log(students['2222']['address']['city'])
// console.log(students['3333']['name'])


let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

// console.log(data2['data'][0]['bookDetails']['name'])
// console.log(data2['data'][1]['bookCategory'])


const oddArray = [1,3,5,7,9];
const evenArray = []
for(const array of oddArray){
    if(array % 2 === 1){
        evenArray.push(array+1);
    }
}
// console.log(evenArray)

const evenArray2 = oddArray.map(num => num++);
// console.log(evenArray2)


const numbers = [33, 50, 79, 78, 90,101, 30];

const divisibleByTen = numbers.filter(num => num%10 === 0)

// console.log(divisibleByTen)


const instructors = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Aki', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]
const seniorInstructor = instructors.filter(singleInstructor => singleInstructor["position"] === "Senior")
console.log(seniorInstructor)