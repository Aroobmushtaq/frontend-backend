const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    class: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
