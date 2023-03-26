import Express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users' 
import roomRouter from './routes/rooms'
import messageRouter from './routes/messages'
const app = Express();
 
app.use(Express.json()); 

app.use('/users', userRouter)
app.use('/rooms', roomRouter)
app.use('/messages', messageRouter)
export default app; 