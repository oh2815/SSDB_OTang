// let form = document.querySelector('form')
// let id = document.querySelector('#userid')
// let comment = document.querySelector('#comment')
// let ul = document.querySelector('.comment-list')
// let submit = document.querySelector('button')

// form.addEventListener('submmit',function(e){
//     e.preventDefault();

//     let li = document.createElement('li');
//     li.innerContent = `<b>${id.value}</b> - <b>${comment.value}</b>`
//     ul.append(li)

//     id.value = ""
//     comment.value = ""
// })

let form = document.querySelector('form')
let id = document.querySelector('#userid')
let comment = document.querySelector('#comment')
let ul = document.querySelector('.comment-list')

form.addEventListener('submit',function(e){
    e.preventDefault()

    let li = document.createElement('li')
    li.innerHTML = `<b>${id.value}</b> - <b>${comment.value}</b>`
    ul.append(li)

    id.value = ""
    comment.value = ""
})