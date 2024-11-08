let done = document.querySelectorAll(".done")
let todo = document.querySelectorAll(".todo")

for(let i=0; i<done.length; i++){
    done[i].classList.remove('done')
    done[i].classList.add('todo')
}
for(let i=0; i<todo.length; i++){
    todo[i].classList.remove('todo')
    todo[i].classList.add('done')
}