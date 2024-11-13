let val1 = document.querySelector('#value1')
let val2 = document.querySelector('#value2')
let operator = document.querySelector('#operator')
let result = document.querySelector('#result')

function cal() {

    let num1 = Number(val1.value)
    let num2 = Number(val2.value)
    let opt = operator.value
    let sum = 0

    if(opt==='+'){
        sum = num1 + num2
    }else if(opt==='-'){
        sum = num1 - num2
    }else if(opt==='*'){
        sum = num1 * num2
    }else if(opt==='/'){
        sum = num1 / num2
    }

    result.value = sum
}

function resetInput(){
    let form = document.querySelector('form')
    form.reset()
}
