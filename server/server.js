import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.json({ "title": "hello CRUD" });
});

app.listen(PORT, () => { `Server is running at ${PORT}`; });