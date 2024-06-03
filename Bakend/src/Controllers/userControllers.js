import usersModels from "../models/user.js";
// exportamos userModels del modelo 

export const userRegister = async (req, res) => {
    try {
        // user pasa hacer un objeto de usermodels 
        const user = new usersModels({
            //fullname lo traemos del body y pasa al modelo donde se va guardar
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        })
        await user.save();
        return (res.status(201).json({ menssage: "usuario creado correctamente", user }))


    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const Listar = async (req, res) => {
    try {
        const user = await usersModels.find();
        return (res.status(200).json(user))
    } catch (error) {
        return (res.status(500).json(error))
    }

}
export const update = async (req, res) => {
    try {
        //obtenemos el id de users model y lo requerimos como parametro para 
        const userUpdate = await usersModels.findByIdAndUpdate(req.params.id, {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        })
        if (userUpdate) {
            return (res.status(200).json({ message: "usuario actualizado correctamente", userUpdate }))
        }
        return (res.status(401).json({ message: "usuario no se actualizo correctamente" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}
export const eliminar = async (req, res) => {
    try {
        // creamos una constante donde se va almacenar el modelo y obtenemos findByIdAndDelete(donde requerimos el id como parametro)
        const userDelete = await usersModels.findByIdAndDelete(req.params.id)
        if (userDelete) {
            return (res.status(200).json({ message: "usuario eliminado correctamente", userDelete }))
        }
        return (res.status(401).json({ message: "usuario no se elimino correctamente" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}
export const listarId = async (req, res) => {
    try {
        const user = await usersModels.findById(req.params.id)
        if (user) {
            return (res.status(200).json(user))
        }
        return (res.status(401).json({ message: "usuario no existe" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}
// para que sirve la funcion findByid

/* El método findById en JavaScript, específicamente en el contexto de bibliotecas y frameworks de manipulación del DOM como 
jQuery y en entornos de bases de datos como Mongoose, se utiliza para buscar y devolver un elemento por su identificador (ID).
 Su propósito y funcionamiento varían dependiendo del entorno en el que se usa.

1. findById en Mongoose (Node.js)
En Mongoose, que es una biblioteca de Node.js para trabajar con MongoDB, 
findById se utiliza para buscar un documento en una colección por su identificador único (ID).
  */