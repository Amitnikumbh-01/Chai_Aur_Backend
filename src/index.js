import 'dotenv/config';
import mongoose from 'mongoose';
//import { DB_NAME } from './constants.js';
import connectDB from './db/index.js'; // Ensure you are importing the correct file

//console.log(`DB_NAME: ${DB_NAME}`); // Log the DB_NAME to verify

connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
 })         // async function execute hone ke baad promise return hota hai
  .catch((err)=>{
    console.log('MONOGODB connection failed !!!',err)
  }) 

// Uncomment and initialize the app if needed
// import express from 'express';
// const app = express();

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (err) => {
            console.log('Error', err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log('ERROR', error);
        throw error;
    }
})();
*/