import db from "../../../../backend/middleware/db"
import newsLetter from "../../../../backend/models/newsLetter"

const handler = async (req, res) => {
  try {
    let letter = await newsLetter.find()
    res.status(200).json({ newsLetter: letter })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default db(handler);
