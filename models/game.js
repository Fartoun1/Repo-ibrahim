import { Schema, model } from "mongoose";

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

export default model("Game", gameSchema);