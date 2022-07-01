import 'dotenv/config.js';
import './db/mongoose.js';
import express from 'express';
import driverRouter from './routes/driverRouter.js';
import predictionRouter from './routes/predictionRouter.js';
import userRouter from './routes/userRouter.js';
import teamRouter from './routes/teamRouter.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use('/users', userRouter);
app.use('/teams', teamRouter)
app.use('/drivers', driverRouter)
app.use('/predictions', predictionRouter)
app.use('/', (req, res) => {
    res.send('La Porra Backend')
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));