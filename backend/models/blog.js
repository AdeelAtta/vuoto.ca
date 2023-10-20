import mongoose from "mongoose"

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true },
        thumbnail: { type: String, required: true },
        tags: { type: String },
        desc: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

mongoose.models = {}

export default mongoose.model("Blog", blogSchema)