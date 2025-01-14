let x = 1
let y = 'hola'
let z = null

let a = x 
let b = y
let c = z

console.log(x, y, z, a, b, c)

a = 12
b = 'platzi'
c = undefined

// paso por referenia 

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['<3']
let copiaDePanes = panes
panes.push(';)')
console.log(panes, copiaDePanes)