/* 1. if */
/* 
if(조건식){
    조건식이 참일 때 실행할 문장
}
*/

if(5>3){
    console.log('조건이 참입니다.')
}

// let number = Number(prompt('숫자를 입력해주세요.'));
let number =100

if(number > 10){
    console.log('입력받은 수가 10보다 큽니다.')
}else{
    console.log('입력받은 수가 10과 같거나 작습니다.')
}

if(number > 10){
    console.log('입력받은 수가 10보다 큽니다.')
}else if(number===10){
    console.log('입력받은 수가 10입니다.')
}else{
    console.log('입력받은 수가 10과 작습니다.')
}

// 90점 이상은 A (90 ~ 100)
// 80점 이상은 B (80 ~ 89.9999..)
// 70점 이상은 C (70 ~ 79.9999..)
// 그 아래는 모두 F
// 90 < number < 100
if(number >= 90 && number <= 100){
    console.log('A')
}else if(number >= 80 ){
    console.log('B')
}else if(number >= 70 ){
    console.log('C')
}else {
    console.log('F')
}

/* 조건문 중첩 */
let userId = 'user01'
let userPw = '1234qwer'

function loginUser(){
    let promptId = prompt('아이디를 입력해 주세요')
    let promptPw = prompt('패스워드를 입력해 주세요')

    if(userId === promptId){
        if(userPw ===promptPw){
            console.log('로그인 성공')
            alert('안녕하세요')
        }else{
            alert("비밀번호 틀림")
        }    
    }else if(promptID===''){
        alert('아이디를 입력하지 않았습니다')
    }else{
        alert('아이디가 틀렸어요..')
    }
}
// loginUser()

//  2. switch문

// let  a = Number(prompt('숫자를 입력해주세요'))
let a = 5
// switch의 괄호에는 조건이 아닌 값이 들어감
switch(a){
    // case에는 값에 대한 경우가 들어감
    case 3:
        console.log('a가 3입니다.')
        break
    case 4:
        console.log('a가 4입니다.')
    break
    case 5: // case 연속으로 가능 
    case 6:
        console.log('a가 5,6입니다.')
        break
    default:
        console.log('a가 어떤 숫자인지 모르겠어요.')
}

// 3.삼항연산자 -> if - else 간단하게
let num = 5
if(num%2===1){
    console.log('홀')
}else{
    console.log('짝')
}

// 조건? 참일때 : 거짓일 때 ;
num%2===1?console.log ('홀수'):console.log('짝수')

let fruit = 'banana'
const value =  fruit==="banana"?"yellow":"red"
console.log(value)

if(fruit==="banana"){
    value2="yellow"
}else{
    value2="red"
}
console.log(value2)