var str = "hi";
var a = "qwer";

function jsPrint(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

jsPrint(1, 2);
console.log("----------");
jsPrint(1, 2, 3);
console.log("----------");
jsPrint(1, 2, "3", 4, 5, 6);

function addSoomething(a, b) {
  return a + b; // number + srting
}
