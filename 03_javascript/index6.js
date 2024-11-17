// 문자열에서 사용하는 속성과 메소드
// lenth
//toUpperCase, toLowerCase, trim, indexof, slice, replace, repalceAll, repeat, split

let str1 = "strawberry Moon"
let str2 = "   strawberry Moon"

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

//sonny

console.log(str1[0])
console.log(str1[13])
console.log(str1[14])
console.log(str1[14])
console.log(str1[9]) // 개별적으로 뽑기
console.log(str1[0] + str1[13] + str1[14] + str1[14] + str1[9] + str1[0]) // 단어로 뽑기


//length 속성
console.log(str1.length)
console.log(str1.length)

//메서드 사용해보기
//문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim()) //공백제거
console.log(str2.trim().length) //공백제거+글자수

console.log(str1.toLowerCase()) //소문자
console.log(str1.toUpperCase()) //대문자

//indexOf, charAt, slice
let fruit = "applemango"
//indexOf:  내가 찾고 싶은 문자열의 인덱스 번호 반환
console.log(fruit.indexOf("e"))
console.log(fruit.indexOf("g"))
console.log(fruit.indexOf("mango")) // 맨 앞의 문자를 찾아주는것 (m이 5번째임)
console.log(fruit.indexOf("apple")) // 맨 앞의 문자를 찾아주는것 (a가 0번째임)
console.log(fruit.indexOf("z")) // 없는 문자열 찾으려고 하면 -1 반환

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10))// ' '(공백)

console.log(fruit.slice(5)) //m부터 끝까지 출력(m이 5번째)
console.log(fruit.slice(3,6)) //3은 포함하면서 6은 포함 안함 - lem ( l이 3, a가 6)
console.log(fruit.slice(-1)) //o ( 음수도 가능하다 )
console.log(fruit.slice(-4)) //ango

//replace, replaceAll
let msg1 = "wow~ It is so amazing!!"
console.log(msg1.replace("wow","hey~~")) // wow를 hey~~로 치환, 제일 먼저 찾는 하나만 변경
console.log(msg1.replaceAll("o","OO")) // o를 OO로 전체 변환
console.log(msg1)

let date = "2024.11.06"
//YYYY-MM-DD
console.log(date.replaceAll(".","-")) // 이것도 가능

date = date.replaceAll('.','-')
console.log(date) // 이렇게도 가능

let hello = "hello"
console.log(typeof hello) //hello는 string 타입이다

let hello2= hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2 = hello.split("e")
console.log(typeof hello2)
// ['2024', '11', '06']

date = date.split("-") //2024-11-06을 '-'를 제외하고 나타내어짐
console.log(date)

// ---------------------배열---------------------
console.log('----array method----')
let arr1 =[1,2,3,4,5]
let arr2 =["quakka","rabbit","puppy","hamster"]

arr1[5]=6
arr1[8]=8
console.log(arr1)
arr1 =[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 제거하는 값 반환
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) // 제거하는 값 반환
console.log(arr2)

//배열 .include(요소) 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat"))
console.log(arr2.includes("qaukka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)

console.log(arr1.indexOf(4)) //3, 요소가 몇번 인덱스에 있는지 확인

//reverse(), 순서 뒤집기
arr1.reverse() // 기존 배열이 변경됨
console.log(arr1)

//join(''), 배열에서 문자열로 병합 시켜줌
str1 = arr1.join()
console.log(str1) // join의 인자로 아무것도 전달이 되지 않으면 배열 안의 컴마까지 같이 문자열로 반환됨
str1 = arr1.join('')
console.log(str1)

//for of, forEach
let arr3 = [1,5,3,4,5]
let alphabets = ['a','b','c','d','e','f']

//기본 for문
for(let i=0; i<arr3.length; i++){
    console.log(arr3[i])
}

//for of 문 - 배열에서만 사용할 수 있는 반복문
for(let el of arr3){
    console.log(el)
}

//for Each(익명 함수)
//for Each(function(a[,b,c])) - b, c는 없어도 되는데 a는무조건 있어야함
arr3.forEach(function(num,i,arr){
    console.log("요소",num)
    console.log("배열의 인덱스",i)
    console.log("arr",arr)
    console.log('----------')
})

arr3.forEach((el)=>{
    console.log(el)
})

arr2 =["quakka","rabbit","puppy","hamster"]
//filter, map, find
//매개변수로 들어가는 함수에 리턴값이 필수
console.log('---filter---')
// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six=arr2.filter(function(el){
    return el.length === 6
})
console.log(six)

console.log('---find---')
let six2=arr2.find(function(word){
    return word.length === 6
})
console.log(six2)

console.log('---map---')
let arr4 = [1,2,3,4,5]
let multiArr =arr4.map(function(number){
    return number*3
})
multiArr =arr4.map((number)=> number*3)//화살표 함수 =  중괄호 없이 사용가능

console.log(multiArr)

//오브젝트 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for(let area in areaNum){
    console.log([area]) // key > 문자열로 반환중이기 때문에 대괄호에 따옴표 붙여서 접근
    // 값에 접근? 대괄호 접근법으로만 사용 가능
    console.log(areaNum[area])
}