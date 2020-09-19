const   User    =require('../models/userModel'),
        express=require('express'),
        passport=require('passport'),
        router=express.Router();


let adminAction=[
    {
        actionID:1,
        actionName:'changeHomeImg',
        displayName:'Change homepage header'
    },
    {
        actionID:2,
        actionName:'changeAboutText',
        displayName:'Change homepage header'

    },
    {   
        actionID:3,
        actionName:'addNewBlog',
        displayName:'Add new Blog'

    },
    {
        actionID:4,
        actionName:'listAllBlog',
        displayName:'Change homepage header'

    },
    {
        actionID:5,
        actionName:'changeAboutText',
        displayName:'Change homepage header'

    }
]




router.get('/admin',(req,res)=>{
    res.render('admin/admin',{adminAction:adminAction});

})
router.get('/signin',(req,res)=>{
    res.render('admin/signin');
});        


router.get('/signup',(req,res)=>{
    res.render('admin/signup');
});  

router.post('/signin',(req,res)=>{
    
});        


router.post('/signup',(req,res)=>{
    
    let newuser=User({username:req.body.username});
    User.register(newuser,req.body.password,(err,user)=>{
        if(err){
            res.redirect('/signup');
        }
        passport.authenticate('local',(req,res)=>{
            res.redirect('/');
        })
    });
});       



module.exports=router;