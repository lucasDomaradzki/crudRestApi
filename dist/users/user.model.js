"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String },
    nickname: { type: String },
    contact: {
        phone: { type: String },
        email: { type: String }
    },
    password: { type: String }
});
exports.User = mongoose.model('User', userSchema);
