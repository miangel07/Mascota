import gandersModels from "../models/ganders.js";


export const Listar = async (req, res) => {
    try {
        const gander = await gandersModels.find();
        if (gander) {
            return (res.status(200).json(gander))
        }
        return res.status(200).json("no se listo rorrectamente ")
        } catch (error) {
        return res.status(200).json(error)
    
    }
}

export const listarId = async (req, res) => {
    try {
        const ganderId = await gandersModels.findById(req.params.id)
        if (ganderId) {
            return (res.status(200).json(ganderId))
        }
        return (res.status(401).json({ message: "genero no existe" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const crear = async (req, res) => {
    try {
        const ganderCreate = await gandersModels.create(req.body)
        if (ganderCreate) {
            return (res.status(200).json({ mensage:"genero creado correctamente",ganderCreate}))
        }
        return res.status(401).json({ mensage:"genero no se creo correctamente"})
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const actualizar = async (req, res) => {
    try {
        const ganderUpdate = await gandersModels.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (ganderUpdate) {
            return (res.status(200).json({mensage : "genero actualizado correctamente",ganderUpdate}))
        }
        return (res.status(401).json({ message: "gander no existe" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const eliminar = async (req, res) => {
    try {
        const ganderDelete = await gandersModels.findByIdAndDelete(req.params.id)
        if (ganderDelete) {
            return (res.status(200).json({ message: "genero  eliminado correctamente" }))
        }
        return (res.status(401).json({ message: "genero no se elimino correctamente" }))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

