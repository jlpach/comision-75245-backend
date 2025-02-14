
const operar=(a, b, fn)=>{
    return fn(a, b)
}

// (5x4 + 3X2)/10 + 100 = 102,6
let resultado=operar(100, 0, (a,b)=>{
    return operar(10, 0, (a, b)=>{
        return operar(3, 2, (a, b)=>{
            return a*b + operar(5, 4, (a, b)=>{
                return a*b
            })
        }) / a
    }) + a
})

console.log(resultado)
