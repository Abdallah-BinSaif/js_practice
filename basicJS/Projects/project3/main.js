const tasks = [
  { id: 1, description: "Finish report for Q2 earnings", category: "Work", completed: false },
  { id: 2, description: "Buy milk and eggs", category: "Shopping", "completed": false },
  { id: 3, description: "Call mom for her birthday", category: "Personal", completed: true },
  { id: 4, description: "Go for a 30-minute run", category: "Fitness", completed: false },
  { id: 5, description: "Read two chapters of 'Dune'", category: "Personal Development", completed: false },
];

function addTask(description, category) {
    const newTask = {id: tasks.length + 1, description, category,completed: false}
    tasks.push(newTask)
    console.log(newTask)
}

function markTaskCompleted(taskId){
    const task = tasks.find((task) => task.id === taskId)
    if(!task){
        console.log("Task not found")
        return
    }
    const index = tasks.indexOf(task)
    if(!tasks[index].completed){
        tasks[index].completed = true
        console.log(task)
    }else{
        console.log("The task already Completed")
    }
}
function displayTask(values) {
    console.log(`ID: ${values[0]}`)
    console.log(`Description: ${values[1]}`)
    console.log(`Category: ${values[2]}`)
    console.log(`Status: ${values[3] ? "Completed":"Panding"}\n`)
}
function listTasks(filterCategory = null) {
    if(filterCategory){
        const filteredTasks = tasks.filter((task)=> task.category == filterCategory)
        // console.log(newtask)
        for(const item of filteredTasks){
            const values = Object.values(item)
            displayTask(values)            
        }
    }else{
        for(const item of tasks){
            const values = Object.values(item)
            displayTask(values)
        }
    }
}

function deleteTask(taskId) {
    const index = tasks.findIndex((item) => item.id === taskId)
    if(index > 0){
        tasks.splice(index, 1)
        console.log(tasks)
    }else{
        console.log("Task not found.")
    }
}

function getTaskSummary() {
    const totalTask = tasks.length
    const totalCompletedTask = tasks.filter(item => item.completed).length
    const totalPendingTask = tasks.filter(item => !item.completed).length
    console.log(totalTask, totalCompletedTask, totalPendingTask)
}

addTask("Schedule dentist appointment", "Health")
addTask("Prepare presentation for team meeting", "Work")
addTask("Water the plants", "Home")
markTaskCompleted(3)
markTaskCompleted(5)
markTaskCompleted(11)

listTasks()
listTasks("Work")

deleteTask(15)
getTaskSummary()
