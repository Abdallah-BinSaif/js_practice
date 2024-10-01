function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUser(data))
}


function displayUser(data){
    
    const postContainer = document.getElementById('post-container')
    for (const post of data){
        const div = document.createElement("div");
        console.log(post)
        div.innerHTML = `
            <h3>user: ${post.userId}</h3>
            <h5>Post title: ${post.title}</h5>
            <p>Post description: ${post.body}</p>
        `
        postContainer.appendChild(div)
        console.log(div)
    }
};

function anotherfunction(){
    const fdata = fetchData()
    console.log(fdata)
}