import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.routes.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true}));
app.use(express.urlencoded({ limit: '30mb', extended: true}));

app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('works')
})

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://moha8ad:9tL4v4lP68hxB7Nz@bargasht.mjrkw.mongodb.net/postsDB?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch(error=> console.log(error));