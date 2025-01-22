let dato="dato 01..."
console.log(dato)

function suma(a, b){

    console.log("ejecutando suma con arg. ", a, b)
    let resultado=a+b
    console.log(resultado, "desde dentro de suma")


    for(let i=0; i<3; i++){
        let color="verde"
        console.log(resultado)
        let nombre="Juan"
        console.log(nombre)
        dato="Carlitos"
    }

    // let auxiliar=0
    for(let i=0; i<3; i++){
        // console.log(resultado)
        let nombre="Mario"
        console.log(nombre)
        let resultado=100
        // auxiliar=resultado
        console.log(resultado, "dentro 2° for..")
        // let resultado=200
    }


    // console.log(nombre, "fuera del for")
    // console.log(resultado)
    return resultado

}
console.log(dato)

console.log(suma(4, 3))
// console.log(resultado, "afuera de suma")


console.log(dato)
