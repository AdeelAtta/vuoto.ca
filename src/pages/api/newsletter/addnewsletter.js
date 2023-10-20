import db from "../../../../backend/middleware/db";
import newsLetter from "../../../../backend/models/newsLetter";
import { validationResult, check } from "express-validator";

import Cors from 'micro-cors';

const cors = Cors({
    allowedMethods: ['POST'], // Specify the allowed HTTP methods
    origin: 'https://www.vuoto.ca', // Specify the allowed origin (you can use '*' for any origin)
  });

const handler = async (req, res) => {

    if (req.method == 'POST') {
        res.setHeader('Access-Control-Allow-Origin', 'https://www.vuoto.ca');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        try {
            await Promise.all([
                check("email")
                    .isEmail()
                    .withMessage("Enter a valid email")
                    .custom((value) => {
                        return newsLetter.findOne({ email: value }).then((email) => {
                            if (email) {
                                return Promise.reject("Email already registered");
                            }
                        });
                    })
                    .run(req),
            ]);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                return res.status(400).json({ errors: errorMessages });
            }

            const data = req.body
            let item = new newsLetter({ ...data })
            await item.save();
            res.status(200).json({ success: "Email Subcribed Successfully" })
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }

    } else {
        res.status(400).json({ error: "Method not Allowed" })
    }
}


export default db(handler);