
window.onload = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => reject('Peticion exitosa'), 1000)
        // setTimeout(() => reject('Peticion Rechazada'), 1000)
    })
    .then(valor => console.log(valor))
    .catch(error => console.log(error))
    console.log('Pasado un segundo:')
}