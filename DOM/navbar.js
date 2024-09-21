const uls = document.getElementById("navbar");
const lists = uls.getElementsByTagName("li");

let previus = null;

for(const singleList of lists){
    singleList.addEventListener("click", function(){
        if(previus == null){
            singleList.classList.add("bg-orange-400");
            previus = singleList;
        }else{
            previus.classList.remove("bg-orange-400");
            previus = singleList;
            singleList.classList.add("bg-orange-400")
        }
    })
}