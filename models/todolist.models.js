import mongoose from "mongoose";

const toDolistSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: "users" }
}, { timestamps: true });

export default mongoose.model("tasks", toDolistSchema);