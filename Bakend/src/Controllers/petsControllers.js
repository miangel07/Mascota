import petsModels from "../models/pets.js";


export const Listar = async (req, res) => {
    try {
        const pets = await petsModels.find();

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







