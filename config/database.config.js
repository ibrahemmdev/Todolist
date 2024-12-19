import mongoose from "mongoose";
import chalk from 'chalk';

const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log(chalk.green("[MongoDb] Connected successfully"))
    } catch (error) {
        console.error(`Database failed to connect : ${error}`)
    }
}

export default databaseConnect;