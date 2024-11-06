// 1. 태그 내부 내용
/*
- inner Text
- textContent
- innerHTML
 */

let div1 = document.getElementById('div1')
console.log(div1)
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' //----- Text 그대로 나옴
// 2칸 이상의 공백문자 제거, 앞 뒤로 공백문자 제거
console.log(div1.innerText)
div1.innerHTML='     여기는 <b>첫번째</b> 태그입니다.&hearts;' //----- Tag로 읽혀서 나옴
div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' 
console.log(div1.textContent)