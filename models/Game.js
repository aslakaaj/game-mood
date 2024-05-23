import mongoose from "mongoose";
const {Schema} = mongoose;

const gameSchema = new Schema({
    Feeling: {
        type: String,
        required: true
    },
    
    Title: {
        type: String,
        required: true
    },

    Year: {
        type: Number,
        required: true
    },

    Metacritic: {
        type: Number,
        required: true
    },

    Genre: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

export default mongoose.models.Game || mongoose.model("Game", gameSchema);