import mongoose from "mongoose";
// este es el modelo de users que crea las colecciones de mongo db
//user pasa a hacer un objeto que usa mongoose y se especifica los campos de los documentos 
const user = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        maxlength:30
       
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:30
       
    },
    password:{
        type:String,
        required:true,
        maxlength:100

       
    },
})
const usersModels= mongoose.model('user',user)
// se importa los modelos y se le pone el nombre al modelo que en este caso es user que usa el objeto user que se creo 
export default usersModels



