import reviewrating from "../modal/reveiwreting.modal.js"
export const sinnn = async (req, res) => {
    try {
        const sinreviw = await reviewrating.findOne({subcate:req.body.subcate})
        if(sinreviw){
            res.send({
                status:false,
                msg:"alreadu reted",
                data:{}
            })
        }
        var aad = await reviewrating.create(req.body)
        if(aad){
        res.send({
            status:true,
            msg:"succesfully",
            data:aad
        })
    }
    } catch (error) {
        res.send(error)
    }
}

export const GetAll = async(req,res)=>{
    try {
        const data = await reviewrating.find({subcate:req.body.subcate}).populate("userId").populate("subcate");
        if(data.length > 0){
           res.send({
              status:true,
              msg:"Rating and reviews fetch successfully.",
              data:data
           })
        }else{
           res.send({
              status:false,
              msg:"No rating and reviews found for this product.",
              data:[]
           })
        }
       
    } catch (error) {
        res.send(error)
    }
}