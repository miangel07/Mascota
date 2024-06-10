

import mongoose from "mongoose";
const pets = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    races:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'races',
        required:true
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "category",
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