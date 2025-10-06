const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://maniayush:Ad%2332145@mongodb1.hgwgu3f.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB1"
        );
        console.log("✅ MongoDB Atlas connected...");
    } catch (err) {
        console.error("❌ DB Connection Failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
