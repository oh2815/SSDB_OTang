// // 실습 spread연산자 만들기
// const word1 = "abc";
// const word2 = "xyz";

// const word3 = [...word1, ...word2]
// console.log(word3)

// shape클래스 만들기
class Shape{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getArea(){
       return this.x*this.y
    }
}

let rec = new Shape(3,4);
console.log(rec.getArea()); // 12

//rectanle 클래스
class Rectangle extends Shape{
    constructor(x, y){
        super(x, y)
    }

    getRecInfo(){
        let n = Math.sqrt(this.x**2 + this.y**2)
        return n
    }
}
let rec2 = new Rectangle(3, 4)
console.log(rec2.getRecInfo()) // 5

//triangle class
class Triangle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getArea(){
        return this.x*this.y/2
    }
}
    let tri = new Triangle(3, 4)
    console.log(tri.getArea()) // 6

//circle class
class Circle extends Shape{
    constructor(x,y,radius){
        super(x,y)
        this.radius = radius
    }
    getArea(){
        return this.radius**2*Math.PI
    }
}
let cir = new Circle(3,4,'r')
console.log(cir.getArea()) // r**2*PI
