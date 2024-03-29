import express from 'express';
import mongoose from 'mongoose';

import gameRoutes from './routes/game.js';
import userRoutes from './routes/user.js';
import achatRoutes from './routes/achat.js';

const app = express();
const port = process.env.PORT || 9090;
const database = "cs2cinfo4";

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
.then(() => {
  console.log(`Connected to ${database} database`);
})
.catch(err => {
  console.log(`Error connecting to ${database} database`, err);
});

app.use(express.json());

app.use('/game', gameRoutes);
app.use('/user', userRoutes);
app.use('/buy', achatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});