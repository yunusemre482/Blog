const   mongoose=require('mongoose');

const siteSchema=new mongoose.Schema({
    homeImg     :{ type:String  ,   required:'Can not be empty'},
    aboutImg    :{ type:String  ,   required:'Can not be empty'},
    homeImg     :{ type:String  ,   required:'Can not be empty'},
    aboutText   :{ type:String  ,   required:'Can not be empty'},
    contactImg  :{ type:String  ,   required:'Can not be empty'},
    contactText :{ type:String  ,   required:'Can not be empty'},

});


module.exports=mongoose.model('Site',siteSchema);

