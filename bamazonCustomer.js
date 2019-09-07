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

function itemChoice(res) {
    inq.prompt([
        {
            type: 'list',
            message: 'which item would you like to purchase?',
            name: "itemChoice",
            choices: res
        }
    ]).then(function (data) { console.log(data); connection.end() })
}