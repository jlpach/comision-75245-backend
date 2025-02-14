const suma = (a, b) => {
    return new Promise((res, rej) => {    // resolve  /  reject
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error(`Solo se admiten argumentos numéricos`))
        }

        res(a + b)
        // res("Juan")
    })
}

// (10+5) x (2+2)
const entorno=async()=>{
    try {
        let res1=await suma("juan", 5)
        let res2=await suma(2, 2)
        let resultado=res1 * res2
        // console.log(resultado)
        return resultado
    } catch (error) {
        return error.message
    }
}

// console.log(entorno())


// entorno()
//     .then(r=>console.log(r))

const app=async()=>{
    console.log(await entorno())
}

// app()
// console.log("Programa terminado!!!")


const leeApi=async(url)=>{
    let rta=await fetch(url)
    let data=await rta.json()
    return data
}

const app2=async()=>{
    console.log(await leeApi("https://reqres.in/api/users?page=2"))
}


app2()
