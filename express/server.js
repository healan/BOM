import express from 'express';
import cors from 'cors';
import pkg from 'body-parser';
import { srchProduct, addProduct, delProduct, srchBom, addBom } from './api.js';

const { json, urlencoded } = pkg;
const port = process.env.port || 9998;
var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({origin: '*'})); 

app.get('/api/srchProduct/', srchProduct);
app.post('/api/addProduct/', addProduct);
app.delete('/api/delProduct/:id', delProduct);

app.get('/api/srchBom/', srchBom);
app.post('/api/addBom/', addBom);

app.listen(port, ()=> 
    console.log(`Listening on port ${port}`)
)