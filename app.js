const   express     =  require('express'),
        moongose    =  require('mongoose'),
        app         = express();



const homeRoutes=require('./routes/routes')


app.set('view-engine','ejs');
app.use(express.static('public'));


app.use(homeRoutes);

const server=app.listen(8000,function(err){
    if(err){
        console.log('error occured');
    }else{
        console.log('port 8000 listining');
    }
})
