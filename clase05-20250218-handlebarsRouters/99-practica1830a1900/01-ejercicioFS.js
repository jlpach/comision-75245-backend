// 1) ejecutar npm init -y (esto generará un archivo llamado package.json)
// 2) leer ese archivo, mostrar contenido en pantalla
// 3) crear un objeto llamado datos, con 3 propiedades: una que guarde
// los datos del package.json en formato texto, otra que los guarde en 
// formato de JS, y una última con el tamaño en disco del package.json
// 4) guardar ese objeto en disco, en un archivo denominado datos.json 

// Utilizar los métodos de fs que utilizan callbacks

const fs=require("fs")
let rutaResultado="./datos.json"
let rutaPackage="./package.json"

fs.readFile(rutaPackage, "utf-8", (error, datosRecuperados)=>{
    if(error){
        console.log(`Error al recuperar archivo`)
        return 
    }

    console.log(datosRecuperados)
    
    let texto=datosRecuperados
    let objeto=JSON.parse(datosRecuperados)
    let size=fs.statSync(rutaPackage).size

    let resultado={
        texto, 
        objeto,
        size
    }

    fs.writeFile(rutaResultado, JSON.stringify(resultado, null, 5), error=>{
        if(error){
            console.log(`Error al recuperar archivo`)
            return 
        }
        
        console.log(`Archivo generado...!!!`)
    })
})
