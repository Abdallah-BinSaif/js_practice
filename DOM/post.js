document.getElementById("post").addEventListener("click", function(){
    const comment = document.getElementById("text-area").value;
    const p1 = document.createElement("p")
    p1.innerText = comment
    document.getElementsByTagName("div").item(0).appendChild(p1)
    document.getElementById("text-area").value = ""
  })

