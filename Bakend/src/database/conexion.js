import mongoose from "mongoose"
// se pone la url que trae mongo en la consola pero antes de eso se crea la coleccion vacia 
const DB_URI ="mongodb://127.0.0.1:27017/mascota"    
const conexion=()=>{
try {
    //mongoose usa la libreria y conecta la url de arriba donde le espesificamos el puerto y el nombre de la base de datos 
    mongoose.connect(DB_URI )
    console.log("conexion exitosa")  
} catch (error) {
    console.log(error)
}
}
export default conexion