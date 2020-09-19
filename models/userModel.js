const   mongoose=require('mongoose'),
        localMoongoose=require('passport-local-mongoose');
const { use } = require('../routes/routes');

const userSchema=new mongoose.Schema({

    username:   String,
    password:   String
});

userSchema.plugin(localMoongoose);

module.exports=mongoose.model('User',userSchema);