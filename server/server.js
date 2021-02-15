import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

app.get('/', (req, res) => {

  const insertSql = 'INSERT INTO movie_reviews (movieName, movieReview) VALUES ("Harry Potter","Excellent!");';
  db.query(insertSql, (err, result) => {
    res.json({ "title": "hello CRUD" });
  });
});

app.listen(PORT, () => { `Server is running at ${PORT}`; });