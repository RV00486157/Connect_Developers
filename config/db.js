const mongoose = require('mongoose')
const config = require('config')
const dotenv = require('dotenv');


dotenv.config();

const db = config.get('mongoURI')
const password = process.env.PASSWORD;
const connectDB=async()=>{
	try{
		// await mongoose.connect('mongodb://localhost:27017/devConnect',{
		// 	useNewUrlParser:true,
		// 	useUnifiedTopology:true
		// })
		
		await mongoose.connect(db,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex:true
		})
		console.log("MongoDB connected")
	}catch(err){
		console.log(err.message)
		//exit process with failure
		process.exit(1)
	}
}

module.exports = connectDB
