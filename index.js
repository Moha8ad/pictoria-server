import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.routes.js';

const app = express();

app.use(cors()); 

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


dotenv.config();

app.use('/posts', postRoutes);

const MONGO_CONNECTION = "mongodb+srv://moha8ad:Iq34jgeZe3a1zaPL@bargasht.mjrkw.mongodb.net/pictoriaDB?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));