const sqlConnection = require("../services/sqlConnection");

    function listCategories(cb){ //cb is representing the functionality of caller
        var sql = "Select ID as categoryID, Name as name FROM Categories";
        var data =[] //because the above sql doesn't need any data.
        sqlConnection.executeQuery(sql, data, function(err, result){
            cb(err, result);
        })
    }

    // function filterProducts(cb){
    //     var sql = "Select Max(Prcie), Min(Price) FROM Products";
    //     var data =[];
    //     sqlConnection.executeQuery(sql,data, function(err, result){
    //         cb(err,result);
    //     })
    // }

    
module.exports = {listCategories}