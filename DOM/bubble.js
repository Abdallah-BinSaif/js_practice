document.getElementById("item-2")
.addEventListener("click", function(event){
    console.log("item-2 first li clicked")
    
})
document.getElementById("item-2")
.addEventListener("click", function(event){
    event.stopImmediatePropagation();
    console.log("item-2 second li clicked")
})
document.getElementById("item-2")
.addEventListener("click", function(event){
    console.log("item-2 third li clicked")
})

document.getElementById("li-container")
.addEventListener("click", function(event){
    console.log("li container clicked")
    event.stopPropagation();
})

document.getElementById("ul-container")
.addEventListener("click", function(){
    console.log("ul container clicked")
})

document.getElementById("body")
.addEventListener("click", function(){
    console.log("html body section clicked")
})