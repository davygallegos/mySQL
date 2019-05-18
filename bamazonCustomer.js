var mysql = require("mysql");
var inquirer = require('inquirer');
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3307
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

// connect to the mysql server and sql database

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    start();
});


function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function (err, results) {
        //   console.log(results)
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer
            .prompt([
                {
                    name: "itemID",
                    type: "list",
                    message: "What product ID would you like to buy?",
                    choices:
                        function () {
                            var choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].item_id);
                            }
                            return choiceArray;
                        },
                },
                {
                    name: "purchaseQuantity",
                    type: "input",
                    message: "How many units of the product would you like to buy?",
                },


            ])
            .then(function (answer) {

                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_id === answer.itemID) {
                        chosenItem = results[i];
                        console.log(chosenItem)
                    }
                }
                if (chosenItem.stock_quantity > answer.purchaseQuantity) {
                    var updatedQuantity = chosenItem.stock_quantity - parseInt(answer.purchaseQuantity)
                    console.log("this is updated quantity " + updatedQuantity)
                    // bid was high enough, so update db, let the user know, and start over
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: updatedQuantity
                            },
                            {
                                item_id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Your purchase was not to shabby");
                        }

//                 connection.query(
//                     console.log(product_name))

//                 if (answer.purchaseQuantity >= stock_quantity) {
//                     console.log("purchase item")
//                     // purchaseItem();

//                 }
//                 else{
// console.log("not enough goods!")
                    )}
            })
    });
}