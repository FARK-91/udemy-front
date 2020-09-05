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
        // La directiva .map() es exclusiva de los Arreglos
        // Se usa para iterar los elementos de estos y transformarlos
        const todoData = todolist.map(item => `<li>${item}</li>`)
        console.log(todoData)
        // La directiva .join() es exclusiva de los Arreglos
        // Se usa para juntar todos los elementos del mismo
        todoTemplate.innerHTML = todoData.join('')
        console.log(todoData.join(''))
    }
}