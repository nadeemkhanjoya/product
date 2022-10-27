import mongoose from "mongoose";
const condb = async()=>{
    const conn = await mongoose.connect("mongodb://localhost:27017/productdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db is running")

}
export default condb