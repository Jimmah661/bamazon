var inq = require('inquirer');
var sql = require('mysql');
var table = require('console.table')

var connection = sql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'james',
    password: 'Pancake2019',
    database: 'bamazon'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected with ID " + connection.threadId + "\n");
    checkItems();
})

function checkItems() {
    var query = 'SELECT * FROM products'
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Items Currently available:\n")
        console.table(res)
        itemChoice(res)
    })
}

function itemChoice(selection) {
    let numbers = selection.map(a => a.item_id);
    // console.log(result)
    inq.prompt([
        {
            type: 'list',
            message: 'which item would you like to purchase?',
            name: "chosen",
            choices: numbers
        }, {
            type: 'number',
            message: 'How many would you like to purchase?',
            name: 'quantity',

        }
    ]).then(function (data) {
        selection.forEach(function (value) {
            if (value.item_id === data.chosen && data.quantity <= value.stock_quantity) {
                console.log("Thats fine")
            } else if (value.item_id === data.chosen && data.quantity > value.stock_quantity) {
                console.log("Sorry, There isn't enough stock to fulfil that order")
            }
        })
        connection.end();
    })
};