import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected");
    } catch (error) {
        throw new Error(error);
    }
}

export default connectDB;