

const operar=(a, b, fn)=>{
    return fn(a, b)
}

console.log(operar(10, 10, (a, b)=>a+b))
console.log(operar(10, 10, (a, b)=>a-b))
console.log(operar(10, 10, (a, b)=>a*b))
console.log(operar(10, 10, (a, b)=>a/b))