const	express=require("express"),	
		app=express(),
	
		mongoose=require("mongoose"),
		bodyParser=require("body-parser"),
		ejsLint = require('ejs-lint'),
		//AUTHENTICATION PACKAGE
		passport=require("passport"),
		LocalStrategy=require("passport-local"),
		
		//IMPORT MODELS
		User=require("./models/user"),
		Transaction=require("./models/transaction"),
		Invoice=require("./models/invoice"),
		common="123",
		//IMPORT ROUTES
		userRoutes=require("./routes/userRoute");

		mongoose.connect("mongodb://localhost/wallet-first");


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

ejsLint("user");
//app.use(ejsLint("user"));//NOT WORKING ERROR: app.use() requires a middleware function



//ENABLE AUTHENTICATION
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(require("express-session")(
{
secret:"BeHappy", 
resave:false,
saveUninitiazed:false
}

))
app.use(userRoutes);
app.use(function(req, res, next){
	res.locals.currentUser=req.user;
	
	next();
});

//END OF AUTHENTICATION

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
	console.log("champ");
});
