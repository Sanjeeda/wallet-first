const mongoose=require("mongoose"),
		moment=require("moment"),
		datemask="MMMM Do YYYY",
		
		userSchema=new mongoose.Schema({

			title: String,
			firstName: String,

			lastName: String,

			status: {
				type: Boolean,
				default:0
			},
			accountType:String,
			contact: Number,
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
			userId:{
				type:String,
				
				

				default:function(){
				return this.firstName+"-"+this.accountType+"-"+100;
				}
			},
			idType:String,
			balance: Number,
			transaction:[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:'Transaction'

			}]

		});

		function validateEmail(email) {
    		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    		return re.test(email);
			};

		module.exports=mongoose.model("User", userSchema);
