// Tipo de dato primitivo = inmutable 
let numero = 23
numero = numero + 10
console.log(numero)


let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato primitivo = Mutable

let usuario = { nombre: 'jhon', edad: 15}
usuario.edad = 20
//onsole.log(usuario)

let frutas = ['manzana', 'fresa']
frutas[0] = 'sandia'
//console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre = "nuevo"
}

let persona ={nombre: 'mario'}
cambiarNombre.nombre

console.log(persona)