import { Schema, model } from "mongoose";

const achatSchema = new Schema({
    boughtDate: {
        type: Date,
        required: true,
        default: Date.now
    },
},
    {
        timestamps: true
    }
);

export default model("Achat", achatSchema);