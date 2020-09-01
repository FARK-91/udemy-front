// Callback es una funcion que actua dentro de otra funcion devolviendo su resultado.

function suma(element1, element2, cb){
    result = element1 + element2
    cb(result)
}

function callback(eval){
    console.log(eval)
}

//Se pasa la funciona Callback como argumento, la misma no se ejecuta de una vez porque se pasa sin parentesis.
suma(3, 2, callback)