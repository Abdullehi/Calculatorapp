const result = document.getElementById('result')


function display(num){
    result.value = result.value+num
}

function finalresult(){
    result.value = eval(result.value)
}

function cleam(){
    result.value=""
}

function deletr(){
    result.value= result.value.slice(0, -1)
}