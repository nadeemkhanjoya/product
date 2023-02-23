import product from "../modal/product.modal.js";
// import ProductImages from "../models/product.images.model.js";
export const productcreat = async(req,res) => {
    try{
        var allImages = [];
        req.files.forEach(image => {
           var imageType = '';
            if(image.mimetype == 'image/png'){
                imageType = 'png';
            }else if(image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg'){
                imageType = 'jpg';
            }
            let imageData = {
                path:image.filename,
                fullpath:"localhost:3002/"+image.path,
                type:imageType,
            }
               allImages.push(imageData)
        });
        req.body.images = allImages
    
    const createProd = await product.create(req.body);
    if(createProd){
        
    }
    res.send(createProd);
}catch(err){
    res.send({
        status:false,
        msg:"Something wrong with request.",
        data:err
    });
}
} 

export const productget = async(req,res)=>{
    // const find = await product.findOne({is_popular:"0"})
    var where = {status:"Active",sub_cate_id:req.params.subCateId}
    // if(req.query.search){
    //     where.name = req.query.search;
    // }
const data = await product.find(where).sort({'_id': -1});
if(data.length > 0){
    res.send({
       status:true,
       msg:"Data fetch successsfiully.",
       data:data
    })
 }else{
    res.send({
       status:false,
       msg:"Product not found.",
       data:[]
    })
 }
}

export const popular =async(req,res)=>{
    var sarch = await product.find({is_popular:"1"})
    if(sarch){
        res.send({
            status:true,
            msg:"Data fetch successsfiully.",
            data:sarch
        })
    }
    else{
        res.send({
            status:false,
            msg:"Product not found.",
            data:[]
         })
    }
} 


export const best =async(req,res)=>{
    var sarch = await product.find({is_best:"1"})
    if(sarch){
        res.send({
            status:true,
            msg:"Data fetch successsfiully.",
            data:sarch
        })
    }else{
        res.send({
            status:false,
            msg:"Product not found.",
            data:[]
         })
    }
} 

export const rs  = async (req,res)=>{
    var find = await product.find() 
   var aa=  [find.price]
   res.send(aa)
}