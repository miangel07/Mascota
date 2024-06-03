import mongoose from "mongoose";

const races = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    }
})
const racesModels= mongoose.model('races',races)
export default racesModels
