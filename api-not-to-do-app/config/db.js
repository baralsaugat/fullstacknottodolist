import mongoose from 'mongoose';


const MONGO_CLIENT ='mongodb://localhost/task_lists';
const mongoclient = async () => {
    try{

const con = await mongoose.connect(MONGO_CLIENT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
    

if (con){
    console.log("mongo is connected")
}
    }catch(error)
{
    console.log(error)
}
}

export default mongoclient;