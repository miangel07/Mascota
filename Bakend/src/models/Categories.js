import mongoose from "mongoose";

const category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:50
    }
})
const categoriaModels= mongoose.model('category',category)
export default categoriaModels