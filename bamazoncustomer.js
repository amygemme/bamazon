var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Pl@to360",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    Start();
});

var departments = [];

function Start() {
    var query = "SELECT product_name, department_name FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length - 1; i++) {
            let product = res[i];
            let product2 = res[i + 1];
            if (product2.department_name != product.department_name) {
                console.log(product.department_name)
                departments.push(product.department_name)
            }

            if (i === res.length - 2) {
                console.log(product2.department_name)
                departments.push(product2.department_name)
            }
        }
        console.log(departments);
    
        inquirer  // pick a department 
            .prompt({
                name: "action",
                type: "list",
                message: "Which Department would you like to shop in?",
                choices: departments
            })
            .then(function (answer) {
                console.log(answer)
                // grab products from data base here
                var products = [];
                for (i = 0; i < res.length; i++) {
                    if (res[i].department_name === answer.action && res[i].quantity != 0) {
                        products.push((res[i].product_name))
                    }
                }
                inquirer // pick a product
                    .prompt({
                        name: "action",
                        type: "list",
                        message: "Which Product would you like to buy?",
                        choices: products
                    })
                    .then(function (answer) {
                        console.log(answer.action);  // item chosen
                        var item = answer.action;
                        var query = "SELECT quantity, price FROM products WHERE ?";
                        connection.query(query, { product_name: item }, function (err, res) {
                            console.log(res[0].quantity);
                            console.log(res[0].price);
                            var newqty = res[0].quantity -1;
                            var price = res[0].price;
                            console.log("The price of the " + item + "is $" + price)
                            inquirer  // checkout question
                                .prompt({
                                    name: "action",
                                    type: "list",
                                    message: "Would you like to checkout?",
                                    choices: ["yes", "no"]
                                })
                                .then(function (answer) {
                                    console.log(answer)
                                    if (answer.action === "yes") {
                                        var query2 = "UPDATE products SET quantity=" + newqty + " WHERE ?";
                                        connection.query(query2, { product_name: item }, function (err, res) {
                                            console.log("item sold");
                                            console.log(query2);
                                            Start();
            

                                        })
                                    }
                                    if (answer.action === "no"){
                                        Start();
                                    }
                                })

                        })

                    })
            }
            )

    })

}
