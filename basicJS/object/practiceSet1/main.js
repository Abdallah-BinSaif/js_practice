// 1.1 
const student = {
    name: "Alice",
    age: 20
}
student.major = "Computer Science"
student.gpa = 3.8
student["isEnrolled"] = true
console.log(student)

// 1.2
const product = {name: "Laptop", price: 1200, inStock: true}
product.price = 1150
product.inStock = false
product.price += 50
console.log(product)

// 1.3
const user = {
    username: "jsuser",
    email: "js@example.com",
    isActive: true,
    lastLogin: "2025-06-25"
};
delete user.lastLogin
delete user["isActive"]
console.log(user)

// 1.4
const settings = {
    theme: "dark"
};
let newSetting = "fontSize";
settings[newSetting] = "medium";
newSetting = "theme"
settings[newSetting] = "light";
console.log(settings)

// 1.5
const task = {
    id: 1,
    description: "By groceries",
    completed: false,
};
task.completed = true
task.dueDate = "2025-06-30"
delete task.id
task["priority"] = "High"
console.log(task)
