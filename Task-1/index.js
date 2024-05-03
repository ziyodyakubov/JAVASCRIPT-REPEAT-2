let inputcr = document.querySelector("#inputcr")
let result = document.querySelector("#result")

inputcr.addEventListener('change', (e) => {
    let textarea = document.querySelector("#textarea").value
    let first = textarea.split(" ")
    
    
    let inputValue = e.target.value

    if(first.includes(inputValue)){
        result.textContent = "True"
        result.classList.remove("hidden")
        result.classList.toggle("text-[blue]")
        console.log(true)
    }else{
        result.textContent = "False"
        result.classList.remove("hidden")
        result.classList.toggle("text-[red]")
        console.log(false)
    }
})