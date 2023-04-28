import mongoose from "mongoose";

const connectDB = (url) => { 
  mongoose.set("strictQuery", true);    //Mongoose will throw an error when attempting to query a MongoDB database with invalid or undefined fields.
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongo"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
