import db from "../../../../backend/middleware/db"
import blog from "../../../../backend/models/blog"

const handler = async (req, res) => {
  try {
    let blogs = await blog.find()
    res.status(200).json({ blogs })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default db(handler);
