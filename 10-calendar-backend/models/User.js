
const {SchemaType, model, Schema} = require('mongoose');

// const Cat = mongoose.model('Cat', { name: String });

const UserSchema = Schema({
    name: {
        type:String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    }
})


module.exports = model('User', UserSchema)
