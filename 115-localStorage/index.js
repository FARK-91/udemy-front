// let todolist = []
let todolist = JSON.parse(localStorage.getItem('todos')) || []

const render = () => {
    const todoTemplate = document.getElementById('todo-list')
    const todoData = todolist.map(item => `<li>${item}</li>`)
    todoTemplate.innerHTML = todoData.join('')

    const liElements = document.querySelectorAll('#todo-list li')

    liElements.forEach((item, index) => {
        item.addEventListener('click',() => {
            //Se elimina elemento hijo de parentNode.
            item.parentNode.removeChild(item)
            todolist.splice(index,1)
            actualizarTodos(todolist)
            render()
        })
    });
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoValue = todo.value
        todo.value = ''
        todolist.push(todoValue)
        actualizarTodos(todolist)
        render()
    }
}

const actualizarTodos = (todos) =>{
    const todolistString = JSON.stringify(todos)
    localStorage.setItem('todos', todolistString)
}