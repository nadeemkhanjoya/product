import express from "express";
import condb from "./config/db.js";
import catergoryrout from "./router/Category.router.js";
import productroute from "./router/product.route.js";
import reviewreting from "./router/reviewreting.route.js";
import subcategory from "./router/subcategory.router.js";
import { config } from "dotenv";


import userroute from "./router/user.router.js";
import commentrouter from "./router/comment.route.js";
import share from "./router/share.route.js";
const app = express()


// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer();
// const socket = new Server(httpServer, {
// 	cors: {
// 		origins: ['http://dev.adaiya.in','http://localhost:4200','http://localhost:9002'],
// 		'transports': ['websocket', 'pollings']
// 	  },
// });

// const users = {};

// socket.on('connection', (socket) => {
// 	console.log("Connected----");
// 	socket.on('join', function(data){
// 		console.log("Connected Join----",data);
// 	  socket.join(data.questionId);
// 	  users[socket.id] = data.user;
// 	  var  JoinRes = {
// 		message: data.user+' has joined '+data.qName+" question",
// 		users:users,
// 	};
// 	  socket.broadcast.to(data.questionId).emit('new user joined', JoinRes);
// 	});
//   	socket.on('disconnect', function(){
// 		var  JoinRes = {
// 			message: "data.user"+' has joined '+"data.qName"+" question",
// 			users:users,
// 		};
// 		socket.broadcast.to(data.questionId).emit('new user joined', JoinRes);
// 			  delete users[socket.id];
// 			});
// 		  });
// httpServer.listen(3001, () => {
// 	console.log("=======================");
// });





config()
app.use(express.json())
app.use(userroute)
app.use(catergoryrout)
app.use(subcategory)
app.use(reviewreting)
app.use(productroute)
app.use(commentrouter)
app.use(share)
condb()
app.listen(process.env.PORT||1400,(req,res)=>{
    console.log("server is runnig 1400")
})

