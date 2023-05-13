import express from 'express'
import dotenv from 'dotenv'
import {ConnectMongooseFunc} from './database/connect.js'
import fetchproduct from './routes/fetchproduct.js'
import postproduct from './routes/postproduct.js'
import Updateprice from './routes/Updateprice.js'
import fetchsingleproduct from './routes/fetchsingleproduct.js'


const app = express()
const port = 3000

dotenv.config()
app.use(express.json())
app.use('/',fetchproduct)
app.use('/post',postproduct)
app.use('/update',Updateprice)
app.use('/single',fetchsingleproduct)


// Connecting Express Server with mongodb mongoose
const MongooseConnect = () => {
    try {
      ConnectMongooseFunc()
      app.listen(port, () => {
        console.log(`Mongoose Connected http://localhost:${port}`)
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  MongooseConnect()
