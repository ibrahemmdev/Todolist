import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) next();

    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(this.password, salt);

    this.password = pass;

    next();
});

export default mongoose.model("users", userSchema);