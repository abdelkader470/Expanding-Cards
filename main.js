const panels= document.querySelectorAll(".panel")
panels.forEach((panal)=>{
    panal.addEventListener("click",()=>{
        removeActiveClass ()
        panal.classList.add("active")
    })
})

function removeActiveClass (){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}