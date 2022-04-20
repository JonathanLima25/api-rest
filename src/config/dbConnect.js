import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Jonathan:fatec*2017@cluster0.8byxv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;