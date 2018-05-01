const express=require("express"),	
		
		router=express.Router(),
		Transaction=require("../models/transaction"),
		passport=require("passport"),
		Invoice=require("../models/invoice"),
		
		User=require("../models/user");
	//	ejsLint("./views/user");//PERHAPS NOT WORKING
router.get("/", function(req, res){
	User.find({}, function(err, userss){
		//!err ? function(){res.render("user",{users:users})} : function(){console.log(err);}
		if(err)
			{console.log(err);} 
		else{
			res.render("user",{users:userss});
			//res.render("user");//NOT
			//res.send("dsdsda");//TESTING OK
			}
	});
	
	});

router.get("/registration", function(req, res){
	res.render("registration");
});

router.post("/registration", function(req, res){
	var password=req.body.password;

	
	User.register(new User({username:req.body.username,
							title:req.body.title,
							firstname:req.body.firstname,
							lastname:req.body.lastname,
							accounttype:req.body.accounttype,
							contact:req.body.contact,
							balance:req.body.contact,
							currency:req.body.currency,
						}), password, function(err, user){
													if(!err) {
													passport.authenticate("local")(req, res, function(){
														//res.render("thankyou");
														res.redirect("/");
														

														})
												}
												else{
													console.log(err); res.send("PROBLEM!") 
												}
			
									}
									)
									});

router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login",
			passport.authenticate("local",{
				successRedirect:"/",
				failureRedirect:"/login"
			}),
	function(req, res){
		//res.render("login");
		//EXPERIMENT

});

router.get("/transaction", function(req, res){
	res.render("transaction");

});

 function isLoggedIn(req, res, next){
 	if(req.isAuthenticated()){
 		return next();
 	};
 };

module.exports=router;

