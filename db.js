import mongoose from "mongoose";

// const MONGODB_URI = 'mongodb+srv://usrUploadData:taiconsas.@cluster0.vbvxner.mongodb.net/palmares-osft';
const MONGODB_URI = 'mongodb+srv://usrUploadData:taiconsas.@cluster0.vbvxner.mongodb.net/palmares-osft?retryWrites=true&w=majority';

// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://usrUploadData:taiconsas.@cluster0.vbvxner.mongodb.net/palmares-osft?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("palmares-osft").collection("cuoc_indice01");
//   // perform actions on the collection object
//   // console.log(collection.findOne({ cod_indice: "01100" }));
//   console.log('connected to MongoDB - Palmares');
//   client.close();
// });

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
})
.then(() => {
  console.log('connected to MongoDB');
}).catch(error => {
  console.log('error connection to MogoDB', error.message);
})