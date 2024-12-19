import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import authRoute from "./routes/auth.routes.js";
import todoRoute from "./routes/todolist.routes.js";
import databaseConnect from "./config/database.config.js";
import { rateLimit } from "express-rate-limit";

const app = express();
const port = process.env.port || 3000;
const apiVersion = "v1";
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
});

//middlewares
app.use(mongoSanitize());
app.use(helmet());
app.use(cors({ origin: true }));
app.use(bodyParser.json({ limit: "5kb" }));
app.use(bodyParser.urlencoded({ limit: "5kb", extended: false }));
app.use(limiter);

//config
dotenv.config();
databaseConnect();

//routes 
app.use(`/api/${apiVersion}/auth`, authRoute);
app.use(`/api/${apiVersion}/todolist`, todoRoute);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});