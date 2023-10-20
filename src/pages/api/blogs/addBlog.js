import db from "../../../../backend/middleware/db"
import blog from "../../../../backend/models/blog"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const data = JSON.parse(req.body)
        try {
            let item = new blog({...data})
            item.save();
            res.status(200).json({ success: "Blog Added Successfully" })
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }

    } else {
        res.status(400).json({ error: "Method not Allowed" })
    }
}

export default db(handler);
