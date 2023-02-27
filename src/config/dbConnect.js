import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://alura:123@alura.atkauar.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;