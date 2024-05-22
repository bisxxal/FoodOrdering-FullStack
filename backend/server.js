import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
connectDB();

app.use ('/api/food' , foodRouter)
app.use ('/images' , express.static('upload'))
app.use('/api/user',userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.listen(port ,()=>{
    console.log(`server running on ${port}`);
})