const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000'],
}));
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/api/array', itemRoutes);

// MongoDB Connection
const mongooseUrl = "mongodb://localhost:27017/jokesDB";
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
