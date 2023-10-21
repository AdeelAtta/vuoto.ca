import db from "../../../../backend/middleware/db";
import { validationResult, check } from "express-validator";
import Auth from "../../../../backend/models/Auth";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await Promise.all([
                check("email")
                    .isEmail()
                    .withMessage("Enter a valid email")
                    .custom((value) => {
                        return Auth.findOne({ email: value }).then((user) => {
                            if (user) {
                                return Promise.reject("Email already registered");
                            }
                        });
                    })
                    .run(req),
                check("password", "Password must be Strong").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/).run(req),
            ]);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                return res.status(400).json({ errors: errorMessages });
            }

            const { email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcrypt

            let item = new Auth({
                email: email,
                password: hashedPassword, // Store the hashed password in the database
            });
            await item.save();

            res.status(200).json({ success: "Admin Added Successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "Method not Allowed" });
    }
};

export default db(handler);
