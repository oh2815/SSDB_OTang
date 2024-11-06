console.log(document)
console.log(document.URL)
console.log(document.documentElement) // 사용한 문서 그대로 보여줌

console.log(document.head)
console.log(document.body)
console.log(document.title) // html에 쓴 title그대로 가져옴

// 1. getElementById
console.log(document.getElementById('green')) 
// null나오는데 그 이유는 head태그 안에 scrtip를 사용하고 있기에 body에 있는 요소들이 안나옴
console.log(document.getElementById('red')) // scriipt에 defer써도 가능(head태그)

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])
console.log(document.getElementsByClassName('others')[0])

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

// 4. getElementsByName (name 속성값)
console.log(document.getElementsByName('id'))
console.log(document.getElementsByName('id')[0])

// 5. querySelector ('CSS 선택자')
console.log(document.querySelector(".pink"))
console.log(document.querySelector(".others"))
console.log(document.querySelector("#green"))
console.log(document.querySelector("#red"))
console.log(document.querySelector("div"))//  제일 위에있는거 하나만 가져옴
console.log(document.querySelector("input")) //            ""
console.log(document.querySelector("[name='id']"))

// 6. querySelectorAll
console.log(document.querySelectorAll('.pink'))
console.log(document.querySelectorAll('#red'))

let pinks = document.querySelector
// for of 를 이용해서 pink 클래스 모두 출력해보기
for(let tag of pinks){
    console.log(tag)
}