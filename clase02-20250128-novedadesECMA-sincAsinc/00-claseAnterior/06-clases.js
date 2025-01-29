class Alumno {

    static escuela = "CoderHouse"
    static #codigoSecreto = "12345"

    constructor(nombre, email, nota, materias = []) {
        this.nombre = nombre
        this.email = email
        this.materias = materias
        this.notaPromedio = nota
    }

    saludar() {
        console.log(Alumno.#codigoSecreto)
        console.log(`Hola, me llamo ${this.nombre}`)
    }

    retortaEmail() {
        return this.email
    }

    modificaMail(email) {
        // validar
        let RegExMails = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        if(!RegExMails.test(email)){
            console.log(`Error en el mail ingresado...!!!`)
            return 
        } // true
        this.email = email
    }

    static verEscuela() {
        return this.escuela.toUpperCase()
    }


}

let alumno01 = new Alumno("Micaela", "micaela@test.com", 8, ["Calculo II", "Probabilidad y Estadística"])

console.log(alumno01)

let alumno02 = new Alumno("Juan Carlos", "jc@test.com", 6.5)

console.log(alumno02)
alumno02.saludar()

console.log(alumno02.retortaEmail())

alumno01.saludar()

console.log(Alumno.escuela)
console.log(Alumno.verEscuela())

alumno01.email = "micaela@hotmail.com"
console.log(alumno01.retortaEmail())

alumno01.modificaMail("micaelahotmail.com") 
console.log(alumno01.retortaEmail())
