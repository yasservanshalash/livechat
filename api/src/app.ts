import Express from 'express';
import bodyParser from 'body-parser';
import passport from "passport";
import JwtStrategy from "./config/passport";

import userRouter from './routes/users' 
import roomRouter from './routes/rooms'
import messageRouter from './routes/messages'

const app = Express();
 
app.use(Express.json()); 

app.use('/users', userRouter)
app.use('/rooms', roomRouter)
app.use('/messages', messageRouter)

app.use(passport.initialize());
passport.use(JwtStrategy);

export default app; 