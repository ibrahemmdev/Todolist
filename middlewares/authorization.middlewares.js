import userModels from "../models/user.models.js";
import jsonwebtoken from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).json({ message: "Unauthorized" });
    }

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jsonwebtoken.verify(token, process.env.secret);

    const user = await userModels.findById({ _id: decoded.id }).select("-password");

    if(!user) return res.status(400).json({ message: "Unauthorized" });

    req.user = user
    next();
}

export default authMiddleware;