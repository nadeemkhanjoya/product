import user from "../modal/user.modal.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"
import csv from "csvtojson"
export const sinup = async (req, res) => {
   try {

      const sinn = await user.findOne({ email: req.body.email })
      if (sinn) {
         res.send({
            status: false,
            msg: "already exist",
            data: []
         })
      } else {
         var ootp = Math.floor(1000 + Math.random() * 9000)
         //console.log(ootp);
         var hash = await bcrypt.hash(req.body.password, 10)
         req.body.password = hash
         req.body.otp = ootp
         var creat = await user.create(req.body)
         var token = await jwt.sign({ time: Date(), userid: creat._id }, "jjjj")
         creat.token = token
         res.send({
            status: true,
            msg: "right",
            data: creat
         })
      }

   } catch (error) {
      res.send(error)
   }
}

export const get = async (req, res) => {
   const namee = await user.findOne({ email: req.body.email })
   if (namee) {
      var a = await bcrypt.compare(req.body.password, namee.password)
      if (a == true) {
         namee.token = await jwt.sign({ time: Date(), userId: namee._id }, "jjjj")
         res.send({
            status: true,
            msg: "you are right",
            data: namee
         })
      } else {
         res.send({
            status: false,
            msg: "worng password",
            data: {}
         })
      }
   } else {
      res.send({
         status: false,
         msg: "data not found"
      })
   }
}

export const deletedata = async (req, res) => {
   try {
      const lele = await user.findOne({ email: req.body.email })
      if (lele) {
         const word = await bcrypt.compare(req.body.password, lele.password)
         if (word == true) {
            var dele = await user.findByIdAndDelete(lele)
            res.send({
               status: true,
               msg: "your account delete successfully",
               data: lele
            })
         } else {
            res.send({
               status: false,
               msg: "password incorrect pleass try aggain",
               data: {}
            })
         }
      } else {
         res.send({
            status: false,
            msg: "email dose not exist",
            data: {}
         })
      }
   } catch (error) {
      res.send({
         status: false,
         msg: "something wrong",
         data: {}
      })
   }
}

export const resendOtp = async (req, res) => {
   try {
      var otp = Math.floor(1000 + Math.random() * 9000);
      req.body.otp = otp
      const data = await user.findOneAndUpdate({ email: req.body.email }, req.body)
      data.otp = req.body.otp
      if (data) {
         res.send({
            status: true,
            msg: "otp send",
            data: data
         })
      } else {
         res.send({
            status: false,
            msg: "not otp send",
            data: {}
         })
      }
   } catch (error) {
      res.send({
         status: false,
         data: error
      })
   }

}


export const cheakotp = async (req, res) => {
   var cheak = await user.findOne({ email: req.body.email, otp: req.body.otp })
   if (cheak) {
      var jamil = {}
      jamil.email_verify = true
      await user.findByIdAndUpdate({ _id: cheak.id }, jamil)
      cheak.email_verify = true
      res.send({
         status: true,
         msg: 'veryfy succesfully',
         data: cheak
      })
   } else {
      res.send({
         status: false,
         msg: 'veryfy unsucces',
         data: {}
      })
   }

}
// export const emailSend = async (req, res) => {
//    try {
//       var otp = Math.floor(1000 + Math.random() * 9000)
//       var transepoter = nodemailer.createTransport({
//          host: "smtp.gmail.com",
//          port: 587,
//          secure: false,
//          requireTLS: true,
//          auth: {
//             user: "thenadeemkhan00@gmail.com",
//             pass: "esxdqcvlcnirkdoj"
//          }
//       })
//       var mailOption = {
//          from: "thenadeemkhan00@gmail.com",
//          to: req.body.email,
//          subject: "your app otp--",
//          html: "<p>your app otp is:" + otp + "</ap>"
//       }
//       transepoter.sendMail(mailOption, function (err, info) {
//          if (err) {
//             console.log("error--", err);
//          } else {
//             console.log("info---", info.response);
//          }
//       })
//       req.body.otp = otp
//       const findId = await user.findOneAndUpdate({ email: req.body.email }, req.body)
//       findId.otp = req.body.otp
//       res.send({
//          status: true,
//          data: findId
//       })
//    } catch (err) {
//    }
// }

export const email_paas = async (req, res) => {
   try {
      var otp = Math.floor(1000 + Math.random() * 9000)
      var tra = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         requireTLS: true,
         auth: {
            user: "thenadeemkhan00@gmail.com",
            pass: "esxdqcvlcnirkdoj"
         }
      })
      var option = {
         from: "thenadeemkhan00@gmail.com",
         to: req.body.email,
         subject: "send v code",
         html: "<p>your otp-----------" + otp + "</ap>"
      }
      tra.sendMail(option, function (err, info) {
         if (err) {
            console.log(err)
         } else {
            console.log(info.response);
         }
      })
      req.body.otp = otp
      const fin = await user.findOneAndUpdate({ email: req.body.email }, req.body)

      fin.otp = req.body.otp
      if (fin) {
         res.send({
            status: true,
            data: fin
         })
      } else {
         res.send({

            status: false,
            data: []

         })
      }
   } catch (error) {
      res.send(error)
   }
}

export const forgot = async (req, res) => {
   try {
      const email = await user.findOne({ email: req.body.email, otp: req.body.otp })
      if (email) {
         var pass = await bcrypt.hash(req.body.password, 10)
        req.body.password = pass
         await user.findByIdAndUpdate({ _id: email.id }, req.body)
         email.password = pass
         res.send(email)
        


      }
   } catch (error) {

      console.log(error)
   }
}


export const resetpass = async (req, res) => {
   try {
      const checkUserExist = await user.findOne({ _id: req.body._id })
      if (checkUserExist) {
         let checkPass = await bcrypt.compare(req.body.old_pass, checkUserExist.password)
         if (checkPass) {
            var dataToBeUpdate = {};
            const passwordHash = await bcrypt.hash(req.body.new_pass, 10)
            dataToBeUpdate.password = passwordHash;
            await user.findByIdAndUpdate({ _id: checkUserExist._id }, dataToBeUpdate)

            res.send({
               status: true,
               msg: "password reset succesefully",
               data: checkUserExist
            })
         } else {
            res.send({
               status: false,
               msg: "worng old password",
               data: {}
            })
         }
      } else {
         res.send({
            status: false,
            msg: "data not found",
            data: {}
         })
      }

   } catch (err) {
      res.send(err)
   }
}



// export const insertData = async (req, res) => {
//    const jsonArray = await csv().fromFile("coaching_users.csv");
//    var rejected = []
//    var success = 0
//    jsonArray.forEach(async(value,key) => {
//       const IsEmailExist = await user.findOne({ email: value.email })
//       const IsMobileExist = await user.findOne({ mobile: value.mobile })
//       if (IsEmailExist) {
//          rejected.push({
//             email: value.email,
//             reason: "Email already exist.",
//             key: key+1
//          });
//       } else if (IsMobileExist) {
//          rejected.push({
//             email: value.email,
//             mobile: value.mobile,
//             reason: "Mobile already exist.",
//             key: key+1
//          });
//       }
//       else {
//          const passwordHash = await bcrypt.hash(value.password, 10)
//          value.password = passwordHash
//          var user = await user.create(value);
//          if (user) {
//             success+1;
//          }
//       }
//    });
//    if(success == 0){
//       res.send({
//          status:false,
//          msg:"No data inserted.",
//          rejected_data:rejected,
//          success:success,
//       })
//    }else{
//       res.send({
//          status:false,
//          msg:"Data inserted succefully.",
//          rejected_data:rejected,
//          success:success,
//       })
//    }
// }