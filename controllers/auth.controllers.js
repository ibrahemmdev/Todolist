import userModels from "../models/user.models.js";
import expressAsyncHandler from "express-async-handler";
import tokenCreate from "../utils/token.utils.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

export const registerControllers = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const user = new userModels({ name, email, password });
    user.save();

    const payload = {
        id: user._id,
        hash: crypto.randomBytes(32).toString("hex")
    }

    res.status(201).json({ token: await tokenCreate(payload, "3d") });
});

export const loginControllers = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await userModels.findOne({ email });

    if(!user) return res.status(400).json({ message: "invalid email or password"});

    const isSamePassword = await bcrypt.compare(password, user.password);

    if(!isSamePassword) return res.status(400).json({ message: "invalid email or password"});

    const payload = {
        id: user._id,
        hash: crypto.randomBytes(32).toString("hex")
    }

    res.status(200).json({ token: await tokenCreate(payload, "3d") });
});