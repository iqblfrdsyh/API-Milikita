import mongoose from "mongoose";

const Team = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    noHp: {
        type: String,
        required: true
    }
})

export default mongoose.model('teams', Team)