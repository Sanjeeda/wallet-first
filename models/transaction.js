const mongoose=require("mongoose"),
		moment=require("moment"),
		datemask="MMMM Do YYYY, h:mm:ss a",

		transactionSchema=new mongoose.Schema({
			amount:Number,
			timestamp: {
				type:Date,
				default:moment().format(datemask)
			}, 
			sender:String,
			receiver:String,
			currency:String,
			service:String

		});

		module.exports=mongoose.model("Transaction", transactionSchema);