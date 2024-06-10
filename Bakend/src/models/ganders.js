import mongoose from "mongoose";


const genders = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    }
})
const gandersModels= mongoose.model('genders',genders)
export default gandersModels
