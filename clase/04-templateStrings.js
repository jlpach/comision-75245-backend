let nombre="Juan"
let apellido='Perez'

let saludo="Hola"

let saludoCompleto=saludo + " " + nombre + " " +apellido + "\nColores favoritos\n\t-verde\n\t-rojo"
saludoCompleto=saludoCompleto+"\nMusica que le gusta.."
console.log(saludoCompleto)

let saludoCompleto2=`Este es el saludo: "${saludo} ${nombre}, su apellido es ${apellido}?"

Colores preferidos:
    - verde
    - rojo



`

let importe = 2000
let dirEnt="Alvear 958, Moron"
console.log(saludoCompleto2)

let resultadoHTML=`
<h1>Bienvenido ${nombre}...!!!</h1>
<hr>
<h2>Su compra se a completado!!! importe a pagar ${importe}</h2>
<h2>Recibirá su pedido en breve en ${dirEnt}</h2>

`
console.log(resultadoHTML)
