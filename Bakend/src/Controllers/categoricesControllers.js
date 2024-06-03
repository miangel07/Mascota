import categoriaModels from "../models/Categories.js";

export const list = async (req, res) => {
    try {
        const categorie = await categoriaModels.find();
        return (res.status(200).json(categorie))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const Create = async (req, res) => {
    try {
        const categoriaCreate = new categoriaModels({
            name: req.body.name

        })
        await categoriaCreate.save()
    if(!categoriaCreate) return (res.status(200).json({menssage:"categoria no se creo correctamente"}))
        return (res.status(200).json({menssage:"categoria creada correctamente",categoriaCreate}))
    } catch (error) {
        return (res.status(500).json({menssage:error}))
    }
}

export const update = async (req, res) => {
    try {
        const categorieUpdate = await categoriaModels.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
        })
       if(categorieUpdate)return (res.status(200).json({menssage:"categoria actualizada correctamente",categorieUpdate}))
        return (res.status(401).json({menssage:"categoria actualizada correctamente",categorieUpdate}))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const dalete = async (req, res) => {
    try {
        const categorieDalate = await categoriaModels.findByIdAndDelete(req.params.id)
        if(categorieDalate)return (res.status(200).json({menssage:"eliminado correctamente",categorieDalate}))
        return (res.status(401).json({menssage:"eliminado correctamente"}))
    } catch (error) {
        return (res.status(500).json(error))
    }
}

export const listId = async (req, res) => {
    try {
        const categorie = await categoriaModels.findById(req.params.id)
        if (categorie) {
            return (res.status(200).json(categorie))
        }
        return (res.status(401).json("eror al listar "))
    } catch (error) {
        return (res.status(500).json(error))
    }
}


