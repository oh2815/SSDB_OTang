/* for문
for(변수 선언과 초기화; 초기화; 조건식(어디까지 감소, 증가 할건지);증감{
   반복코드 실행
}
*/

// 증감식: i++, I=i+1, i+=1

// for(let i=0;i<10;i++){
//     console.log('안녕',i)
// }

// for(let i=0;i<10;i+2){
//     console.log(`안녕${}`)
// }

let fruits = ['apple', 'banana', 'orange', 'mango']
for(let i = 0;i < 4;i++){
    console.log(fruits[i])//0,1,2,3
}

// let n=111111
// let sum=0;
// for(let i = 1;i <= n; i++){
//     sum=sum+i
// }
// console.log(sum)

let arr = [99, 98, 85, 77, 100, 50]
let sum=0;
for(let i = 0;i < arr.length; i++){
    console.log(arr[i])
    sum+=arr[i]
}
console.log(sum)

// 1이상 20이하의 숫자 중에서 짝수만 더한 값 출력

let sum3=0;
for(let i = 1;i<=20; i++){
    if(i%2===0){
        sum3+=i
    }
}
console.log(sum3)

let sum4 = 0
for(let i=0; i<=20;i=i+2){
    sum4+=i
}  
console.log(sum4)