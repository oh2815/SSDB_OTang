// JSON
// JavaScript Object Notation
/* 
{
    "name":"allie",
    "married":false,
    "family":{"father":"ddd", "mother":"ddd"}
}
*/
const car = `{
    "model":"아이오닉6",
    "company":"현대",
    "price":50000000,
    "year":2023,
    "isElectric":true,
    "option":["side mirror", "smart sensor"]
}`;
console.log(typeof car);
// JSON.parse() > JSON ---> object
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obj);
console.log(obj.model);
console.log(obj.option);

// JSON.stringify() > object ---> JSON
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

// strigify()의 세번째 인자: 들여쓰기할 공백의 크기
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model); //undefined (JSON은 문자열)
