import mongoose from "mongoose";

const db = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(`mongodb+srv://admin:vuoto@clustername.lkuan9m.mongodb.net/vuoto?retryWrites=true&w=majority`)
    return handler(req, res)
}

export default db
