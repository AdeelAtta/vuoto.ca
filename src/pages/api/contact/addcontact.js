import db from "../../../../backend/middleware/db";
import contact from "../../../../backend/models/contact";
import { validationResult, check } from "express-validator";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            await Promise.all([
                check("name").trim().notEmpty().withMessage('Name is required'),
                check("email")
                    .isEmail()
                    .withMessage("Enter a valid email").run(req),
                check('message').trim().notEmpty().withMessage('Message is required')
            ]);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                return res.status(400).json({ errors: errorMessages });
            }

            const data = req.body
            let item = new contact({ ...data })
            await item.save();
            res.status(200).json({ success: "Form Submitted Successfully" })
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }

    } else {
        res.status(400).json({ error: "Method not Allowed" })
    }
}


export default db(handler);