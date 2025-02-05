

const miMap=(arreglo=[], fn)=>{

    let retorno=[]
    for(let i=0; i<arreglo.length; i++){
        let resultado=fn(arreglo[i]) 
        retorno.push(resultado)  
    }

    return retorno

}

let numeros=[1,2,3,4,5]
console.log(numeros.map(n=>n**2))
console.log(miMap(numeros, n=>n**2))
console.log(miMap(numeros, n=>n+100))