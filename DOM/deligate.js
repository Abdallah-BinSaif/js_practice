const items = document.getElementsByClassName("item")
for (const item of items) {
    item.addEventListener("click", function(event){
        // event.target.parentNode.removeChild(event.target);
    })
}
document.getElementById("li-container")
.addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById("btn-new-item")
.addEventListener("click", function(){
    const ulContainer = document.getElementById("li-container");
    const newList = document.createElement("li");
    newList.innerText = "Brand new item added";
    ulContainer.appendChild(newList);

})