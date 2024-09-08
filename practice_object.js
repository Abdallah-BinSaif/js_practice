/**
 * P1 ---->
 */
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
};

 // //  Dot Notation
 //console.log(colors['red'])
 
 //      Bracket Notation 
 
// console.log(colors['golden rod'])

//  //  Using for loop
//  for (const key in colors) {
//      console.log(`${key} | ${colors[key]}`)
//  }


// const values = Object.entries(colors)
// console.log(values)


/**
 * 
 * 
 * P2 ---->
 * 
 * 
 */
const car = {
    make: "Toyota",
    model : "Corolla",
    year: 2020
}
// car.passenger = 5;
car['passenger'] = 5;
// console.log(car)


/**
 * 
 *  P3 ------->
 * 
 */


const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30,
        attendence: '80%'
    }
};

// console.log(students["physics"]["marks"])

/**
 * 
 * // P4 ----->
 * 
 */

let student = {
    name: "Ariana Grande",
    age: 21,
    city: "Gaibandha",
    isStudent: true
};

// console.log(Object.keys(student).length)
// console.log(Object.keys(students["physics"]).length)

/**
 * 
 * P5 ----->
 * 
 */

let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true
};

for (const key in myObject) {

    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
}

