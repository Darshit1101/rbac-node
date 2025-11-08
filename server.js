const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/User');

dotenv.config();
connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/user', userRoutes);

//listening port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
