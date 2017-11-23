var mongoose = require("mongoose");
var router = require('express').Router();
var blogwalla = require("./blog_model");




	router.post("/blog_detail",function(req,res)
	{
		var newdata1 = new blogwalla();
		newdata1.Descp = req.body.Descp;
		newdata1.Title = req.body.Title;
		newdata1.User = req.body.User;

                //console.log(newdata.name);
		newdata1.save(function(err)
		{
			if(err)
				res.send(err);

			console.log("sucess");
		});
	});

	router.get("/blog_detail",function(req,res)
		{
             blogwalla.find(function(err,blog_model)
             {
                   if(err)
                   	res.send(err);

                   res.json(blog_model);
             })

		});


	module.exports = router;