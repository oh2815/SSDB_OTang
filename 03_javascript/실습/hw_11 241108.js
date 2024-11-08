// document.querySelector('section')
const section = document.querySelector("section");
const icecreams = [
    "내가 아인슈페너?!",
    "엄마는 외계인",
    "민트 초콜릿 칩",
    "뉴욕 치즈케이크",
    "아이스 초당옥수수",
    "초콜릿 무스",
    "체리쥬빌레",
    "뮤! 넌 내거야",
    "오레오 쿠키 앤 크림",
  ];
for(let i=0; i<9; i++){

    let article = document.createElement('article')
    article.classList.add('article-box')
    
    section.append(article)
    
    
    let img = document.createElement('img')
    img.classList.add('img-box')
    
    img.setAttribute("src", `/03_javascript/실습/img/실습3사용이미지/icecream${i+1}.png`)
    
    article.append(img)
    
    
    let h3 = document.createElement('h3')
    h3.classList.add('text-center')
    h3.innerText=`Top ${i+1}`

    article.append(h3)
    
    let div = document.createElement('div')
    div.classList.add('text-center')
    div.innerText=icecreams[i]
   
    article.append(div)

}
