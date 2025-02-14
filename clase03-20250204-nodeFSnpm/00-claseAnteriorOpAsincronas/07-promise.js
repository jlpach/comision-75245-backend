const suma = (a, b) => {
    return new Promise((res, rej) => {    // resolve  /  reject
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error(`Solo se admiten argumentos numéricos`))
        }

        res(a + b)
        // res("Juan")
    })
}


// 5 x 5
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3, 5)
                            .then(resFinal=>{
                                console.log("Promise Hell:", resFinal, res1)
                            })
                    })
            })
    })


suma(10, 10)
    .then(res=>{
        return `El resultado es ${res}`
    })
    .then(texto=>{
        return texto.toUpperCase()
    })
    .then(textMay=>{
        return {
            message:"resultado", valor:textMay
        }
    })
    .then(resFinal=>{
        console.log("Prueba encadenamiento promesas:", resFinal)
    })

// 5 x 5
let aux1=0
suma(5, 5)
    .then(res1=>{
        aux1=res1
        // console.log(fafafa)
        return suma(res1, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(resFinal=>console.log("5 x 5 c/ encadenamiento promesas", resFinal, aux1))
    .catch(e=>console.log(e.message))



