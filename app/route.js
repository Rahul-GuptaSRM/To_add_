
module.exports=function(app)
{


 app.get('/second.html',function(req,res)
   {
res.render('../public/view/second.html',{user: req.user});
   });

 app.get('/blog.html',function(req,res)
   {
res.render('../public/view/blog.html',{user: req.user});
   });
 };