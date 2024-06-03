import mongoose from "mongoose";

const categoria = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:50
    }
})
const categoriaModels= mongoose.model('categoria',categoria)
export default categoriaModels