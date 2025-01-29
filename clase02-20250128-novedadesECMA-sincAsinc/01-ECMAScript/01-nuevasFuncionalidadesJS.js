// includes
let nombres=["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"]
console.log(nombres.includes("Mariana"))
console.log(nombres.includes("Valentin"))


// operador potencia
let resultado=Math.pow(10, 2)
console.log(resultado)
resultado=10**2
console.log(resultado)
resultado=3**3
console.log(resultado)




// métodos Object
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

let usuario01=usuarios[0]
console.log(Object.keys(usuario01))
console.log(Object.values(usuario01))
console.log(Object.entries(usuario01))



// operador spread / operador rest
let usuarioRequest={nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad:29}
let idAsignado=100
let nuevoUsuario={
    idAsignado, 
    // nombre: usuarioRequest.nombre,
    // apellido: usuarioRequest.apellido
    ...usuarioRequest,   // ... son aquí el op. spread
    nombre:"Pablo", 
    nombre:"Matias"
}

console.log(nuevoUsuario)


let numeros1=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros1, ...numeros2]
console.log(todosLosNumeros)

let suma4=(a, b, c, d)=>a+b+c+d
console.log(suma4(10,10,10,10))
console.log(suma4(...numeros1))



// operador nulish ??
let temperatura=0
console.log(`La temperatura actual es de: ${temperatura || "ERROR: no se han leido datos en el sensor"}`)
console.log(`La temperatura actual es de: ${temperatura ?? "ERROR: no se han leido datos en el sensor"}`)




// array.flat()
let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]
console.log(arrayAnidado)
console.log(arrayAnidado.flat())


arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]
console.log(arrayAnidado.flat())
console.log(arrayAnidado.flat(4))






