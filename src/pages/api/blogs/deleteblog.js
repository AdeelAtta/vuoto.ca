import db from "../../../../backend/middleware/db"
import blog from "../../../../backend/models/blog"

const handler = async (req, res) => {
    const id = JSON.parse(req.body).id
    if (req.method == 'POST') {
        try {
            let item = await blog.findByIdAndDelete({_id:id})
            item.save();
            res.status(200).json({ success: "Blog deleted Successfully" })
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }

    } else {
        res.status(400).json({ error: "Method not Allowed" })
    }
}

export default db(handler);
