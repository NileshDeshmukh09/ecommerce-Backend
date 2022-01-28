const sqlConnection = require("../services/sqlConnection");

    function listOrderDetails(data, cb){ //cb is representing the functionality of caller
        var sql = "SELECT * from ecommercedb.Users U INNER JOIN ecommercedb.OrderDetails O on U.ID = O.UserID INNER JOIN ecommercedb.OrderItems OI ON O.ID = OI.OrderID INNER JOIN ecommercedb.Products P ON P.ID = OI.ProductID WHERE U.ID = ?";
        var values =[] //because the above sql doesn't need any data.
        values.push(data.user_id)
        sqlConnection.executeQuery(sql, values, function(err, result){
            cb(err, result);
        })
    }

 
    
module.exports = {listOrderDetails}