const   express         =   require('express'),
        mongoose        =   require('mongoose'),
        passport        =   require('passport'),
        localStratagey  = require('passport-local'),
        bodyParser      =   require('body-parser'),
        expressSession  =   require('express-session'),
        User            =   require('./models/userModel'),
        Site            =   require('./models/siteModel'),
        app             =   express();
        
const   homeRoutes=require('./routes/routes'),
        adminRoutes=require('./routes/adminRoutes');

mongoose.connect('mongodb://localhost:27017/MyBlog',{ useNewUrlParser: true , useUnifiedTopology: true});

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));


app.use(require('express-session')({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}));




app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratagey(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(homeRoutes);
app.use(adminRoutes);

const server=app.listen(8000,function(err){
    if(err){
        console.log('error occured');
    }else{
        console.log('port 8000 listining');
    }
})
