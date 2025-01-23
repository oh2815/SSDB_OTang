let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [{ name: "쇼트트랙", type: "혼성계주" }, true];

console.log(olimpic_newgame);
///////////////////////////////////////////////////////////////////////////////////

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

///////////////////////////////////////////////////////////////////////////////////
// Javascript
// function sum(...nums) {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   return sum;
// }

const sum1 = (a: number, b: number): number => Number(a) + Number(b);
console.log(sum1(5, 11));

function sum2(...nums: number[]): number {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

///////////////////////////////////////////////////////////////////////////////////
// generic
function arrElement<T>(arr: T[], index: number) {
  if (index >= arr.length) {
    return false;
  } else return arr[index];
}

console.log(arrElement<string>(["a"], 1));
console.log(arrElement<string>(["a"], 0));
