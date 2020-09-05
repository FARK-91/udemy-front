let todolist = []

window.onload = () => {

    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoValue = todo.value
        todo.value = ''
        todolist.push(todoValue)
        const todoTemplate = document.getElementById('todo-list')
        todoTemplate.innerHTML = ''
        for(let i = 0; i < todolist.length; i++){
            todoTemplate.innerHTML = todoTemplate.innerHTML + `<li>${todolist[i]}</li>`
        }
    }
}