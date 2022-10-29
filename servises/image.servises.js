import multer from "multer";
import path from "path";
console.log("servise on");
const imagestorage = multer.diskStorage({
    destination: 'product_image_upload',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
export const imageupload = multer({
    storage: imagestorage,
    limits: {
        fileSize: 1000000 * 3
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }



})