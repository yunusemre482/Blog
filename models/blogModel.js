const   mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    title       :{ type:String  ,   required:'Can not be empty'},
    sentence    :{ type:String  ,   required:'Can not be empty'},
    imgUrl      :{ type:String  ,   required:'Can not be empty'},
    date        :{ type:String  ,   default:Date.now},
    

    blog        :{type:String  ,   required:'Can not be empty'}
    

});