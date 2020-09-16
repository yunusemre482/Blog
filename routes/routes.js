const   express =   require('express'),
        router  =   express.Router();

var data=[
    {
       postTitle:"Blog 1",
       postSubTitle:"Açılış Bloğu",
       postImg :"https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2096&q=80"
    },
    {
        postTitle:"Blog 2",
        postSubTitle:"about Computer Science",
        postImg :"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
     },
     {
        postTitle:"Blog 3",
        postSubTitle:"About flover",
        postImg :"https://images.unsplash.com/photo-1512236258305-32fb110fdb01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3153&q=80"
     }
]

router.get('/',(req,res)=>{
    res.render('home',{infos:data});
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

module.exports=router;
