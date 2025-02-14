
const suma = (a, b) => {
    return new Promise((res, rej) => {    // resolve  /  reject
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error(`Solo se admiten argumentos numéricos`))
        }

        res(a + b)
        // res("Juan")
    })
}

// console.log(suma(5, 4) + 100)
// console.log(suma(5, 4) * 100)

suma(5, 4)
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => {
        console.log(`Error... :(   Detalle: ${error.message}`)
    })

suma(5, "Mariano")
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => {
        console.log(`Error... :(   Detalle: ${error.message}`)
    })

let rta=fetch("https://reqres.in/api/users?page=2")
            .then(data=>{
                data.json()
                    .then(usuarios=>{
                        console.log(usuarios)
                    })
            })