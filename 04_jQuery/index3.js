console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

// click(): 클릭 했을 때
// jQuery에서는 이벤트 이름으로 메서드가 존재함
// 요소.click
$('.p-msg').click(function(){
    $('.p-msg').css('color','red')
})

// $('.num').click(function(){
//     // $('.num).css('color','blue')
//     $(this).css('color',green) // 자기 자신을 가리킴
// })

$('.num').on('click',function(){
    $(this).css('color','pink') //자기 자신을 가리킴
})

// in Js
const nums = document.querySelectorAll('.num')
for(let i =0; i<nums.length; i++){
    nums[i].addEventListener('click',function(){
        this.style.color = "blue"
    })
}

// hover(): 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(function(){
    $(this).addClass('hover')
    },
    function(){
        $(this).removeClass('hover')
    }
)

$(window).scroll(function(){
    console.log('scrolling.....')
})

//  // 방향키 아래, 위, 왼쪽, 오른쪽
//  console.log(event.code)
//  console.log(event.key)
// //  console.log(event.keycode)
//  if(event.code==="ArrowLeft"){
//     console.log('왼쪽 눌렸습니다.')
//  }else if(event.code==="ArrowRight"){
//     console.log('오른쪽 눌렸습니다.')
//  }else if(event.code==="ArrowUP"){
//     console.log('위쪽 눌렸습니다.')
//  }else if(event.code==="ArrowDown"){
//     console.log('아래쪽 눌렸습니다.')
//  }else{
//     console.log('방향키 x')
//  }

$('.input-key').keydown(function(e){
    console.log(e.code)
     if(e.code==="ArrowLeft"){
        console.log('왼쪽 방향키 눌렸습니다.')
    }else if(e.code==="ArrowRight"){
        console.log('오른쪽 방향키 눌렸습니다.')
    }else if(e.code ==="ArrowUp"){
        console.log('위쪽 방향키 눌렸습니다.')
    }else if(e.code==="ArrowDown"){
        console.log('아래쪽 방향키 눌렸습니다.')
    }else{
        console.log('방향키가 아닌 키보드 누르는 중...')
    }
})

$('#todo-form').submit(function(e){
    // 기본동작 막기(새로고침 방지)
    e.preventDefault()

    // input 태그에 작성한 글자 가져오기
    const inputValue =$('input[name="todo"]').val()
    // li 태그를 만듦과 동시에 form아래의 ul태그에 붙여넣기
    $('.todos').append(`<li>${inputValue}</li>`)
    // input 초기화
    $('input[name="todo"]').val('')
})