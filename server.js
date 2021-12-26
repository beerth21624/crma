const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const fileRouter = require('./routes/file');
const activityRouter = require('./routes/activity');

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use('/api/auth/', authRouter);
app.use('/api/admin/', fileRouter);
app.use('/api/activity', activityRouter);

app.listen(8000, () => {
  console.log('backend start');
});
