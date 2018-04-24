const mongoose=require("mongoose"),
		moment=require("moment"),
		datemask="MMMM Do YYYY, h:mm:ss a",

		invoiceSchema=new mongoose.Schema({
			invoiceId:Number,
			date: {
				type:String,
				default:moment().format(datemask)
			}, 
			
			transaction:{
				type:mongoose.Schema.Types.ObjectId,
				ref:"Transaction"
			}
		});

		module.exports=mongoose.model("Invoice", invoiceSchema);