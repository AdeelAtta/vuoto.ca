import mongoose from "mongoose"

const newsLetter = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
    },
    {
        timestamps: true
    }
)

mongoose.models = {}

export default mongoose.model("newsletter", newsLetter)