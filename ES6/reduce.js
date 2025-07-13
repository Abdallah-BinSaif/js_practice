
const people = [
    {name: "Alice", age: 30, city: "New York"},
    {name: "Bob", age: 34, city: "London"},
    {name: "Charlie", age: 36, city: "New York"},
    {name: "David", age: 23, city: "London"},
]

const peopleCity = people.reduce((acc, person) => {
    const city = person.city;
    if(!acc[city]) {
        acc[city] = [];
    }
    acc[city].push(person);
    return acc;
},{})
console.log(peopleCity)
