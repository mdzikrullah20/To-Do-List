let input =  document.querySelector("#input")
let btn  =  document.querySelector("#add")


function addList(){
    let li = document.createElement("li")
    let append =  document.querySelector("ul")

    li.innerText = input.value
    append.appendChild(li)
    input.value = ""
    deleteList(li)
}
function deleteList(li){
   let deleteBtn = document.createElement("button")
   deleteBtn.textContent = "Delete"
   li.appendChild(deleteBtn)
   deleteBtn.addEventListener("click", ()=>{
    li.remove()
    deleteBtn.setAttribute("class","dbtn")
   })
   li.appendChild(deleteBtn)
}

btn.addEventListener("click",()=>{
    addList()
})

