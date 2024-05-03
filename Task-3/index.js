let result = document.querySelector("#result")

function create(e){
    e.preventDefault()
    let array = e.target[0].value.split("")
    let count1 = 0
    let count2 = 0

    array.forEach((e)=>{
        if(e == "("){
            count1++
        }else if(e == ")"){
            count2++
        }
    })

    if(count1 && count2){
        if(count1 == count2){
            result.textContent = "True"
        }else{
            result.textContent = "False"
        }
}else{
    result.textContent = "False"
}

}