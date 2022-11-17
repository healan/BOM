import express from 'express';
import cors from 'cors';
import 'date-utils';

var app = express();
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
const port = process.env.port || 9998;
import dotenv from "dotenv";
dotenv.config();
import { selcustomer } from "./customer.js";

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({
  origin: '*'
})); 

// app.get('/api/customerinfo/', customerinfo);

app.post('/api/customer/', selcustomer);

app.listen(port, ()=> 
    console.log(`Listening on port ${port}`)
)