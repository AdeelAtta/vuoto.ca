import db from "../../../../backend/middleware/db";
import { validationResult, check } from "express-validator";
import Auth from "../../../../backend/models/Auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    try {
        // await Promise.all([
        //     check("email", "Enter a valid email").isEmail().run(JSON.parse(req.body)),
        //     check("password", "Password cannot be blank").exists().run(JSON.parse(req.body)),
        // ]);

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     const errorMessages = errors.array().map((error) => error.msg);
        //     return res.status(400).json({ errors: errorMessages });
        // }

        const { email, password } = req.body;
        let user = await Auth.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .json({ error: "Please Login with correct Credentials" });
        } else {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res
                    .status(400)
                    .json({ error: "Please Login with correct Credentials" });
            }

            const payload = {
                user: {
                    id: user._id.toString(),
                },
            };

            const access_token = jwt.sign(payload, "MYJWTSECRET");
            res.json({ token: access_token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default db(handler);
