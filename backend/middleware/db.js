import mongoose from "mongoose";

const db = handler => async (req, res) => {
    try {
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }

        // Connect to MongoDB
        await mongoose.connect(`mongodb+srv://admin:vuoto@clustername.lkuan9m.mongodb.net/vuoto?retryWrites=true&w=majority`);

        return handler(req, res);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default db;


