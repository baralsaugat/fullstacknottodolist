import mongoose from "mongoose";

const mongoclient = async () => {
  const connStr =
    process.env.NODE.ENV === "production"
      ? process.env.PROD_MONGO_CLIENT
      : process.env.MONGO_CLIENT;
  try {
    const con = await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    if (con) {
      console.log("mongo is connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoclient;
