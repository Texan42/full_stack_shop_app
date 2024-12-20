// const express = require('express') traditional way of initiation, must add "type": "module" under scripts in package.json to do this
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js"

//allows .env variable (URI) to be read
dotenv.config();
//receiving port from env
const PORT = process.env.PORT || 5000;

//creates an express app using the name "app" for all requests/responses
const app = express();

//allows acceptance of JSON data in req.body
app.use(express.json());

//app uses routes in product.route.js / the order goes server > routes > controllers
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});



/*
in package.json this allows for running npm run dev to do the same thing as 
node .\backend\server.js but using package nodemon to update when saving

"scripts": {
    "dev": "nodemon backend/server.js"
  },

  without nodemon it would just be "dev": "node backend/server.js"

  run the server using "npm run dev"
*/