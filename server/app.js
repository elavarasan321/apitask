import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Routes from "./routes";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { dirname } from "path";
dotenv.config();


const app = express();

mongoose.connect("mongodb://localhost/apitasks",{useNewUrlParser: true , useUnifiedTopology: true},()=>{
    console.log("db connected");
    
    })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
Routes(app);

export default app;



