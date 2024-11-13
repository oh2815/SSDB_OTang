console.log(111)

//jQuery 요소 선택 방법
// $("CSS 선택자")
console.log($('#div1'))

//여러 요소에 한번에 적용 가능함(이점이 js와 다름.)
$('button').css('color','red')

function submitjs(){
    //<div id=
    document.getElementById('div1').innerText = "반갑습니다."
    document.getElementById('div1').setAttribute('style', 'boder: 2px solid red')
}
function submitjQ(){
    $('#div1').text('hello jQuery')
    $('#')
}