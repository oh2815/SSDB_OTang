let now = new Date()
// if문
if(now.getDay()===0&&6){
    console.log("주말")
}else{
    console.log("평일")
}

// switch문
switch(now){
    case 0:
    case 6:
        console.log('주말')
        break
        default:
        console.log('평일')
}
// 삼항연산자
let day = now.getDay===0||now.getDay===6?'주말':'평일'
console.log(day)
