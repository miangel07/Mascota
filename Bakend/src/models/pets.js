//ejemplo
/* race_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'generos'
}, */

import mongoose from "mongoose";
const pets = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const petsModels= mongoose.model('pets',pets)
export default petsModels