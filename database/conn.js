import mongoose from 'mongoose';
const MONGO_URI = "mongodb+srv://admin:DataBasePassword@cluster0.cqvyzas.mongodb.net/?retryWrites=true&w=majority"


const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(MONGO_URI)

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;

