import catergory from "../modal/Category.modal.js";

export const sin=async(req,res)=>{
    try {
        const isCateExist = await catergory.findOne({name:req.body.name})
        if(isCateExist){
           res.send({
              status:false,
              msg:"Category already exist.",
              data:{}
           })
           return;
        }
        const create = await catergory.create(req.body);
        res.send(create);
     } catch (err) {
        res.send({
           status: false,
           msg: "SOmething wrong with request.",
           data: err
        })
     }
}

export const getall =async(req,res)=>{
    try {
        const data = await catergory.findo({name:req.body.name}).populate("createdBy")
   if(data.length > 0){
      res.send({
         status:true,
         msg:"Data fetch successsfiully.",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"Categories not found.",
         data:[]
      })
   }
    } catch (error) {
        res.send({
            status: false,
            msg: "SOmething wrong with request.",
            data: err
         })
    }
}

export const lookup = async(req,res)=>{
   const agri = await catergory.aggregate([
      {
         $match: {
            status: "Active"
         },
      },
      {
         "$lookup": {
            "from": "subcategory",
            "localField": "_id",
            "foreignField": "cateId",
            "as": "tryit"
         }
      },
      {
         "$unwind": {
            path: "$tryit",
            preserveNullAndEmptyArrays: true

         }
      },

   ]);
   res.send(agri)
}