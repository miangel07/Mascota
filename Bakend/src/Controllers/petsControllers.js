import petsModels from "../models/pets.js";


export const Listar = async (req, res) => {

    try {
       
        const pets = await petsModels.find({},"name images")
        .populate("race_id","name")

        if(pets)return (res.status(200).json(pets))
        return (res.status(401).json({menssage:"no se listo correctamente"}));
    } catch (error) {
        return (res.status(500).json({menssage:error}));
    }
}

export const create= async (req, res) => {
   
 
        try {
            const pet = new petsModels({
                name: req.body.name,
                race_id: req.body.race_id,
                categorira: req.body.categorira,
                genders: req.body.genders,
                images: req.file.originalname
            });

            await pet.save();
            return res.status(201).json({ message: 'Mascota creada correctamente', pet });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
}
export const eliminar =async(req,res)=>{
    try {
        const petDelete = await petsModels.findByIdAndDelete(req.params.id)
        if(petDelete) return (res.status(200).json({message:"mascota eliminada correctamente",petDelete}))
        return (res.status(401).json({message:"mascota no se elimino correctamente"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}
export const actualizar = async(req,res)=>{
  
    try {
        let {name ,race_id,categorira,genders}=req.body
        let id=req.params.id
       /*  let images =file.originalname */

        
        const petUpdate = await petsModels.findByIdAndUpdate(
            {_id:id},
            {$set:{
                name:name,
                race_id:race_id,
                categorira:categorira,
                genders:genders,
                images:req.file.originalname
            }
        },

        )
        if(petUpdate) return (res.status(200).json({message:"mascota actualizada correctamente",petUpdate}))
        return (res.status(401).json({message:"mascota no se actualizo correctamente"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}
export const listarId=async(req,res)=>{
    try {
        const petId = await petsModels.findById(req.params.id)
        if(petId) return (res.status(200).json(petId))
        return (res.status(401).json({message:"mascota no existe"}))
    } catch (error) {
        return (res.status(500).json({message:error.message}))
    }
}








