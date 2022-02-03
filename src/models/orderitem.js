const sqlConnection = require("../services/sqlConnection");


function addOrderItem(data , cb){
    var sql =`INSERT INTO OrderItems 
              (OrderID , ProductID , Quantity , CreatedAt , UpdatedAt)
              VALUES (? , ?, ? , now(), now())`;

    var values=[];
    values.push(data.orderId);
    values.push(data.productId);
    values.push(data.quantity);
    sqlConnection.executeQuery(sql, values, function(err, result){
    cb(err, result);
    })
}

function editOrderItem(data, cb){
    var sql = `UPDATE OrderItems SET 
               Quantity = ? , UpdatedAt = now()
               WHERE OrderId = ? AND ProductId = ? `;
    var values=[];
    values.push(data.quantity);
    values.push(data.orderId);
    values.push(data.productId);
    sqlConnection.executeQuery(sql, values, function(err, result){
    cb(err, result);
    })
}

function deleteOrderItem(data,cb){
    var sql = `DELETE FROM OrderItems
               WHERE OrderId = ? AND ProductId = ? `;
    var values=[];
    values.push(data.orderId);
    values.push(data.productId);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    })
}

function getOrderItem(data, cb){
    var sql = `DELETE FROM OrderItems
    WHERE OrderID = ? AND ProductId = ? `;
    var values=[];
    values.push(data.orderId);
    values.push(data.productId);
    sqlConnection.executeQuery(sql, values, function(err, result){
        cb(err, result);
    });
}

module.exports = {addOrderItem , editOrderItem,  deleteOrderItem, getOrderItem};