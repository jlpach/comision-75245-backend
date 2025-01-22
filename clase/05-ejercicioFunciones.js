// Ejercicio Funciones:
// Definir una función “mostrarLista”, que reciba como parámetro un 
// arreglo con elementos.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. 
// Finalizar el proceso devolviendo la longitud de la 
// lista (Utilizar template strings)
// Invocar la función con los casos de prueba.

const mostrarLista=(lista=[])=>{

    if(!Array.isArray(lista)){
        console.log(`Solo se adminten arrays como argumentos`)
        return 
    }

    if(lista.length==0){
        console.log("lista vacia")
        return 
    }

    // const 
    lista.forEach(elem=>{
        console.log(elem)
    })

    console.log(`La lista tenía ${lista.length} elementos`)


}

// mostrarLista()
// mostrarLista([1, 2, 3])
// mostrarLista([{nombre: "Juan", email:"juan@test.com"}, "Manuel", false, 9, "Verde"])
let letras=["a", "z", "f", "h"]
// mostrarLista(letras)
mostrarLista(90)