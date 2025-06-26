const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
};

// 1.1
const keys = Object.keys(book)
console.log(keys)

// 1.2
const values = Object.values(book)
console.log(values)

// 1.3
const entries = Object.entries(book)
console.log(entries)

// 1.4
const temperatures = {
    monday: 25,
    tuesday: 28,
    wednesday: 26,
    thursday: 27,
    friday: 29,
};
const dayes = Object.keys(temperatures)
for(const day of dayes){
    console.log(day)
}
const temps = Object.values(temperatures)
for(const temp of temps){
    console.log(temp)
}
const dayesTemps = Object.entries(temperatures);
for(const dayTemp of dayesTemps){
    console.log(`${dayTemp[0]}: ${dayTemp[1]}^C`)
}

// 1.5
const defaults = {
    theme: "dark",
    fontSize: 16,
    notifications: true,
}
const userPreferences = {
    fontSize: 18,
    notifications: false,
}
const finalSettings = Object.assign({}, defaults, userPreferences)
console.log(finalSettings, defaults)
const adminOverrides = {theme: "light"}
const allSettings = Object.assign({}, defaults, userPreferences, adminOverrides)
console.log(allSettings)

// 1.6
const PI_DATA = {value: 3.14159, unit: "raduans"}
Object.freeze(PI_DATA)
PI_DATA["value"] = 3.1416
PI_DATA["accuracy"] = 99
console.log(PI_DATA)
