import express from 'express';
import cors from 'cors';
import multer from 'multer';
import iconv from 'iconv-lite';
import fs from 'fs';

var app = express();
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
const port = process.env.port || 9998;

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({origin: '*'})); 

import { srchProduct, addProduct, delProduct } from './api.js';


app.get('/api/srchProduct/', srchProduct);
app.post('/api/addProduct/', addProduct);
app.delete('/api/delProduct/:id', delProduct);

app.listen(port, ()=> 
    console.log(`Listening on port ${port}`)
)