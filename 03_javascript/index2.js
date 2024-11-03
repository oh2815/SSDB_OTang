/*
자료형의 종류
- string(문자열), number(숫자), boolean, null, undefined
- object(객체), array(배열)
*/
// 

// 1. string
let myName = "allie"
let email='[allie@naver.com]'
console.log(myName)
console.log(email)

// 문자와 변수를 동시에 써보기
console.log('내 이름은', myName)
// let bbbb = '내 이름은', myName
let aaaa = '내 이름은 ' + myName+'이고, 이메일은 '+email+'입니다.'
let bbbb = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`
console.log(aaaa)
console.log(bbbb)

// 2. number
let number=123
let opacity=0.7
console.log(number)
console.log(opacity)

console.log(number + opacity)
console.log(number - opacity)

console.log("apple"-3) //NaN(Not a Number)

// 3. boolean
// true, false 둘 중의 하나의 값
let checked = true
let isShow = false

console.log(checked)
console.log(isShow)

// 4. undefined
// 값이 없는 상태
let undef;
let obj={
    abc:123
}
console.log(undef)
console.log(obj.abc)
console.log(obj.efg)

// 5. null, 빈 값!
let empty = null;
console.log(empty)

// 6. array, 배열

let fruits =["orange","apple",'banana','mango']
let fruits2= new Array("orange","apple",'banana','mango')

console.log(fruits[3])
console.log(fruits2[1])

// 여러 데이터 타입을 하나의 배열에 넣을 수 있음
let data = [1, true, null, "string", 100]
console.log(data[0], data[4])

// 2차원 배열
let korean=[["가","갸","거","겨"],
            ["나","냐","너",'녀'],
            ["다","댜","더","뎌"]]

console.log

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0] + letters[1][3], letters[0][1], [0][3], [2][2])

//8뽑기
const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1])

// 7.object 타입
// 키:값의 쌍으로 이루어져 있음
let cat ={
    name:'나비',
    age:1,
    gended:'F',
    isCute:true
}

console.log(cat.name)
console.log(cat.isCute)
cat.like =['tuna','쥐']

// 접근방법2-대괄호 접근법!
console.log(cat["name"])
cat["parent"]="초롱이"
console.log(cat)

//자료형 확인! type of
console.log('---------------')
let und;
console.log(typeof "문자")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof {})//object
console.log(typeof null)//object
console.log(typeof und)//object
console.log(typeof NaN)//number
console.log(typeof function(){})//function
