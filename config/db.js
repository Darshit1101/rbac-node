const mongoose = require("mongoose");
const { createAdmin } = require("../utils/admin");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await createAdmin();
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
