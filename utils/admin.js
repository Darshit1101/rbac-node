const bcrypt = require("bcrypt");
const User = require("../models/User");

// Create an admin user
const createAdmin = async () => {
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
        return;
    }

    const adminName = process.env.ADMIN_NAME;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await User.create({
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
    });
};

module.exports = { createAdmin };