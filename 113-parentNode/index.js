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
        const todoData = todolist.map(item => `<li>${item}</li>`)
        todoTemplate.innerHTML = todoData.join('')

        const liElements = document.querySelectorAll('#todo-list li')

        liElements.forEach((item, index) => {
            item.addEventListener('click',() => {
                console.log('Child Element')
                console.log(item, index)
                //parentNode, esta funcionalidad la trae todo elemento HTML
                console.log('Parent Element')
                item.parentNode
                console.log(item.parentNode)
            })
        });
    }
}