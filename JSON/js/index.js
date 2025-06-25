
function loadApi(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
}


function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(data => displayUser(data))
    .then(data => stringObject(data))
}


function displayUser(data){
    const listContainer = document.getElementById('listcontainer')
    for(const user of data){
        const li = document.createElement('li')
        li.textContent = `user:  ${user.name}`
        listContainer.appendChild(li)
        
    }
}

const obj = {
    name : 'adf',
}

function stringObject(data){
    console.log(data[0])
    const sttjson = JSON.stringify(data[0])
    console.log(sttjson)
    console.log(JSON.parse(sttjson))
}
