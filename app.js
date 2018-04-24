const	express=require("express"),	
		app=express(),
	
		mongoose=require("mongoose"),
		
		//IMPORT MODELS
		User=require("./models/user"),
		Transaction=require("./models/transaction"),
		Invoice=require("./models/invoice"),
		
		//IMPORT ROUTES
		userRoutes=require("./routes/userRoute");

		mongoose.connect("mongodb://localhost/wallet-first");

app.use(express.static("public"));
app.use(userRoutes);
app.set("view engine","ejs");

var userArray=[
	{
		title:"Ms",
		firstName:"Rimi",
		lastName:"Roy",
		accountType:"Merchant",
		balance:5000,
		contact:017777,
		//email:"abc@abc.com"
	}
]

/*User.create(userArray, function(err, result){

	!err ? console.log(result) : console.log(err) 
});
*/

app.listen(3000, function(){
	console.log("survived");
});
