import RacesModels from "../models/races.js";

export const racesregistre = async (req, res) => {
 try {
    const races = new RacesModels({
        name: req.body.name
    });
    await races.save()
    if (races) return(res.status(201).json({menssage:"raza registrada correctamente",races}));
    return(res.status(401).json({menssage:"raza  no registrada correctamente",races}));
 } catch (error) {
    console.log(error)
    return(res.status(500).json({menssage:error.message}));
 }
}

export const Listar = async (req, res) => {
    try {
        const racesList = await RacesModels.find();
        if (racesList) {
            return (res.status(200).json(racesList))
        }
        return (res.status(401).json({menssage:"no se pudo listar correctamente"}));
    } catch (error) {
        console.log(error)
    }
}

export const ListarId = async (req, res) => {
    try {
        const raceslist = await RacesModels.findById(req.params.id);
        if (raceslist) {
            return (res.status(200).json(raceslist))
        }
        return (res.status(401).json({menssage:"no se encontro raza"}))
    } catch (error) {
        console.log(error)
    }
}

export const Actualizar = async (req, res) => {
    try {
        const racesUpdate = await RacesModels.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(racesUpdate) return (res.status(200).json({message:"raza actualizado correctamente",racesUpdate}))
            return (res.status(401).json({ message: "raza no existe" }))
        } catch (error) {
       
            return (res.status(500).json({ message: error.message }))
    }
}

export const Eliminar = async (req, res) => {
    try {
        const racesDelete = await RacesModels.findByIdAndDelete(req.params.id);
        if(racesDelete) return (res.status(200).json({message:"raza eliminado correctamente",racesDelete}))
        return (res.status(401).json({message: " no se elimino correctamente"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}
