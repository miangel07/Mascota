

import mongoose from "mongoose";
const pets = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'races',
        required:true
    },
    categorira: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "categoria",
        required: true
    },
    genders: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "genders",
        required: true
    },
    images: {
        type: String,
        required: true
    },	

});

const petsModels= mongoose.model('pets',pets)
export default petsModels