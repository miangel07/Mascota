import mongoose from "mongoose";


const ganders = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    }
})
const gandersModels= mongoose.model('ganders',ganders)
export default gandersModels
