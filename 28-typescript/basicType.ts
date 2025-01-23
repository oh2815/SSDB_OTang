let num: number = 1;
num = 2;
// num = "ssss";
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array 선언
let numArr: number[] = [1, 2, 3, 4]; // type, 숫자만 넣어야 함
let strArr: Array<string> = ["a", "b", "c"]; // Array인데 string으로만 이루어져 있다.

let arr1: (number | string)[] = [1, 2, 3, "a", "b"]; // 숫자나 문자열 가능한데 undifined이나 null이 오면  오류
let arr2: Array<boolean | null | number[]> = [true, false, null, [1]];

let arr3: any[] = [1, 2, "a", "b", [], {}, null, true]; // 뭐가 와도 상관 없음

// object
let obj1: object = {
  name: "aa",
};

// 타입스크립트는 알아서 타입추론을 한다.
// 암묵적 타입 지정
let aa = 5; // 알아서 숫자 type
let bb = "hello"; // 알아서 string형

// aa = "ddd"  ---------->  위에 정한건 숫자형이었는데 문자열 넣으려고 하니까 error!
