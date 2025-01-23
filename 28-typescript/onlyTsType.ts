// tuple: 배열의 개수와 데이터 타입 순서를 정하는 타입
let drink: [string, string];
drink = ["cola", "콜라"]; // 꼭 위의 타입을 맞춰 줘야함. : string 2개

let drink2: [string, string, number] = ["cola", " 코올라", 3];

drink2[0] = "사이다"; // drink2의 0번째인자 바꾸기
console.log(drink2);

// readonly 옵션: 타입과 순서를 완벽히 고정
// 추후 수정 불가
let drink3: readonly [string, string] = ["cola", "콜라"];
// drink3[0] = "바꿀래"; // error !

//---------- enum ----------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  amricano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.amricano);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  strawberry,
  kiwi = "kiwi", // 되는데 권장 X
}

console.log(Cake.choco);
console.log(Cake.strawberry);
console.log(Cake.vanilla);
console.log(Cake.kiwi);

// 사용자 정의 타입

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

// interface에 선언되지 않은 것은 절대 들어올 수 없음
const student1: Student = {
  name: "allie",
  isPassed: true,
};

console.log(student1);

type Score = "A+" | "A" | "B" | "C" | "D" | "E" | "F";
interface 야구부 extends Student {
  // Student에서 상속 받아온 정보
  // name: string;
  // isPassed: boolean;
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; // 없어도 되는 값 -> ? 처리
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  weight: 95,
  height: 193,
  backNumber: 17,
  position: "pitcher",
  1: "A",
  2: "C",
};

console.log(otani);
console.log(otani["1"]);
// console.log(otani.1); // 불가 숫자로했으면 대괄호 접근법으로
// otani["1"] = "B+"; // 없는거로는 수정 불가

otani["1"] = "A+";
otani.position = "투수";
console.log(otani);
// otani.backNumber = 11; // readonly 라서 수정 불가

// interface Calc {
//   (a: number, b: number): number;
// }

// const sum: Calc = (number: number1, number: number2) => {
//   return num1 + num2; // num 리턴
// };

interface Toy {
  name: string;
  start(): void; // 함수 중 리턴타입이 없을 경우 void타입
}
interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차 타입 & > Toy와 Car의 정보를 모두 만족해야 함
let toyCar: Toy & Car = {
  name: "타요",
  color: "blue",
  price: 50000,
  start() {
    console.log(this.name, "의 가격은", this.price, "원 입니다.");
  },
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "Daniel",
  gender: "f",
  age: 21,
};
enum GenderEnum {
  FEMALE = "Female",
  MALE = "Male",
}

type Gender = GenderEnum.MALE | GenderEnum.MALE;

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "Albert",
  like: ["car"],
  gender: GenderEnum.MALE,
};

console.log(albert.gender);
console.log(daniel.age);
