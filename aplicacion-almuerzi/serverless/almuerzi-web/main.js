let globalMeal = []
const stringToHtml = (string) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(string, 'text/html')

    return doc.body.firstChild
}

const renderItem = (item) => {
    const element = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)

    element.addEventListener('click', () => {
        const mealsList = document.getElementById('meals-list')
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
        const mealsIdInput = document.getElementById('meals-id')
        mealsIdInput.value = item._id
    })

    return element
}

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHtml(`<li data-id="${order._id}">${meal.name} - ${order.user_id}</li>`)

    return element
}

window.onload = () => {
    const orderForm = document.getElementById('order')
    orderForm.onsubmit = (e) => {
        e.preventDefault()
        const submit = document.getElementById('submit')
        submit.setAttribute('disable', true)
        const mealId = document.getElementById('meals-id').value
        if (!mealId){
            alert('Debe seleccionar al menos un plato.!')
            return
        }

        const order = {
            meal_id: mealId,
            user_id: 'Testing User'
        }

        fetch('https://serverless-pdw0vcuqf.vercel.app/api/orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(postData => {
            const renderedOrder = renderOrder(postData,globalMeal)
            const ordersList = document.getElementById('orders-list')
            ordersList.appendChild(renderedOrder)
            submit.removeAttribute('disable')
        })
    }

    // Get Meals
	fetch('https://serverless.fark-91.vercel.app/api/meals', {
	})
	.then(response => response.json())
	.then(data => {
        globalMeal = data
        const mealsList = document.getElementById('meals-list')
        const submit = document.getElementById('submit')
        const listItem = data.map(renderItem)
        mealsList.removeChild(mealsList.firstElementChild)
        listItem.forEach(element => mealsList.appendChild(element))
        submit.removeAttribute('disabled')

        // Get Orders
        fetch('https://serverless.fark-91.vercel.app/api/orders', {
        })
        .then(response => response.json())
        .then(ordersData => {
            const ordersList = document.getElementById('orders-list')
            const listOrder = ordersData.map(orderData => renderOrder(orderData, data))
            ordersList.removeChild(ordersList.firstElementChild)
            listOrder.forEach(element => ordersList.appendChild(element))

            // console.log(ordersData)
        })
    })
}