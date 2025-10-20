require('dotenv').config(); // .env 읽기

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI; // .env에서 불러옴

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => res.send('hello express'));

app.listen(port, () => console.log(`${port} is Open..`));
