// title (nombre del producto)

// description (descripción del producto)

// price (precio)

// thumbnail (ruta de imagen)

// code (código identificador)

// stock (número de piezas disponibles)

class ProductManager{
    constructor(){
        this.products=[]  // [{id:1, title...},{id:2, title...},{id:3, title...},{id:4, title...},]
    }

    addProduct(title, description, price, thumbnail, code, stock ){

        // console.log({title, description, price, thumbnail, code, stock})

        if(!title || !description || !price || !thumbnail || !code || !stock ){
            console.log(`Todas las propiedades son requeridas`)
            return 
        }

        let existe=this.products.find(p=>p.code===code)
        if(existe){
            console.log(`Ya existe un producto con codigo ${code}`)
            return
        }

        let id=1
        if(this.products.length>0){
            id=this.products[this.products.length-1].id + 1
        }

        let nuevoProducto={
            id, 
            title, description, thumbnail, code, price, stock
        }

        this.products.push(nuevoProducto)

        return nuevoProducto

    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        id=Number(id)  // "pepe"  NaN   false  100   "9"
        if(isNaN(id)){
            console.log(`Ingrese un id de tipo number`)
            return 
        }

        let product=this.products.find(p=>p.id==id)
        if(!product){
            console.log(`No existen productos con id ${id}`)
            return
        }

        console.log(`${JSON.stringify(product)}`)
    }

}

// let nombres=["juan", "pedro", "maria", "laura", "rodrigo"]
// console.log(nombres[nombres.length-1])

let productManager=new ProductManager()
productManager.addProduct("Martillo", "Martillo", 100, " ", "abc001", 5)
productManager.addProduct("Martillo 2", "Martillo 2", 100, " ", "abc001", 5)
productManager.addProduct("Martillo 3", "Martillo 3", 74, " no hay ", "abc003", 15)
productManager.addProduct("Escalera", "Escalera", 74, " no hay ", "abc003", 15)
productManager.addProduct("p01", "p02", 74, " no hay ", "abc004", 15)
productManager.addProduct("p02", "p02", 74, " no hay ", "abc009", 15)

console.log(productManager.getProducts())

productManager.getProductById(3)
productManager.getProductById(32)
productManager.getProductById("Escalera")