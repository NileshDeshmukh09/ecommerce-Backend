const Category =require('../models/category');

module.exports = {
    listCategories: function(req, res){
        Category.listCategories(function (err, result){
           if(err){
               console.log(err);
               return res.status(500).send({
                   msg: "Error in fetching Categories, Ohh !",
                   success : false,
                //    status : 500 // Internal server Error
                });
           }
           return res.status(200).send({
                            msg : "Successfully fetched categories",
                            categories: result,
                            success : true,
                            // status : 200      // Success msg , 400 - BadRequest
                            });
        })

    }
}