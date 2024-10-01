
function loadApi(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
}


function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data))
}


function displayUser(data){
    console.log(data)
    const listContainer = document.getElementById('listcontainer')
    for(const user of data){
        const li = document.createElement('li')
        li.textContent = `user:  ${user.name}`
        console.log(li)
        listContainer.appendChild(li)
        
    }
}