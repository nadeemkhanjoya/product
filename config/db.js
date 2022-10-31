import mongoose from "mongoose";
const condb = async()=>{
    const conn = await mongoose.connect(
      "mongodb+srv://prod:TYAev0mpkJa0Rdie@nadeem.mdiaswn.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db is running")

}
export default condb