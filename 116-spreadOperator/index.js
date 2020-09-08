
window.onload = () => {
    objeto1 = {nombre: 'Renier', apellido: 'Ferrer'}
    objeto2 = objeto1
    console.log('Ahora todos los cambios que hagas sobre objeto2 se reflejaran tambien en objeto1.')
    objeto2['edad'] = 29
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    if(objeto1){
        activate(objeto1)
    }
    objeto3 = {...objeto1}
    objeto3['genero'] = 'Masculino'
    const p4 = document.getElementById('p4')
    const p5 = document.getElementById('p5')
    const p6 = document.getElementById('p6')
    if(objeto3){
        activate2(objeto3, objeto1)
    }
}

const activate = (obj) => {
    p1.innerHTML = "objeto1 = {nombre: 'Renier', apellido: 'Ferrer'}"
    p2.innerHTML = "objeto2['edad'] = 29"
    p3.innerHTML = 'objeto1: ' + JSON.stringify(obj)
}

const activate2 = (obj1, obj2) => {
    p4.innerHTML = 'objeto1: ' + JSON.stringify(obj2)
    p5.innerHTML = 'objeto3: ' + JSON.stringify(obj1)
    console.log(objeto1)
    console.log(objeto3)
}