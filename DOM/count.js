let count = document.getElementById("count");
const counter = document.getElementById("counter");


const increaseButton = document.getElementById("increaseBtn")
const decreaseButton = document.getElementById("decreaseBtn")


counter.addEventListener("click", function(){

    if(increaseButton.getAttribute("disabled") == null){
        counter.classList.add("bg-red-400", "rounded-3xl")
        increaseButton.setAttribute("disabled", true);
        decreaseButton.setAttribute("disabled", true);

    }else {
        increaseButton.removeAttribute("disabled");
        decreaseButton.removeAttribute("disabled");
        counter.classList.remove("bg-red-400")
    }
})

increaseButton.addEventListener("click", function(event){
    let currentNumber = Number(count.innerText);
    currentNumber++;
    count.innerText = currentNumber;
    event.stopPropagation();

})
decreaseButton.addEventListener("click", function(event){
    let currentNumber = Number(count.innerText);
    currentNumber--;
    count.innerText = currentNumber;
    event.stopPropagation();
})

