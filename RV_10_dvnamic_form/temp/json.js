// JSON
// JavaScript Object Notation
/* 
{
    "name":"allie",
    "married":false,
    "family":{"father":"ddd", "mother":"ddd"}  ---- 객체형태로 넣을 때에도 "" 큰따음표를 적어야 한다. 
}
*/

const car = `{            // key이름이 문자열이라고해서 값도 다 문자열은 아니다.
    "model":"아이오닉6",   // 문자열
    "company":"현대",      // 문자열
    "price":50000000,      
    "year":2023,          
    "isElectric":true,     
    "option":["side mirror", "smart sensor"] // 배열
}`;
console.log(typeof car);
// JSON.parse() > JSON ---> object
const obj = JSON.parse(car); // 이 메소드를 통해서 JASON을 object로 바꿔줌.
console.log(obj);
console.log(typeof obj); // type이 뭔지
console.log(obj.model);
console.log(obj.option);
// 여기서 car는 JSON이었지만 obj는 object다

// JSON.stringify() > object ---> JSON 변환
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

const carJson2 = JSON.stringify(obj, null, 5);
// strigify()의 세번째 인자: 들여쓰기할 공백의 크기
console.log(carJson2);
console.log(carJson2.model); //undefined (JSON은 문자열)
