import mongoose from "mongoose";
const uri = 'mongodb+srv://admin:gun-xwy8YXH5unh2ujh@cluster0.2vaoxlb.mongodb.net/la-porra?authSource=admin&replicaSet=atlas-131vds-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

try{
    const client = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  console.log(error);
}
