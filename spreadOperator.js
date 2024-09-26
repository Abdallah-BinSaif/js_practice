const human = {
    'person1': {
      "name": 'anabia',
      'age': 45,
    },
    'person2': {
      'name': 'abdallah',
      'age': 28,
    },
    'person3': {
      'name': 'akhi akter',
      'age': 21,
    }
  }

const shallowHuman = {...human}
console.log(shallowHuman)


const {person1, ...remainingHumen} = human;
console.log(person1)
console.log(remainingHumen)


// const person1 = {
//     'name': 'abdallah',
//     'age': 28,
// }
// const person2 = {
//     'name': 'abur rahman',
//     'age': 21,
// }
//updating
// const persons = {...person1, ...person2}
// console.log

const job = {
    'role': 'programmer',
    'company': 'tech corp',
}
const location = {
    'city': 'dhaka',
    'country': 'bangladesh'
}
//marging
// const personProfile = {...person1, ...job, ...location}
// console.log(personProfile)