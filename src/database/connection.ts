import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(process.env.MONGO_DB_STRING)
.then((data)=>{
  console.log('MongoDB Conected!',data.connection.readyState)
})
.catch(err=> console.log('Conection Failed',err ))

const database = mongoose.connection

export default database;