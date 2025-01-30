const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"

});

con.connect((err) => {
    if (err) {
        console.warn("error");
    }
    else {
        console.warn("connected");
    }
});

con.query("select * from users", (errr, result) => {
    console.log(result);

});



// // Connect to MySQL
// con.connect((err) => {
//     if (err) {
//         console.error("Connection failed: " + err.message);
//         return;
//     }
//     console.log("Connected to MySQL successfully!");

//     // Create database if it doesn't exist
//     con.query("CREATE DATABASE IF NOT EXISTS test", (err, result) => {
//         if (err) {
//             console.error("Error creating database: " + err.message);
//         } else {
//             console.log("Database 'test' is ready!");
//         }
//         con.end(); // Close connection
//     });
// });
