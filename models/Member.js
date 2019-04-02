const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: { 
        type : String, 
        required: [true, 'Name is required'], 
        minlength :3, 
        maxlength:25
    },
    address : {
        type : String,
        required : [true, 'Address is required']
    },
    zipcode : String,
    email: {
        type : String, 
        validate: [
            { validator: function unique(email) {
                    return mongoose.model('Member', memberSchema).findOne({email : this.email, _id : {$ne : this._id}})
                    .then(found => {
                        if (found !== null) {  
                            return false
                        } 
                    })
                }, message : 'Email already exist'
              },
              {
                validator : function isEmail(email) {
                    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(email)
                }, message : 'Email not valid'
              }
        ],
        required : [true, 'Email is required']
    },
    phone: { 
        type : String, 
        required: [true, 'Phone is required'], 
        minlength :10, 
        maxlength:18
    }
})



module.exports = mongoose.model('Member', memberSchema)
