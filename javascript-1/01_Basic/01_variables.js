const accountId =144553
let accountEmail = "Shubham07@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;


// accountId = 2  //not allowed

accountEmail = "Pratik07@gmail.com"
accountPassword = "12121212"
accountCity = "jalgaon"

/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountId,accountCity,accountState])
console.log(accountPassword);
