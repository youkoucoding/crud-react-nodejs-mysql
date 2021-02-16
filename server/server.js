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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });

});

app.post('/api/insert ', (req, res) => {

  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const insertSql = 'INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);';
  db.query(insertSql, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

app.listen(PORT, () => { `Server is running at ${PORT}`; });