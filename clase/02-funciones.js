function suma(a, b){

    console.log("ejecutando suma con arg. ", a, b)
    let resultado=a+b
    // console.log(resultado)
    return resultado
}

console.log(suma(10, 10))
suma(10, 11)
suma(10, 32)
suma(100, -10)
suma(9, 9)

console.log(suma(4,4))


// ...

// suma="es cuando a un numero le agrego otro..."
// suma=false

// ...

let valorSuma=suma(10, 11)
console.log(valorSuma)

const suma1=function(a, b){
    
    let resultado=a+b
    console.log(resultado)
}

// suma1="Maria"

// const sumaFlecha=(a, b)=>{
//     return a+b
// }

const sumaFlecha=(a, b)=>a+b


console.log(sumaFlecha(3, 4))

const saludo=()=>{
    return "hola...!!!"
}

console.log(saludo())

const cubo=n=>n*n*n
console.log(cubo(3))


console.log(suma1(20,20))





