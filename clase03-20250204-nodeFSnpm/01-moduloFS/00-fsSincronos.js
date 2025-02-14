const fs=require("fs")
const path=require("path")

// 3: sincrona    // asincrona callback     // asincrona promesas

let rutaArchivo="./archivos/textoSincrono.txt"

let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`


// Utilizando fs con métodos síncronos:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantall
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo

// fs.writeFileSync(rutaArchivo, texto1, {encoding:"utf-8"})
fs.writeFileSync(rutaArchivo, texto1)
console.log("Archivo generado")
let dataLeida=fs.readFileSync(rutaArchivo, "utf-8")
console.log(dataLeida)
fs.appendFileSync(rutaArchivo, "\n\nEditorial Planeta")
console.log("Editorial agregada")

if(fs.existsSync(rutaArchivo)){
    console.log(`Existe ${rutaArchivo}...!!!`)
}

setTimeout(() => {
    fs.unlinkSync(rutaArchivo)
    console.log(`Archivo borrado!`)
}, 2000);




