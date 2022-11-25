import subCategory from "../modal/subcategory.modal.js";
export const sinnnn=async(req,res)=>{
    try {
        const isCateExist = await subCategory.findOne({name:req.body.name})
        if(isCateExist){
           res.send({
              status:false,
              msg:"Sub Category already exist.",
              data:{}
           })
           return;
        }
        const create = await subCategory.create(req.body);
        res.send(create);
    } catch (error) {
        res.send(error)
    }
}

export const Getall=async(req,res)=>{
try {
    const data = await subCategory.find({status:"Active"})
   if(data.length > 0){
      res.send({
         status:true,
         msg:"Data fetch successsfiully.",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"Sub Categories not found.",
         data:[]
      })
   }
    
} catch (error) {
    res.send(error)
}
}
