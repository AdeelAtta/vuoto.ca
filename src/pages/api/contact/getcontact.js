import db from "../../../../backend/middleware/db"
import contact from "../../../../backend/models/contact"

const handler = async (req, res) => {
  try {
    let contacts = await contact.find()
    res.status(200).json({ contacts })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default db(handler);
