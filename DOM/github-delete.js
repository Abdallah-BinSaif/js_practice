document.getElementById("delete-input").addEventListener("keyup", function(event){
    const text = event.target.value
    if(text === "delete") {
        document.getElementById("btn-delete").removeAttribute("disabled")
    }else {
        document.getElementById("btn-delete").setAttribute("disabled", true)
    }
})
document.getElementById("btn-delete").addEventListener("click",function(){
    document.getElementById("secret-info").style.display = "none"
})