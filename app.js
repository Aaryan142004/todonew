const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const taskRouter = require('./src/routes/taskRoute');
const userRouter = require('./src/routes/userRoutes');

app.use('/todos',taskRouter);
app.use('/users',userRouter);


module.exports = app