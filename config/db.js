import mongoose from 'mongoose';
import colors from 'colors';
import pkg from 'colors';
const {bgMagenta} = pkg;

const connetDB =async() =>{
    try{
         const conn = await mongoose.connect(process.env.MONGO_URL);
         console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(
            `error in mongo ${error}`.bgRed.white);
    }
};

export default connetDB;
 