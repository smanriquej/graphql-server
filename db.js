import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://usrUploadData:taiconsas.@cluster0.vbvxner.mongodb.net/palmares-osft?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
})
.then(() => {
  console.log('connected to MongoDB');
})
.catch(error => {
  console.log('error connection to MogoDB', error.message);
})