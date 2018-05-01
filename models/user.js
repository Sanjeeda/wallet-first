const mongoose=require("mongoose"),
		moment=require("moment"),
		datemask="MMMM Do YYYY",
		passportLocalMongoose=require("passport-local-mongoose"),
		userSchema=new mongoose.Schema({

			title: String,
			firstname: String,

			lastname: String,

			status: {
				type: Boolean,
				default:0
			},
			accounttype:String,
			contact: Number,
			// ADD DIGIT COUNT VALIDATION 
			/*email:{
			        type: String,
			        trim: true,
			        lowercase: true,
			       
			        required: 'Email address is required',
			        validate: [validateEmail, 'Please fill a valid email address'],
			        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
			    },*/
			since:{
				type:String,
				default:moment().format(datemask)
			},
			userid:{
				type:String,
				
				default:function(){
				return this.firstname+"-"+this.accounttype+"-"+100;
				}
			},
			idtype:String,
			balance: 
			{
				type:Number,
				default:0
			},
			username:String,
			password:String,
			transaction:[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:'Transaction'

			}],
			currency:String

		});

		function validateEmail(email) {
    		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    		return re.test(email);
			};

		userSchema.plugin(passportLocalMongoose);

		module.exports=mongoose.model("User", userSchema);
