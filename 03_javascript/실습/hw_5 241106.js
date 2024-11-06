let arr = []
for(let i=1; i<=100; i++){
    arr.push(i)
}
console.log(arr)

let sum1=0;
for(let i=1; i<=arr.length; i++){
    sum1=sum1+i
}
console.log(sum1)

let sum2=0;
for(let aaa of arr){
    sum2=sum2+aaa
}
console.log(sum2)

let sum3=0;
arr.forEach((aaa)=>{
    sum3=sum3+aaa
})
console.log(sum3)

let sum4=0;
arr.forEach(function(aaa,i,arr){
    sum4=sum4+aaa
})
console.log(sum4)