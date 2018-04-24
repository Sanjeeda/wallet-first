const express=require("express"),	
		
		router=express.Router(),
		Transaction=require("../models/transaction"),
		Invoice=require("../models/invoice"),
		User=require("../models/user");

router.get("/", function(req, res){
	User.find({}, function(err, users){
		!err ? res.render("user",{users:users}) : console.log(err) 

	});
	
})
module.exports=router;

