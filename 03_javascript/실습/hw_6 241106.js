let fruits1 = ["사과", "딸기","파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과","참외", "오렌지", "파인애플", "망고"];

let same=[];
let diff=[];
for(let i=0; i<fruits1.length; i++){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i]);
    }else{
        diff.push(fruits1[i])
    }   
}
console.log(same)
console.log(diff)



